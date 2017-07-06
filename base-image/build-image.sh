STAGE=$1
DOCKER_IMAGE=$2
DOCKER_IMAGE_VERSION=$3

if [ "$STAGE" != "devo" -a "$STAGE" != "gamma" -a "$STAGE" != "prod" ] || [ "$DOCKER_IMAGE" == "" ] || [ "$DOCKER_IMAGE_VERSION" == "" ]
then
  echo "syntax: bash build-image.sh <stage> <docker-image> <docker-image-version>"
  exit 0
fi


if [ $STAGE == "devo" ]
then
  AWS_PROJ_ID="381780986962"
  GCP_PROJ_ID="devo-pratilipi"
  API_END_POINT="http://internal-devo-lb-pvt-1359086914.ap-southeast-1.elb.amazonaws.com"
elif [ $STAGE == "gamma" ]
then
  AWS_PROJ_ID="370531249777"
  GCP_PROJ_ID="prod-pratilipi"
  API_END_POINT="http://internal-gamma-lb-pvt-482748674.ap-southeast-1.elb.amazonaws.com"
elif [ $STAGE == "prod" ]
then
  AWS_PROJ_ID="370531249777"
  GCP_PROJ_ID="prod-pratilipi"
  API_END_POINT="http://internal-prod-lb-pvt-1889763041.ap-southeast-1.elb.amazonaws.com"
fi

if [ ! -d "lib-$DOCKER_IMAGE" ]
then
  mkdir lib-$DOCKER_IMAGE
fi

if [ $DOCKER_IMAGE == "node" ]
then
  BUILD_COMMAND="npm install --prefix .. lib"
else
  BUILD_COMMAND=pwd
fi

ECR_IMAGE=$AWS_PROJ_ID.dkr.ecr.ap-southeast-1.amazonaws.com/$STAGE/$DOCKER_IMAGE:$DOCKER_IMAGE_VERSION


cat Dockerfile.raw \
  | sed "s#\$STAGE#$STAGE#g" \
  | sed "s#\$DOCKER_IMAGE_VERSION#$DOCKER_IMAGE_VERSION#g" \
  | sed "s#\$DOCKER_IMAGE#$DOCKER_IMAGE#g" \
  | sed "s#\$AWS_PROJ_ID#$AWS_PROJ_ID#g" \
  | sed "s#\$GCP_PROJ_ID#$GCP_PROJ_ID#g" \
  | sed "s#\$API_END_POINT#$API_END_POINT#g" \
  | sed "s#\$BUILD_COMMAND#$BUILD_COMMAND#g" \
  > Dockerfile

docker build --tag $ECR_IMAGE .
$(aws ecr get-login --no-include-email)
docker push $ECR_IMAGE

rm Dockerfile
