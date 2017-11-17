echo "$4***** Running bash app-deploy-notification.sh $1 $2 $3 $4 $5"

COMMAND=$1
REALM=$2
STAGE=$3
APP_NAME=$4
APP_VERSION=$5

if [ "$COMMAND" != "build" -a "$COMMAND" != "run" -a "$COMMAND" != "push" -a "$COMMAND" != "create" -a "$COMMAND" != "update" -a "$COMMAND" != "delete" ] || [ "$REALM" != "product" -a "$REALM" != "growth" ] || [ "$STAGE" != "devo" -a "$STAGE" != "gamma" -a "$STAGE" != "prod" ] || [ "$APP_NAME" == "" ] || [ "$APP_VERSION" == "" ]
then
  echo "$APP_NAME***** syntax: bash app.sh <command> <realm> <stage> <app-name> <app-version>"
  exit 1
fi

if [ ! -f "Dockerfile-$APP_NAME.raw" ]
then
  echo "$APP_NAME***** Could not find Dockerfile-$APP_NAME.raw !"
  exit 1
fi

if [ ! -f "ecr-task-def-$APP_NAME.raw" ]
then
  echo "$APP_NAME***** Could not find ecr-task-def-$APP_NAME.raw !"
  exit 1
fi

replace_dockerfile()
{
  echo "$APP_NAME***** replacing Dockerfile-$APP_NAME.raw and storing in Dockerfile"
  cat Dockerfile-$APP_NAME.raw \
  | sed "s#\$DOCKER_REPO#$ECR_REPO#g" \
  | sed "s#\$STAGE#$STAGE#g" \
  > Dockerfile
  echo "$APP_NAME***** created Dockerfile with replaced contents of Dockerfile-$APP_NAME.raw"
}

build_image()
{
  echo "$APP_NAME***** image: building $ECR_IMAGE"
  $(aws ecr get-login --no-include-email)
  docker build --tag $ECR_IMAGE .
  STATUS=$?
  echo "$APP_NAME***** Deleting Dockerfile"
  rm Dockerfile
  echo "$APP_NAME***** Successfully deleted Dockerfile"
  if [ $STATUS == 0 ]
  then
    echo "$APP_NAME***** image: $ECR_IMAGE built"
  else
    echo "$APP_NAME***** error while builing image: $ECR_IMAGE"
    exit $STATUS
  fi
}

run_image()
{
  echo "$APP_NAME***** image: running $ECR_IMAGE"
  docker run $ECR_IMAGE
  STATUS=$?
  if [ $STATUS == 0 ]
  then
    echo "$APP_NAME***** image: $ECR_IMAGE successfully ran"
  else
    echo "$APP_NAME***** error while running image: $ECR_IMAGE"
    exit $STATUS
  fi
}

create_repo()
{
  REPO_NAMES=$(aws ecr describe-repositories | jq  '.repositories[].repositoryName')

  REPO_CREATED=0

  for REPO_NAME in $REPO_NAMES
  do
   if [ $REPO_NAME == "\"$PREFIX$STAGE/$APP_NAME\"" ]
   then
    echo "$APP_NAME***** repository: $PREFIX$STAGE/$APP_NAME exists."
    REPO_CREATED=1
    break
   fi
  done

  if [ $REPO_CREATED == 0 ]
  then
    echo "$APP_NAME***** creating ecr repository: $PREFIX$STAGE/$APP_NAME"
    aws ecr create-repository --repository-name $PREFIX$STAGE/$APP_NAME >> /dev/null
    STATUS=$?
    if [ $STATUS == 0 ]
    then
      echo "$APP_NAME***** repository: $PREFIX$STAGE/$APP_NAME created."
    else
      echo "$APP_NAME***** error while creating repository: $PREFIX$STAGE/$APP_NAME"
      exit $STATUS
    fi
  fi
}

push_image()
{
  echo "$APP_NAME***** image: pushing $ECR_IMAGE"
  $(aws ecr get-login --no-include-email)
  docker push $ECR_IMAGE

  STATUS=$?
  if [ $STATUS == 0 ]
  then
    echo "$APP_NAME***** image: $ECR_IMAGE pushed."
  else
    echo "$APP_NAME***** error while pushing image: $ECR_IMAGE"
    exit $STATUS
  fi
}

