// Setup empty JS object to act as endpoint for all routes
projectData = {};

// Require Express to run server and routes
const express = require('express');

// Start up an instance of app
const app = express();

/* Middleware*/
const bodyParser = require('body-parser');
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());

// Initialize the main project folder
app.use(express.static('website'));

// // Spin up the server
const port = 8000
const server = app.listen(port, listening);
function listening() {
  console.log('running on localhost: ' + port);
  console.log('Success!')
};

// Callback to debug

// Initialize all route with a callback function
app.get('/all', sendData);

// Callback function to complete GET '/all'
function sendData (req, res) {
  res.send(projectData);
  console.log('winner')
};

// Post Route
app.post('/add', postData);

function postData(req, res) {
    res.send('POST received');
    console.log(postData);
}
