// eslint-disable-next-line max-len
// TODO: Create a function to get the coordinates from an address and display a map with a marker on it

const TOKEN = "pk.eyJ1IjoicWJyaXNlcGllcnJlIiwiYSI6ImNsbXN4djlwajBkeGUyeXF3cW82dnZreGYifQ.vHU3M_L_Su5rVuZXqYRZkQ";

const displayCoordinates = (longitude, latitude) => {
  const paragraphElement = document.getElementById("coordinates");
  paragraphElement.innerText = `${latitude}, ${longitude}`;
};

const injectMap = (lng, lat) => {
  const mapDiv = document.getElementById("map");
  mapDiv.innerHTML = "";

  mapboxgl.accessToken = TOKEN;
  const map = new mapboxgl.Map({
    container: "map",
    style: "mapbox://styles/mapbox/streets-v12",
    center: [lng, lat],
    zoom: 12,
  });
  new mapboxgl.Marker().setLngLat([lng, lat]).addTo(map);
};


const showMap = (userInput) => {
  // TODO: Construct the URL (with apiKey & userInput) and make the fetch request to the mapbox API
  const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${userInput}.json?access_token=${TOKEN}`;

  fetch(url)
    .then(response => response.json())
    .then((data) => {
      console.log(data);
      // TODO: Insert the info into the DOM
      // - Extract the coordinates from the parsed JSON response (lang, lat)
      const longitude = data.features[0].center[0];
      const latitidue = data.features[0].center[1];
      // - Display the coordinates in the element where the coordinates will be displayed
      displayCoordinates(longitude, latitidue);
      // - Create a map using the Mapbox API and the coordinates
      injectMap(longitude, latitidue);
      // - Add a marker to the map at the coordinates
    });
};
//
// TODO: Select the form element
const form = document.querySelector('form');
// TODO: Add event listener to the form that:
form.addEventListener("submit", (event) => {
  console.log(event);
  // - Prevents the default form submission behavior
  event.preventDefault();
  // - Get the user input
  const address = event.target[0].value;
  // - Calls the showMap function with the user input as an argument
  showMap(address);
});
