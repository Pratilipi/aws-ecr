COMMAND=$1
STAGE=$2
APP_NAME=$3
APP_VERSION=$4

if [ "$COMMAND" != "create" -a "$COMMAND" != "build" -a "$COMMAND" != "push" -a "$COMMAND" != "delete" ] || [ "$STAGE" != "devo" -a "$STAGE" != "prod" ] || [ "$APP_NAME" == "" ]
then
  echo "syntax: bash build-app.sh <command> <stage> <app-name> <app-version>"
  exit 0
fi



if [ $STAGE == "devo" ]
then
  AWS_PROJ_ID="381780986962"
elif [ $STAGE == "prod" ]
then
  AWS_PROJ_ID="to-do"
fi

ECR_REPO=$AWS_PROJ_ID.dkr.ecr.ap-southeast-1.amazonaws.com
ECR_IMAGE=$ECR_REPO/$APP_NAME:$APP_VERSION



if [ $COMMAND == "create" ]
then

  aws ecr create-repository --repository-name $APP_NAME
# Create a service with node:hello-world task-def

elif [ $COMMAND == "build" ]
then

  cat Dockerfile.raw \
    | sed "s/\$DOCKER_REPO/$ECR_REPO/g" \
    > Dockerfile
  sudo docker build --tag $ECR_IMAGE .
  rm Dockerfile

elif [ $COMMAND == "push" ]
then

  cat Dockerfile.raw \
    | sed "s/\$DOCKER_REPO/$ECR_REPO/g" \
    > Dockerfile
  cat ecr-task-def.raw \
    | sed "s/\$AWS_PROJ_ID/$AWS_PROJ_ID/g" \
    | sed "s/\$APP_NAME/$APP_NAME/g" \
    | sed "s/\$APP_VERSION/$APP_VERSION/g" \
    > ecr-task-def.json
  sudo docker build --tag $ECR_IMAGE .
  sudo docker push $ECR_IMAGE
  aws ecs register-task-definition --cli-input-json file://ecr-task-def.json
  rm Dockerfile
  rm ecr-task-def.json

elif [ $COMMAND == "delete" ]
then

  aws ecs update-service --cluster pratilipi-$STAGE-ecs --service $APP_NAME --desired-count 0
  aws ecs delete-service --cluster pratilipi-$STAGE-ecs --service $APP_NAME

fi
