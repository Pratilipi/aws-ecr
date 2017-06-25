STAGE=$1

cp gcp-$STAGE.json base-image/keyfile.json

cd base-image

bash build-image.sh $STAGE ubuntu 14.04
bash build-image.sh $STAGE node 8.0.0
bash build-image.sh $STAGE java 8
bash build-image.sh $STAGE golang 1.8.3
bash build-image.sh $STAGE docker latest

cd ..
