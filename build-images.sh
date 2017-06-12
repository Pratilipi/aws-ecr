STAGE=$1

if [ "$STAGE" != "devo" -a "$STAGE" != "prod" ]
then
  echo "syntax: bash build-images.sh <stage>"
  exit 0
fi


bash build-image.sh $STAGE node 8.0.0
