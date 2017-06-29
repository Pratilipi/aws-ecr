COMMAND=$1
STAGE=$2
APP_NAME=$3
APP_VERSION=$4

if [ $APP_NAME == "ecs" ]
then
  GIT_REPO=$APP_NAME
else
  GIT_REPO=ecs-$APP_NAME
fi

if [ $STAGE == "prod" ]
then
  GIT_BRANCH=master
else
  GIT_BRANCH=$STAGE
fi


if [ ! -d "$GIT_REPO" ]
then
  git clone -b $GIT_BRANCH https://github.com/Pratilipi/$GIT_REPO.git
    if [ $GIT_REPO == "ecs" ]
    then
      cp gitconfig $GIT_REPO
      cp -r aws-$STAGE $GIT_REPO/aws-$STAGE
      cp gcp-$STAGE.json $GIT_REPO
    fi
fi

cd $GIT_REPO

git fetch
git reset --hard origin/$GIT_BRANCH
bash ../app.sh $1 $2 $3 $4
git gc

cd ..
