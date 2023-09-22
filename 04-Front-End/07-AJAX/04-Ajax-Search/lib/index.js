const omdbapiUrl = "http://www.omdbapi.com/";
const apiKey = "adf1f2d7";

const form = document.getElementById("search-movies");
const title = document.getElementById("movie-name");
const moviesCard = document.getElementById("movie-cards");
// Here is 2 other API key if the one above doesn't work anymore:
// - 48727053
// - 8691812a

// Your turn to code!
const displayMovies = (movies) => {
  movies.forEach((movie) => {
    const card = `<div class="col-lg-3 col-md-4 col-sm-6 col-12">
                    <div class="card mb-2">
                      <img src="${movie.Poster}" class="card-img-top" alt="${movie.Title}">
                        <div class="card-body">
                          <span class="badge bg-primary mb-2">${movie.Year}</span>
                          <h5 class="card-title">${movie.Title}</h5>
                        </div>
                    </div>
                  </div>`;
    moviesCard.insertAdjacentHTML("afterbegin", card);
  });
};

const searchingMovies = (name) => {
  const url = `${omdbapiUrl}?s=${name}&apikey=${apiKey}`;
  fetch(url)
    .then(response => response.json())
    .then((data) => {
      console.log(data);
      if (data.Response !== "False") {
        displayMovies(data.Search);
      }
    });
};


form.addEventListener("submit", (event) => {
  event.preventDefault();
  searchingMovies(title.value);
});

title.addEventListener("keyup", (event) => {
  event.preventDefault();
  console.log(event);
  searchingMovies(title.value);
});
