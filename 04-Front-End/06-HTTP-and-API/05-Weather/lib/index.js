const TOKEN = "88a6a2c076682a26b76318807ebc4389";
const description = document.getElementById("description");
const temperature = document.getElementById("temperature");
const city = document.getElementById("city");
const icon = document.getElementById("icon");
// TODO: Call the Weather API when the form is submitted

const buildUrl = (location) => {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${TOKEN}&units=metric`;
  return url;
};

const insertData = (data) => {
  const iconId = data.weather[0].icon;
  icon.src = `https://openweathermap.org/img/w/${iconId}.png`;
  description.innerText = data.weather[0].description;
  temperature.innerText = `${data.main.temp}°C`;
  city.innerText = data.name;
};

// TODO: Create a function to get the weather info
const fetchWeather = (location) => {
  // TODO: Replace the following line with the correct url
  const url = buildUrl(location);
  // TODO: prevent default behavior of the form

  fetch(url)
    .then(response => response.json())
    .then((data) => {
      // TODO: Insert the weather info in the DOM (description, date, temperature...)
      insertData(data);
    });
};

// TODO: Add an event listener to the form
const form = document.querySelector("form");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const location = document.getElementById("input").value;
  console.log(location);
  fetchWeather(location);
});
// TODO: On submit, in the callback, call the getWeatherInfo function
