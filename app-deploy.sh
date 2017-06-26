COMMAND=$1
STAGE=$2
APP_NAME=$3
APP_VERSION=$4

if [ $APP_NAME == "ecs" ]
then
  GIT_REPO=ecs
else
  GIT_REPO=ecs-$APP_NAME
fi

if [ ! -d "$GIT_REPO" ]
then
  git clone https://github.com/Pratilipi/$GIT_REPO.git
    if [ $GIT_REPO == "ecs" ]
    then
      cp -r aws-$STAGE $GIT_REPO/aws-$STAGE
      cp gcp-$STAGE.json $GIT_REPO
    fi
fi

cd $GIT_REPO

git pull
bash ../app.sh $1 $2 $3 $4

cd ..
