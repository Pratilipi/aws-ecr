STAGE=$1
DOCKER_IMAGE=$2
DOCKER_IMAGE_VERSION=$3

if [ "$STAGE" != "devo" -a "$STAGE" != "prod" ] || [ "$DOCKER_IMAGE" == "" ] || [ "$DOCKER_IMAGE_VERSION" == "" ]
then
  echo "syntax: bash build-image.sh <stage> <docker-image> <docker-image-version>"
  exit 0
fi


if [ $STAGE == "devo" ]
then
  AWS_PROJ_ID="381780986962"
  GCP_PROJ_ID="devo-pratilipi"
  API_END_POINT="internal-devo-lb-pvt-1359086914.ap-southeast-1.elb.amazonaws.com"
elif [ $STAGE == "prod" ]
then
  AWS_PROJ_ID="to-do"
  GCP_PROJ_ID="prod-pratilipi"
  API_END_POINT="to-do"
fi

if [ $DOCKER_IMAGE == "node" ]
then
  BUILD_COMMAND="npm install --prefix .. lib"
fi

ECR_IMAGE=$AWS_PROJ_ID.dkr.ecr.ap-southeast-1.amazonaws.com/$DOCKER_IMAGE:$DOCKER_IMAGE_VERSION


cat Dockerfile.raw \
  | sed "s/\$STAGE/$STAGE/g" \
  | sed "s/\$DOCKER_IMAGE_VERSION/$DOCKER_IMAGE_VERSION/g" \
  | sed "s/\$DOCKER_IMAGE/$DOCKER_IMAGE/g" \
  | sed "s/\$AWS_PROJ_ID/$AWS_PROJ_ID/g" \
  | sed "s/\$GCP_PROJ_ID/$GCP_PROJ_ID/g" \
  | sed "s/\$API_END_POINT/$API_END_POINT/g" \
  | sed "s/\$BUILD_COMMAND/$BUILD_COMMAND/g" \
  > Dockerfile

sudo docker build --tag $ECR_IMAGE .
sudo docker push $ECR_IMAGE

rm Dockerfile