replace_task_def()
{
  echo "$APP_NAME***** replacing ecr-task-def-$APP_NAME.raw and storing in ecr-task-def.json"
  cat ecr-task-def-$APP_NAME.raw \
    | sed "s#\$STAGE#$STAGE#g" \
    | sed "s#\$PREFIX#$PREFIX#g" \
    | sed "s#\$DOCKER_REPO#$ECR_REPO#g" \
    | sed "s#\$APP_NAME#$APP_NAME#g" \
    | sed "s#\$APP_VERSION#$APP_VERSION#g" \
    | sed "s#\$AWS_PROJ_ID#$AWS_PROJ_ID#g" \
    > ecr-task-def.json
  echo "$APP_NAME***** created ecr-task-def.json with replaced contents of ecr-task-def-$APP_NAME.raw"
}

register_task_def()
{
  echo "$APP_NAME***** registering ecr-task-def.json"
  TASK_DEF_VER=$(aws ecs register-task-definition --cli-input-json file://ecr-task-def.json | jq -r '.taskDefinition.revision')
  STATUS=$?
  echo "$APP_NAME***** Deleting ecr-task-def.json"
  rm ecr-task-def.json
  echo "$APP_NAME***** Successfully deleted ecr-task-def.json"
  if [ $STATUS == 0 ]
  then
    echo "$APP_NAME***** task-def: $APP_NAME registered."
  else
    echo "$APP_NAME***** error while registering task-def: $APP_NAME"
    exit $STATUS
  fi
}

create_log()
{
  echo "$APP_NAME***** logs: creating $PREFIX$STAGE-$APP_NAME"
  aws logs create-log-group --log-group-name $PREFIX$STAGE-$APP_NAME
  STATUS=$?
  if [ $STATUS == 0 ]
  then
    echo "$APP_NAME***** logs: $PREFIX$STAGE-$APP_NAME created."
  else
    echo "$APP_NAME***** error while creating logs: $PREFIX$STAGE-$APP_NAME"
    exit $STATUS
  fi

  RETENTION_IN_DAYS=7
  if [ $STAGE == "devo" ]
  then
    RETENTION_IN_DAYS=1
  fi
  
  echo "$APP_NAME***** logs: setting retention-in-days as $RETENTION_IN_DAYS for $PREFIX$STAGE-$APP_NAME"
  aws logs put-retention-policy --log-group-name $PREFIX$STAGE-$APP_NAME --retention-in-days $RETENTION_IN_DAYS
  STATUS=$?
  if [ $STATUS == 0 ]
  then
    echo "$APP_NAME***** logs: $PREFIX$STAGE-$APP_NAME retention-in-days set to $RETENTION_IN_DAYS."
  else
    echo "$APP_NAME***** error while setting retention-in-days for logs: $PREFIX$STAGE-$APP_NAME"
    exit $STATUS
  fi
}

create_service()
{
  echo ... started creating service
  echo AWS response:
  echo "****************************************************************"
  aws ecs create-service \
    --cluster $PREFIX$STAGE-ecs \
    --service-name $APP_NAME \
    --task-definition $APP_NAME:$TASK_DEF_VER \
    --desired-count 1
  echo "****************************************************************"
  echo ... created service: $APP_NAME
}

update_service()
{
  echo "$APP_NAME***** service: updating $APP_NAME."
  aws ecs update-service \
    --cluster $PREFIX$STAGE-ecs \
    --service $APP_NAME \
    --task-definition $APP_NAME:$TASK_DEF_VER
  STATUS=$?
  if [ $STATUS == 0 ]
  then
    echo "$APP_NAME***** service: $APP_NAME updated."
  else
    echo "$APP_NAME***** error while updating service: $APP_NAME"
    exit $STATUS
  fi
}

if [ $REALM == "growth" ]
then
  PREFIX="gr-"
  if [ $STAGE == "devo" ]
  then
    LB_LISTNER="arn:aws:elasticloadbalancing:ap-southeast-1:381780986962:listener/app/devo-lb-pvt/9063c6c4e264ea17/b144bca497a9a1aa"
  elif [ $STAGE == "gamma" ]
  then
    LB_LISTNER="arn:aws:elasticloadbalancing:ap-southeast-1:370531249777:listener/app/gamma-lb-pvt/98bfeb8d67ee2d26/e0d977e1084f2f2a"
  elif [ $STAGE == "prod" ]
  then
    LB_LISTNER="arn:aws:elasticloadbalancing:ap-southeast-1:370531249777:listener/app/prod-lb-pvt/bfbfa36e82445261/3e3a1b93ec7d49e1"
  fi
else
  PREFIX=""
  if [ $STAGE == "devo" ]
  then
    LB_LISTNER="arn:aws:elasticloadbalancing:ap-southeast-1:381780986962:listener/app/devo-lb-pvt/9063c6c4e264ea17/33322206f52c31c4"
  elif [ $STAGE == "gamma" ]
  then
    LB_LISTNER="arn:aws:elasticloadbalancing:ap-southeast-1:370531249777:listener/app/gamma-lb-pvt/98bfeb8d67ee2d26/a854c15563502db0"
  elif [ $STAGE == "prod" ]
  then
    LB_LISTNER="arn:aws:elasticloadbalancing:ap-southeast-1:370531249777:listener/app/prod-lb-pvt/bfbfa36e82445261/0104e43e491b57f8"
  fi
fi

if [ $STAGE == "devo" ]
then
  AWS_PROJ_ID="381780986962"
  VPC_ID="vpc-662a5602"
  SNS_RESOURCE="arn:aws:sns:ap-southeast-1:381780986962:devo-ecs-asg-sns"
  AUTO_SCALING_IAM_ROLE="arn:aws:iam::381780986962:role/autoscaling_ecs"
elif [ $STAGE == "gamma" ]
then
  AWS_PROJ_ID="370531249777"
  VPC_ID="vpc-c13c7da5"
  SNS_RESOURCE="arn:aws:sns:ap-southeast-1:370531249777:gamma-ecs-asg-sns"
  AUTO_SCALING_IAM_ROLE="arn:aws:iam::370531249777:role/ecsAutoscaleRole"
elif [ $STAGE == "prod" ]
then
  AWS_PROJ_ID="370531249777"
  VPC_ID="vpc-c13c7da5"
  SNS_RESOURCE="arn:aws:sns:ap-southeast-1:370531249777:prod-ecs-asg-sns"
  AUTO_SCALING_IAM_ROLE="arn:aws:iam::370531249777:role/ecsAutoscaleRole"
fi

# TODO: Error out if project id != $AWS_PROJ_ID

ECR_REPO=$AWS_PROJ_ID.dkr.ecr.ap-southeast-1.amazonaws.com/$PREFIX$STAGE
ECR_IMAGE=$ECR_REPO/$APP_NAME:$APP_VERSION



if [ $COMMAND == "build" ]
then
  echo "$APP_NAME***** executing $COMMAND $REALM $STAGE $APP_NAME $APP_VERSION"
  replace_dockerfile
  build_image
elif [ $COMMAND == "run" ]
then
  echo "$APP_NAME***** executing $COMMAND $REALM $STAGE $APP_NAME $APP_VERSION"
  replace_dockerfile
  build_image
  run_image
elif [ $COMMAND == "push" ]
then
  echo "$APP_NAME***** executing $COMMAND $REALM $STAGE $APP_NAME $APP_VERSION"
  replace_dockerfile
  build_image
  create_repo
  push_image
  replace_task_def
  register_task_def
elif [ $COMMAND == "create" ]
then
  echo "$APP_NAME***** executing $COMMAND $REALM $STAGE $APP_NAME $APP_VERSION"
  replace_dockerfile
  build_image
  create_repo
  push_image
  replace_task_def
  register_task_def
  create_log
  create_service
#  autoscaling_alarm
elif [ $COMMAND == "update" ]
then
  echo "$APP_NAME***** executing $COMMAND $REALM $STAGE $APP_NAME $APP_VERSION"
  replace_dockerfile
  build_image
  create_repo
  push_image
  replace_task_def
  register_task_def
  update_service
elif [ $COMMAND == "delete" ]
then
  echo "$APP_NAME***** executing $COMMAND $REALM $STAGE $APP_NAME $APP_VERSION"
  echo "$APP_NAME***** service: updating $APP_NAME."
  aws ecs update-service --cluster $PREFIX$STAGE-ecs --service $APP_NAME --desired-count 0
  echo "$APP_NAME***** service: $APP_NAME updated."
  echo "$APP_NAME***** service: deleting $APP_NAME."
  aws ecs delete-service --cluster $PREFIX$STAGE-ecs --service $APP_NAME
  echo "$APP_NAME***** service: $APP_NAME deleted."
fi

echo "$APP_NAME***** app-deploy-notification.sh $1 $2 $3 $4 $5 SUCCESS"
