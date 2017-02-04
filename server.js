
let express = require('express');
let morgan = require('morgan');
let request = require('request');
let app = express();

app.use(morgan('dev'));

require('./routes/routes')(app,express,request);

app.listen(3000,function () {
  console.log('Server is listening on Port',3000);
});