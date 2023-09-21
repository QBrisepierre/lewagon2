// eslint-disable-next-line max-len
// Todo: Use the Fork Api to get a filtered list of restaurants, depending on the category selected (and as a bonus, the location)
const apiUrl = "https://the-fork-api.students.lewagon.co/api/v1/restaurants";
const searchForm = document.getElementById("searchForm");
const categoriesRadioButtons = document.querySelectorAll(".form-check-input");
const locationInput = document.getElementById("location");
const resultsList = document.getElementById("restaurant-list");

// Todo: select the HTML elements you need

const insertResults = (results) => {
  resultsList.innerHTML = "";

  if (results.length > 0) {
    results.forEach((restaurant) => {
      resultsList.insertAdjacentHTML("beforeend", `<li class="list-group-item">${restaurant.name} in ${restaurant.address}</li>`);
    });
  } else {
    resultsList.innerHTML = "<p class=\"text-muted text-center\">No restaurants found! Please select another category or location.</p>";
  }
};

const buildSearchUrl = () => {
  const checkedCategory = Array.from(categoriesRadioButtons).find(element => element.checked);
  const categoryValue = checkedCategory.value;
  const locationValue = locationInput.value;

  return `${apiUrl}?category=${categoryValue}&location=${locationValue}`;
};


searchForm.addEventListener("submit", (event) => {
  // Todo: Find the category selected and build the URL you will send your request to
  event.preventDefault();

  const url = buildSearchUrl(event);

  // Todo: Replace "the-endpoint-url" with the URL you built
  fetch(url)
    .then(response => response.json())
    .then((data) => {
      // Todo: Insert results into the list
      insertResults(data);
    });
});
