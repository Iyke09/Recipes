
import express from 'express';
import webpack from 'webpack';
import logger from 'morgan';
import path from 'path'
import bodyParser from 'body-parser';

const config = require('../webpack.config.dev');
const routes = require('./routes/index.js');

var app = express();
var compiler = webpack(config);


app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler));

// Log requests to the console.
app.use(logger('dev'));

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static('./public'))

app.use('/api', routes);

app.use('/static', express.static(path.resolve(__dirname, '..', 'client/dist')))

app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, '../client/index.html'));
});

module.exports = app;
