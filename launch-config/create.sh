REALM=$1
STAGE=$2
TYPE=$3

if [ "$REALM" != "product" -a "$REALM" != "growth" ] || [ "$STAGE" != "devo" -a "$STAGE" != "gamma" -a "$STAGE" != "prod" ] || [ "$TYPE" != "default" -a "$TYPE" != "devops" ]
then
  echo "syntax: bash app.sh <realm> <stage> <type>"
  exit 0
fi


if [ $STAGE == "prod" -a $TYPE == "default" ]
then
  INSTANCE_TYPE="m4.large"
elif [ $STAGE == "prod" ] || [ $TYPE == "default" ]
then
  INSTANCE_TYPE="t2.medium"
else
  INSTANCE_TYPE="t2.micro"
fi

if [ $STAGE == "devo" ]
then
  SECURITY_GROUP="sg-73694414"
elif [ $STAGE == "gamma" ]
then
  SECURITY_GROUP="sg-6a2e140d"
elif [ $STAGE == "prod" ]
then
  SECURITY_GROUP="sg-5e1a1f39"
fi

if [ $REALM == "growth" ]
then
  STAGE=gr-$STAGE
fi


cat userdata-$TYPE.raw \
    | sed "s#\$STAGE#$STAGE#g" \
    > userdata-$TYPE.txt

aws autoscaling create-launch-configuration \
    --launch-configuration-name $STAGE-ecs-lc-$TYPE-$INSTANCE_TYPE-$(date +%Y%m%d) \
    --instance-type $INSTANCE_TYPE \
    --security-groups $SECURITY_GROUP \
    --image-id ami-19f7787a \
    --key-name $STAGE \
    --iam-instance-profile ecsInstanceRole \
    --user-data file://userdata-$TYPE.txt \
    --block-device-mappings "DeviceName=/dev/xvdcz,Ebs={VolumeSize=22,VolumeType=gp2,DeleteOnTermination=true,Encrypted=true}" \
    --instance-monitoring Enabled=true \
    --no-ebs-optimized \
    --associate-public-ip-address

rm userdata-$TYPE.txt
