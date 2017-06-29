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
elif [ $STAGE == "gamma" ]
then
  AWS_PROJ_ID="370531249777"
elif [ $STAGE == "prod" ]
then
  AWS_PROJ_ID="370531249777"
fi

ECR_REPO=$AWS_PROJ_ID.dkr.ecr.ap-southeast-1.amazonaws.com/$STAGE
ECR_IMAGE=$ECR_REPO/$DOCKER_IMAGE:$DOCKER_IMAGE_VERSION


cat $DOCKER_IMAGE.raw \
  | sed "s#\$DOCKER_REPO#$ECR_REPO#g" \
  > Dockerfile

docker build --tag $ECR_IMAGE .
$(aws ecr get-login --no-include-email)
docker push $ECR_IMAGE

rm Dockerfile
