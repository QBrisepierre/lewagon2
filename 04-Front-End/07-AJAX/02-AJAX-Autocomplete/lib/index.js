// TODO: Autocomplete the input with AJAX calls.
const apiUrl = "https://wagon-dictionary.herokuapp.com/autocomplete/";

const results = document.getElementById("results");

const autoComplete = () => {
  results.innerHTML = "";
  const search = document.getElementById("search");
  const url = `${apiUrl}${search.value}`;
  fetch(url)
    .then(response => response.json())
    .then((data) => {
      if (data.found !== false) {
        const words = data.words;
        words.forEach((word) => {
          results.insertAdjacentHTML("beforeend", `<a class='list-group-item list-group-item-action'>${word}</a>`);
        });
        const lists = document.querySelectorAll('.list-group-item-action');
        if (lists.length > 1) {
          lists.forEach((word) => {
            word.addEventListener("click", (event) => {
              search.value = event.target.innerHTML;
              autoComplete();
            });
          });
        }
      }
    });
};

const search = document.getElementById("search");

search.addEventListener("keyup", (event) => {
  autoComplete();
});
