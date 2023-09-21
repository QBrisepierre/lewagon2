// eslint-disable-next-line max-len
// Todo: Use the Fork Api to get a filtered list of restaurants, depending on the category selected (and as a bonus, the location)

const searchForm = document.getElementById("searchForm");

// Todo: select the HTML elements you need

const insertResults = (restaurant) => {
  const restaurantHtml = `<li class="list-group-item">${restaurant.name}</li>`;
  const list = document.getElementById("restaurant-list");
  list.insertAdjacentHTML("beforeend", restaurantHtml);
};

const buildSearchUrl = (event) => {
  const value = Array.from(document.querySelectorAll('input[type=radio]:checked'))
    .map(item => item.value)
    .join(',');
  const location = event.target[9].value;
  return `https://the-fork-api.students.lewagon.co/api/v1/restaurants?category=${value}&location=${location}`;
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
      console.log(data);
      data.forEach((restaurant) => {
        insertResults(restaurant);
      });
    });
});
