const agifyApiUrl = "https://api.agify.io/";

const displayAge = (event) => {
  event.preventDefault();
  const firstName = document.getElementById("first-name").value;
  const age = document.getElementById("your-age");
  // TODO: Display your age with an AJAX call instead of the console.log()
  console.log(firstName);
  const url = `${agifyApiUrl}?name=${firstName}`;
  fetch(url)
    .then(response => response.json())
    .then((data) => {
      age.innerText = `You're ${data.age} years old`;
    });
};

const form = document.getElementById("fetch-age");
form.addEventListener("submit", displayAge);
