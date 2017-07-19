const express = require('express');
const bodyParser = require('body-parser');
const exec = require('child_process').exec;
const app = express();


const REALM = process.env.REALM;
const STAGE = process.env.STAGE;

const commands = [
  `bash base-image.sh ${REALM} ${STAGE}`,
  `bash custom-image.sh ${REALM} ${STAGE}`
];


(function run() {

  if(commands.length == 0 ) {
    return setTimeout( run, 5 * 1000 );
  }

  commands.reverse();
  var command = commands.pop();
  commands.reverse();

  console.log(`Running command: ${command}`);
  var cmdProcess = exec(command, {maxBuffer: 2 * 1024 * 1024}, function(error, stdout, stderr) {
    if(error != null) {
      console.error(`Failed to execute command: ${command}`);
      console.error(String(error));
    }
    run();
  });
  cmdProcess.stdout.pipe(process.stdout);
  cmdProcess.stderr.pipe(process.stdout);

})();


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

  commands.push(`bash app-deploy.sh update ${REALM} ${STAGE} ${appName} ${appVersion}`);

  res.send(`Deploying to ${REALM}/${STAGE}/${appName} from ${req.body.ref.substr(11)} branch.`);

});

app.listen(80);

