echo "...***==> Running bash build-image.sh $1 $2 $3 $4"
REALM=$1
STAGE=$2
DOCKER_IMAGE=$3
DOCKER_IMAGE_VERSION=$4

if [ "$REALM" != "product" -a "$REALM" != "growth" ] || [ "$STAGE" != "devo" -a "$STAGE" != "gamma" -a "$STAGE" != "prod" ] || [ "$DOCKER_IMAGE" == "" ] || [ "$DOCKER_IMAGE_VERSION" == "" ]
then
  echo "syntax: bash build-image.sh <realm> <stage> <docker-image> <docker-image-version>"
  exit 1
fi

if [ ! -f "Dockerfile.raw" ]
then
  echo "...***==> Could not find Dockerfile.raw !"
  exit 1
fi

replace_dockerfile()
{
  echo "...***==> replacing Dockerfile.raw and storing in Dockerfile"
  cat Dockerfile.raw \
   | sed "s#\$REALM#$REALM#g" \
   | sed "s#\$STAGE#$STAGE#g" \
   | sed "s#\$DOCKER_IMAGE_VERSION#$DOCKER_IMAGE_VERSION#g" \
   | sed "s#\$DOCKER_IMAGE#$DOCKER_IMAGE#g" \
   | sed "s#\$AWS_PROJ_ID#$AWS_PROJ_ID#g" \
   | sed "s#\$GCP_PROJ_ID#$GCP_PROJ_ID#g" \
   | sed "s#\$API_END_POINT#$API_END_POINT#g" \
   | sed "s#\$BUILD_COMMAND#$BUILD_COMMAND#g" \
   > Dockerfile
  echo "...***==> created Dockerfile with replaced contents from Dockerfile.raw"

}

build_image()
{
  echo "...***==> image: building $ECR_IMAGE"
  $(aws ecr get-login --no-include-email)
  docker build --tag $ECR_IMAGE .
  STATUS=$?
  echo "...***==> Deleting Dockerfile"
  rm Dockerfile
  echo "...***==> Successfully deleted Dockerfile"  
  if [ $STATUS == 0 ]
  then
    echo "...***==> image: $ECR_IMAGE built"
  else
    echo "...***==> error while builing image: $ECR_IMAGE"
    exit $STATUS
  fi
}

create_repo()
{
  REPO_NAMES=$(aws ecr describe-repositories | jq  '.repositories[].repositoryName')

  REPO_CREATED=0

  for REPO_NAME in $REPO_NAMES
  do
   if [ $REPO_NAME == "\"$PREFIX$STAGE/$DOCKER_IMAGE\"" ]
   then
    echo "...***==> repository: $PREFIX$STAGE/$DOCKER_IMAGE exists."
    REPO_CREATED=1
    break
   fi
  done

  if [ $REPO_CREATED == 0 ]
  then
    echo "...***==> creating ecr repository: $PREFIX$STAGE/$DOCKER_IMAGE"
    aws ecr create-repository --repository-name $PREFIX$STAGE/$DOCKER_IMAGE >> /dev/null
    STATUS=$?
    if [ $STATUS == 0 ]
    then
      echo "...***==> repository: $PREFIX$STAGE/$DOCKER_IMAGE created."
    else
      echo "...***==> error while creating repository: $PREFIX$STAGE/$DOCKER_IMAGE"
      exit $STATUS
    fi
  fi
}

push_image()
{
  echo "...***==> image: pushing $ECR_IMAGE"
  $(aws ecr get-login --no-include-email)
  docker push $ECR_IMAGE

  STATUS=$?
  if [ $STATUS == 0 ]
  then
    echo "...***==> image: $ECR_IMAGE pushed."
  else
    echo "...***==> error while pushing image: $ECR_IMAGE"
    exit $STATUS
  fi
}


if [ $REALM == "growth" ]
then
  PREFIX="gr-"
else
  PREFIX=""
fi

if [ $STAGE == "devo" ]
then
  AWS_PROJ_ID="381780986962"
  GCP_PROJ_ID="devo-pratilipi"
  API_END_POINT="internal-devo-lb-pvt-1359086914.ap-southeast-1.elb.amazonaws.com"
elif [ $STAGE == "gamma" ]
then
  AWS_PROJ_ID="370531249777"
  GCP_PROJ_ID="prod-pratilipi"
  API_END_POINT="internal-gamma-lb-pvt-482748674.ap-southeast-1.elb.amazonaws.com"
elif [ $STAGE == "prod" ]
then
  AWS_PROJ_ID="370531249777"
  GCP_PROJ_ID="prod-pratilipi"
  API_END_POINT="internal-prod-lb-pvt-1889763041.ap-southeast-1.elb.amazonaws.com"
fi

if [ ! -d "lib-$DOCKER_IMAGE" ]
then
  mkdir lib-$DOCKER_IMAGE
fi

if [ $DOCKER_IMAGE == "node" ]
then
  BUILD_COMMAND="npm install --prefix .. lib"
else
  BUILD_COMMAND="pwd"
fi

ECR_REPO=$AWS_PROJ_ID.dkr.ecr.ap-southeast-1.amazonaws.com/$PREFIX$STAGE
ECR_IMAGE=$ECR_REPO/$DOCKER_IMAGE:$DOCKER_IMAGE_VERSION

replace_dockerfile

build_image

create_repo

push_image

echo "...***==> build-image.sh $1 $2 $3 $4 SUCCESS"

