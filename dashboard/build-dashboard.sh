echo "$2***** Running bash build-dashboard.sh $1 $2 $3 $4"
name=$1
appName=$2
targetGroup=$3
loadBalancer=$4

if [ ! -f "DashBoard.template" ]
then
  echo "$appName***** Could not find DashBoard.template !"
  exit 1
fi

replace_dashboard()
{
  echo "$appName***** replacing DashBoard.template and storing in DashBoard_$appName.json"
  cat DashBoard.template \
   | sed "s#\$appName#$appName#g" \
   | sed "s#\$targetGroup#$targetGroup#g" \
   | sed "s#\$loadBalancer#$loadBalancer#g" \
   | sed "s#\$name#$name#g" \
   > DashBoard_$appName.json
  echo "$appName***** created DashBoard_$appName.json with replaced contents from DashBoard.template"
}

replace_dashboard

echo "$appName***** build-dashboard.sh $1 $2 $3 $4 SUCCESS"
