import express from 'express';
import logger from 'morgan';
import bodyParser from 'body-parser';
const routes = require('./routes/index.js');
import path from 'path'
var webpack = require('webpack');
var config = require('../webpack.config.dev');

var app = express();
var compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler));

// Log requests to the console.
app.use(logger('dev'));

// Parse incoming requests data (https://github.com/expressjs/body-parser)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/api', routes);

if(process.env.NODE_ENV === 'production'){
  app.use('/static', express.static(path.resolve(__dirname, '..', 'client/dist')))
}

app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, '../client/index.html'));
});

// app.listen(7770, 'localhost', function(err) {
//   if (err) {
//     console.log(err);
//     return;
//   }
//   console.log('Listening at http://localhost:7770');
// });

module.exports = app;
