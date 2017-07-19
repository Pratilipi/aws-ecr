REALM=$1
STAGE=$2
DOCKER_IMAGE=$3
DOCKER_IMAGE_VERSION=$4

if [ "$STAGE" != "devo" -a "$STAGE" != "gamma" -a "$STAGE" != "prod" ] || [ "$DOCKER_IMAGE" == "" ] || [ "$DOCKER_IMAGE_VERSION" == "" ] || [ "$REALM" != "product" -a "$REALM" != "growth" ]
then
  echo "syntax: bash build-image.sh <realm> <stage> <docker-image> <docker-image-version>"
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

if [ $REALM == "growth" ]
then
  PREFIX="gr-"
else
  PREFIX=""
fi

ECR_REPO=$AWS_PROJ_ID.dkr.ecr.ap-southeast-1.amazonaws.com/$PREFIX$STAGE
ECR_IMAGE=$ECR_REPO/$DOCKER_IMAGE:$DOCKER_IMAGE_VERSION


cat $DOCKER_IMAGE.raw \
  | sed "s#\$DOCKER_REPO#$ECR_REPO#g" \
  > Dockerfile

docker build --tag $ECR_IMAGE .

$(aws ecr get-login --no-include-email)

REPO_NAMES=$(aws ecr describe-repositories | jq  '.repositories[].repositoryName')

REPO_CREATED=0

for REPO_NAME in $REPO_NAMES
do
 if [ $REPO_NAME == "\"$PREFIX$STAGE/$APP_NAME\"" ]
 then
  REPO_CREATED=1
 fi
done

if [ REPO_CREATED == 0 ]
then
  echo ... creating ecr repository: $PREFIX$STAGE/$APP_NAME
  aws ecr create-repository --repository-name $PREFIX$STAGE/$APP_NAME >> /dev/null 2>&1
fi

docker push $ECR_IMAGE

rm Dockerfile
