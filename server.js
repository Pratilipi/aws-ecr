const express = require('express');
const exec = require('child_process').exec;

const app = express();

app.get('/health', function (req, res) {
  res.send('Stage:' + process.env.STAGE);
});

app.post('/*', function (req, res) {
  console.log(`Request received on ${req.path}`);
  var appName = req.path.substr( 5 );
  var appVersion = Math.round(new Date().getTime() / 1000 / 60);
  var command = `bash app.sh update ${process.env.STAGE} ${appName} ${appVersion}`;
  console.log(`Running command: ${command}`)
  exec(command, function(error, stdout, stderr) {
    res.send(`<html><body><pre>${stderr}${stdout}</pre></body></html>`);
  });
});

app.listen(80);

