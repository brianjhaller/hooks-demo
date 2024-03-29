// require in express
const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

// parse req body into json
// app.use(bodyParser.json());


// serve up static files when scripts are requested from index.html
app.use('/build', express.static(path.join(__dirname, './build')));

// app.get('/favicon', (req, res, next) => {
//   console.log('get favicon');
//   res.set('Content-Type', 'text/html').sendFile(path.resolve(__dirname, './public/index.html'));
// });

// load up index.html endpoint
app.get('/', (req, res) => {
  console.log('get standard / endpoint');
  res.set('Content-Type', 'text/html').sendFile(path.resolve(__dirname, './index.html'));
});

// standard bad endpoint, send 404
// app.use('*', (req, res) => {
//   console.log('undefined endpoint, 404 error sent to use');
//   res.status(404).send('This endpoint has not been built, try again punk');
// });

// global error handler
// eslint-disable-next-line no-unused-vars
// app.use((err, req, res, next) => {
//   const defaultError = {
//     status: 500,
//     message: 'Default Error from the Global Error Handler',
//   };

//   console.log('global error handler triggered');
//   const assignError = { ...defaultError, ...err };

//   // send the response
//   res.status(assignError.status).send(assignError.message);
// });

app.listen(PORT, () => {
  console.log(`Listening on PORT ${PORT}`);
});
