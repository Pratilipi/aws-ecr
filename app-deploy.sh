echo "...***==> Running bash app-deploy.sh $1 $2 $3 $4 $5"

COMMAND=$1
REALM=$2
STAGE=$3
APP_NAME=$4
APP_VERSION=$5

git_clone()
{
  if [ ! -d "$GIT_REPO" ]
  then
    git clone -b $GIT_BRANCH $GIT_LINK/$GIT_REPO.git
    if [ $GIT_REPO == "ecs" ]
    then
      if [ ! -d "gitconfig" -a ! -d "aws-$STAGE" -a ! -f "gcp-$STAGE.json" ]
      then
        echo "...***==> error:either gitconfig aws-$STAGE gcp-$STAGE.json do not exist."
        exit 1
      fi
      cp gitconfig $GIT_REPO
      cp -r aws-$STAGE $GIT_REPO/aws-$STAGE
      cp gcp-$STAGE.json $GIT_REPO
    fi
  fi

  cd $GIT_REPO

  git fetch
  git reset --hard origin/$GIT_BRANCH
}

if [ "$COMMAND" != "update" -a "$COMMAND" != "create" ] || [ "$REALM" != "product" -a "$REALM" != "growth" ] || [ "$STAGE" != "devo" -a "$STAGE" != "gamma" -a "$STAGE" != "prod" ] || [ "$APP_NAME" == "" ] || [ "$APP_VERSION" == "" ]
then
  echo "syntax: bash app-deploy.sh <command> <realm> <stage> <app-name> <app-version>"
  exit 1
fi


PREFIX=""
GIT_LINK="https://github.com/Pratilipi"
if [ $REALM == "growth" ]
then
  PREFIX="gr-"
  GIT_LINK=$GIT_LINK-Growth
fi

GIT_BRANCH=$STAGE
if [ $STAGE == "prod" ]
then
  GIT_BRANCH=master
fi

GIT_REPO=ecs-$APP_NAME
if [ $APP_NAME == "ecs" ]
then
  GIT_REPO=$APP_NAME
fi

git_clone

bash ../app.sh $COMMAND $REALM $STAGE $APP_NAME $APP_VERSION
git gc

cd ..


echo "...***==> app-deploy.sh $1 $2 $3 $4 $5 SUCCESS"
