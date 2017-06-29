const express = require('express');
const bodyParser = require('body-parser');
const exec = require('child_process').exec;
const app = express();


var baseImageProcess = exec(`bash base-image.sh ${process.env.STAGE}`, {maxBuffer: 1024 * 1024}, function(error, stdout, stderr) {
  if(error != null) {
    console.error('Failed to create base images !');
    console.error(String(error));
  }
});
baseImageProcess.stdout.pipe(process.stdout);
baseImageProcess.stderr.pipe(process.stdout);


var customImageProcess = exec(`bash custom-image.sh ${process.env.STAGE}`, {maxBuffer: 2 * 1024 * 1024}, function(error, stdout, stderr) {
  if(error != null) {
    console.error('Failed to create custom images !');
    console.error(String(error));
  }
});
customImageProcess.stdout.pipe(process.stdout);
customImageProcess.stderr.pipe(process.stdout);


app.use(bodyParser.json());

app.get('/health', function (req, res) {
  res.send('Stage:' + process.env.STAGE);
});

app.post('/*', function (req, res) {

  if( (process.env.STAGE == 'devo' && req.body.ref != 'refs/heads/devo')
      || (process.env.STAGE == 'gamma' && req.body.ref != 'refs/heads/gamma')
      || (process.env.STAGE == 'prod' && req.body.ref != 'refs/heads/master') ) {
    res.status(400).send(`No deployment in ${process.env.STAGE} for commit in ${req.body.repository.name}/${req.body.ref.substr(11)} branch.`);
    return;
  }
  
  if(req.body.deleted) {
    res.status(400).send(`No deployment in ${process.env.STAGE} for deleted ${req.body.repository.name}/${req.body.ref.substr(11)} branch.`);
    return;
  }

  var appName = req.body.repository.name;
  if(appName.startsWith('ecs-'))
    appName = appName.substr( 4 );
  var appVersion = Math.round(new Date().getTime() / 1000 / 60);

  var appCmd = `bash app-deploy.sh update ${process.env.STAGE} ${appName} ${appVersion}`;
  console.log(`Running command: ${appCmd}`);
  var appProcess = exec(appCmd, {maxBuffer: 1024 * 1024}, function(error, stdout, stderr) {
    if(error !== null)
      console.log('exec error: ' + error);
  });
  appProcess.stdout.pipe(process.stdout);
  appProcess.stderr.pipe(process.stdout);

    res.send(`Deploying to ${appName}/${process.env.STAGE} from ${req.body.ref.substr(11)} branch. Deployment logs are here - https://${process.env.STAGE}.pratilipi.com/ecs/${appName}-${appVersion}.log`);

});

app.listen(80);

