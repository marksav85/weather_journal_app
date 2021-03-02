

// Personal API Key for OpenWeatherMap API
let baseURL = 'https://api.openweathermap.org/data/2.5/weather?zip=';
let apiKey = '&APPID=32dfb725187c3e7ecbc5c4ef2895ba90';

/* Global Variables */
let local = 'http://localhost:8000/';

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth() + 1 +'.'+ d.getDate()+'.'+ d.getFullYear();

// Event listener to add function to existing HTML DOM element
document.getElementById('generate').addEventListener('click', performAction);

// Function called by event listener
function performAction(e){
  const zipCode = document.getElementById('zip').value;
  const mood = document.getElementById('feelings').value;
  getWeather(baseURL, zipCode, apiKey)
  .then(function(data){
    // Add data
    postData('http://localhost:8000/add', {date: newDate, temperature: data.main.temp, user: mood});
    })
  .then(function(){
    updateUI()
  })
}

// Function to update UI
const updateUI = async () => {
  const request = await fetch('http://localhost:8000/all');
  try{
    const allData = await request.json();
    document.getElementById('date').innerHTML = allData.date;
    document.getElementById('temp').innerHTML = allData.temp;
    document.getElementById('content').innerHTML = allData.user;
  }catch(error){
    console.log("Error", error);
  }
}

// Function to GET Web API Data
const getWeather = async (baseURL, code, apiKey)=>{
  const res = await fetch(baseURL + code + apiKey);
  console.log(res);
  try {
      const data = await res.json();
      console.log(data);
      return data;
  }catch(error) {
    console.log("Error", error);
  }
}

// Function to POST data
const postData = async ( url = '', data = {})=>{
    const req = await fetch(url, {
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    credentials: 'same-origin', // include, *same-origin, omit
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(data), // body data type must match "Content-Type" header
  })
    try {
      const newData = await req.json();
      console.log(newData);
      return newData
    }catch(error) {
      console.log("Error", error);
    }
}
