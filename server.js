// Setup empty JS object to act as endpoint for all routes
projectData = {date: 'No previous entry', temp: 'No previous entry', user: 'No previous entry'};

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
  console.log('server running successfully!')
};

// Callback to debug

// Initialize all route with a callback function
app.get('/all', sendData);

// Callback function to complete GET '/all'
function sendData (req, res) {
  res.send(projectData);
  console.log('data retrieved')
};

// Post Route
app.post('/add', addData);

function addData(req, res) {
  projectData.date = req.body.date;
  projectData.temp = req.body.temperature;
  projectData.user = req.body.user;
  console.log(projectData);
}
