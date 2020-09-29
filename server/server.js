// const express = require('express');
// const app = express();
// const path = require('path');

// const PORT = 3000;

// const challengeController = require('./controllers/challengeController');

// /**
//  * handle parsing request body
//  */

// app.get('/challenges',
//   challengeController.getChallenges,
//   (req, res) => res.status(200).json(res.locals.challenges));

// // statically serve everything in the build folder on the route '/build'
// app.use('/build', express.static(path.join(__dirname, '../build')));
// // serve index.html on the route '/'
// app.get('/', (req, res) => {
//   res.sendFile(path.join(__dirname, '../index.html'));
// });

// // 404 for requests that don't apply to a route
// app.use('*', (req, res) => {
//   res.sendStatus(404);
// });

// // global error handling

// app.listen(PORT, () => {
//   console.log(`Server listening on port: ${PORT}`);
// });
