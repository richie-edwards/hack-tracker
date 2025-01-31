const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const challengeRouter = require('./routes/challengeRouter.js');

const app = express();

const PORT = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); // ????

/* ROUTERS */
app.use('/challenge', challengeRouter);

// backend server to serve up these file in production mode
if (process.env.NODE_ENV === 'production') {
  console.log(`NODE_ENV ENVIRONMENT VARIABLE: ${process.env.NODE_ENV}`);
  // statically serve everything in the build folder on the route '/build'
  app.use('/build', express.static(path.join(__dirname, '../build')));
  // serve index.html on the route '/'
  app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../index.html'));
  });
}

// 404 for requests that don't apply to a route
app.use('*', (req, res) => {
  res.sendStatus(404);
});

// global error handling
app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 400,
    message: { err: 'An error occurred' },
  };
  const errorObj = { ...defaultErr, ...err };
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

app.listen(PORT, () => {
  console.log(`* * * Backend server listening on port: ${PORT} * * *`);
});
