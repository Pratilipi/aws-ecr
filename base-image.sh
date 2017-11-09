REALM=$1
STAGE=$2

cp gcp-$STAGE.json base-image/keyfile.json

cd base-image

# bash build-image.sh $REALM $STAGE ubuntu 14.04
bash build-image.sh $REALM $STAGE ubuntu 16.04
# bash build-image.sh $REALM $STAGE node 8.0.0
# bash build-image.sh $REALM $STAGE node 8.3.0
# bash build-image.sh $REALM $STAGE java 8u111
# bash build-image.sh $REALM $STAGE jetty 9.4.6
# bash build-image.sh $REALM $STAGE golang 1.8.3
# bash build-image.sh $REALM $STAGE docker latest

cd ..
