if [ $APP_NAME == "ecs" ]
then
  GIT_REPO=ecs
else
  GIT_REPO=ecs-$APP_NAME
fi

if [ ! -d "$GIT_REPO" ]
then
  git clone https://github.com/Pratilipi/$GIT_REPO.git
fi

cd $GIT_REPO

git pull
bash ../app.sh $1 $2 $3 $4

cd ..
