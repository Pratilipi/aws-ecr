STAGE=$1

cd custom-image

bash build-image.sh $STAGE node-imagemagick 8.0.0
bash build-image.sh $STAGE ubuntu-nginx 1.0
bash build-image.sh $STAGE java-gradle 2.2.1

cd ..
