

// Personal API Key for OpenWeatherMap API
let baseURL = 'api.openweathermap.org/data/2.5/weather?zip=';
let apiKey = '261d1154112d39d61aa67532a79fcb31';

/* Global Variables */

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();

// Event listener to add function to existing HTML DOM element
document.getElementById('generate').addEventListener('click', performAction);

// Function called by event listener
function performAction(e){
  const zipCode = document.getElementById('zip').value;
  const mood = document.getElementById('feelings').value;
  getWeather('/projectData',)
  // New Syntax!
  .then(function(data){
    // Add data
    console.log(data);
    postData('/add', {temperature: data.main.temp, date: newDate, user: mood});
  })
  .then(
    updateUI()
  )
}

const updateUI = async () => {
  const request = await fetch('/all');
  try{
    const allData = await request.json();
    document.getElementById('date').innerHTML = allData[0].date;
    document.getElementById('temp').innerHTML = allData[0].temperature;
    document.getElementById('content').innerHTML = allData[0].user;

  }catch(error){
    console.log("error", error);
  }
}


// Function to GET Web API Data
const getWeather = async (baseURL, zipCode, key)=>{
const res = await fetch(baseURL + zipCode + '&appid=' + key)
  try {
const data = await res.json();
    console.log(data)
    return data;
  }  catch(error) {
    console.log("error", error);
    // appropriately handle the error
  }
}

// Function to POST data
const postData = async ( url = '', data = {})=>{
  console.log(data)
    const response = await fetch(url, {
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    credentials: 'same-origin', // include, *same-origin, omit
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(data), // body data type must match "Content-Type" header
  });

    try {
      const newData = await response.json();
      // console.log(newData);
      return newData
    }catch(error) {
    console.log("error", error);
    // appropriately handle the error
    }
}



// Function to GET Project Data
const retrieveData = async (url='') =>{
  const request = await fetch(url);
  try {
  // Transform into JSON
  const allData = await request.json()
  }
  catch(error) {
    console.log("error", error);
    // appropriately handle the error
  }
};
