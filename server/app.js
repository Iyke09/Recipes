import express from 'express';
import logger from 'morgan';
import bodyParser from 'body-parser';
const routes = require('./routes/index.js');
import path from 'path'

// Set up the express app
const app = express();

// Log requests to the console.
app.use(logger('dev'));

// Parse incoming requests data (https://github.com/expressjs/body-parser)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Setup a default catch-all route that sends back a welcome message in JSON format
// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, 'public/test.html'));
// });


app.use('/api', routes);

app.use('/static', express.static(path.resolve(__dirname, '..', 'client/dist')));

// RENDER REACT FRONTEND
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '..', 'client/index.html'));
});

module.exports = app;
