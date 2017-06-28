STAGE=$1

cd custom-image

bash build-image.sh $STAGE node-imagemagick 8.0.0

cd ..
