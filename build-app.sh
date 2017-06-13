STAGE=$1
APP_NAME=$2
APP_VERSION=$3

if [ "$STAGE" != "devo" -a "$STAGE" != "prod" ] || [ "$APP_NAME" == "" ] || [ "$APP_VERSION" == "" ]
then
  echo "syntax: bash build-app.sh <stage> <app-name> <app-version>"
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


cat Dockerfile.raw \
  | sed "s/\$DOCKER_REPO/$ECR_REPO/g" \
  > Dockerfile
sudo docker build --tag $ECR_IMAGE .
rm Dockerfile

sudo docker push $ECR_IMAGE

