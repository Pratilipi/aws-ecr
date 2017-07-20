echo "...***==> Running bash base-image.sh $1 $2"
REALM=$1
STAGE=$2

cp gcp-$STAGE.json base-image/keyfile.json

cd base-image

bash build-image.sh $REALM $STAGE ubuntu 14.04
bash build-image.sh $REALM $STAGE node 8.0.0
bash build-image.sh $REALM $STAGE java 8u111
bash build-image.sh $REALM $STAGE golang 1.8.3
bash build-image.sh $REALM $STAGE docker latest

cd ..

echo "...***==> base-image.sh $1 $2 SUCCESS"
