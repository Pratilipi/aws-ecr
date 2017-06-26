const express = require('express');
const bodyParser = require('body-parser');
const exec = require('child_process').exec;

const app = express();

app.use(bodyParser.json());

app.get('/health', function (req, res) {
  res.send('Stage:' + process.env.STAGE);
});

app.post('/*', function (req, res) {
  console.log(`Request received on ${req.path}`);
  console.log(req.body.repository.name);
  var appName = req.body.repository.name;

  if( (process.env.STAGE == 'devo' && req.body.ref != 'refs/heads/devo')
      || (process.env.STAGE == 'gamma' && req.body.ref != 'refs/heads/gamma')
      || (process.env.STAGE == 'prod' && req.body.ref != 'refs/heads/master') ) {
    res.send(`No deployment in ${process.env.STAGE} for a commit in ${req.body.ref.substr(11)} branch.`);
    return;
  }

  if(appName.startsWith('ecs-'))
    appName = appName.substr( 4 );
  var appVersion = Math.round(new Date().getTime() / 1000 / 60);
  var command = `bash app-deploy.sh update ${process.env.STAGE} ${appName} ${appVersion}`;
  console.log(`Running command: ${command}`)
  exec(command, function(error, stdout, stderr) {
    res.send(`<html><body><pre>${stderr}${stdout}</pre></body></html>`);
  });
});

app.listen(80);

