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


build_image()
{
  docker build --tag $ECR_IMAGE .
  STATUS=$?
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


if [ $REALM == "growth" ]
then
  PREFIX="gr-"
else
  PREFIX=""
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

ECR_REPO=$AWS_PROJ_ID.dkr.ecr.ap-southeast-1.amazonaws.com/$PREFIX$STAGE
ECR_IMAGE=$ECR_REPO/$DOCKER_IMAGE:$DOCKER_IMAGE_VERSION

if [ ! -f "$DOCKER_IMAGE.raw" ]
then
  echo "...***==> Could not find $DOCKER_IMAGE.raw !"
  exit 1
fi

cat $DOCKER_IMAGE.raw \
  | sed "s#\$DOCKER_REPO#$ECR_REPO#g" \
  > Dockerfile

$(aws ecr get-login --no-include-email)
build_image

create_repo

docker push $ECR_IMAGE

STATUS=$?
if [ $STATUS == 0 ]
then
  echo "...***==> image: $ECR_IMAGE pushed."
else
  echo "...***==> error while pushing image: $ECR_IMAGE"
  exit $STATUS
fi

rm Dockerfile

echo "...***==> build-image.sh $1 $2 $3 $4 SUCCESS"
