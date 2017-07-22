echo "***** Running bash custom-image.sh $1 $2"

REALM=$1
STAGE=$2

cd custom-image

bash build-image.sh $REALM $STAGE node-imagemagick 8.0.0
bash build-image.sh $REALM $STAGE ubuntu-nginx 1.0
bash build-image.sh $REALM $STAGE java-gradle 2.2.1

cd ..

echo "***** custom-image.sh $1 $2 SUCCESS"
