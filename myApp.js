// const express = require('express');
// const helmet = require('helmet');
// const app = express();

// app.use(helmet.hidePoweredBy());
// app.use(helmet.frameguard( 
// {
//   action : "DENY"
// }
// ))

// //Port
// // const PORT = process.env.PORT || 3030;


// // app.listen(PORT, () => {
// //   console,log(`server started at Port : ${PORT}`)
// // })















































// module.exports = app;
// const api = require('./server.js');
// app.use(express.static('public'));
// app.disable('strict-transport-security');
// app.use('/_api', api);
// app.get("/", function (request, response) {
//   response.sendFile(__dirname + '/views/index.html');
// });
// let port = process.env.PORT || 3000;
// app.listen(port, () => {
//   console.log(`Your app is listening on port ${port}`);
// });


const express = require('express');
const helmet = require('helmet');
const app = express();

// Use Helmet for security
app.use(helmet.hidePoweredBy());
app.use(helmet.frameguard({ action: "DENY" }));

// Import routes and other configurations
const api = require('./server.js');
app.use(express.static('public'));
app.use('/_api', api);

// Serve the main page
app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
});

// Set up the port and start the server
let port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Your app is listening on port ${port}`);
});

module.exports = app;
