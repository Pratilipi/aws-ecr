const express = require('express');
const bodyParser = require('body-parser');
const exec = require('child_process').exec;
const app = express();
const REALM = process.env.REALM;
const STAGE = process.env.STAGE;


var baseImageProcess = exec(`bash base-image.sh ${REALM} ${STAGE}`, {maxBuffer: 1024 * 1024}, function(error, stdout, stderr) {
  if(error != null) {
    console.error('Failed to create base images !');
    console.error(String(error));
  }
});
baseImageProcess.stdout.pipe(process.stdout);
baseImageProcess.stderr.pipe(process.stdout);


var customImageProcess = exec(`bash custom-image.sh ${REALM} ${STAGE}`, {maxBuffer: 2 * 1024 * 1024}, function(error, stdout, stderr) {
  if(error != null) {
    console.error('Failed to create custom images !');
    console.error(String(error));
  }
});
customImageProcess.stdout.pipe(process.stdout);
customImageProcess.stderr.pipe(process.stdout);


app.use(bodyParser.json());

app.get('/health', function (req, res) {
  res.send('Realm:' + REALM + ', Stage:' + STAGE);
});

app.post('/*', function (req, res) {

  if( (STAGE == 'devo' && req.body.ref != 'refs/heads/devo')
      || (STAGE == 'gamma' && req.body.ref != 'refs/heads/gamma')
      || (STAGE == 'prod' && req.body.ref != 'refs/heads/master') ) {
    res.status(400).send(`No deployment in ${REALM}/${STAGE} for commit in ${req.body.repository.name}/${req.body.ref.substr(11)} branch.`);
    return;
  }
  
  if(req.body.deleted) {
    res.status(400).send(`No deployment in ${REALM}/${STAGE} for deleted ${req.body.repository.name}/${req.body.ref.substr(11)} branch.`);
    return;
  }

  var appName = req.body.repository.name;
  if(appName.startsWith('ecs-'))
    appName = appName.substr( 4 );
  var appVersion = Math.round(new Date().getTime() / 1000 / 60);

  var appCmd = `bash app-deploy.sh update ${REALM} ${STAGE} ${appName} ${appVersion}`;
  console.log(`Running command: ${appCmd}`);
  var appProcess = exec(appCmd, {maxBuffer: 1024 * 1024}, function(error, stdout, stderr) {
    if(error !== null)
      console.log('exec error: ' + error);
  });
  appProcess.stdout.pipe(process.stdout);
  appProcess.stderr.pipe(process.stdout);

    res.send(`Deploying to ${REALM}/${STAGE}/${appName} from ${req.body.ref.substr(11)} branch.`);

});

app.listen(80);

