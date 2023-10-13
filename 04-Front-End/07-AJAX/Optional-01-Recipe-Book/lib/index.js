// Todo: Use the Meal DB API to search for recipes by ingredient

// Todo: select the HTML elements you need here
// (such as search input, recipe-template, recipes-container, favourites-container)

// Todo: Initialize the favourites array

// Todo: create a function to fetch the recipes from the API when the search input changes
const mealApiUrl = "https://www.themealdb.com/api/json/v1/1/filter.php?i=";

const button = document.getElementById("search-button");
const name = document.getElementById("search-input");
const lists = document.getElementById("recipes-container");
const favoriteList = document.getElementById("favourites-container");

const insertRecipes = (recipe, container) => {
  const card = `
    <div class="col-5">
      <div class="card my-2 position-relative">
        <i class="fa-solid fa-bookmark text-danger ms-2 position-absolute top-0 end-0 p-2 fs-4"></i>
        <img src="${recipe.strMealThumb}" class="card-img-top" alt="">
        <div class="card-body d-flex">
          <h6 class="card-title">${recipe.strMeal}</h6>
        </div>
      </div>
    </div>
    `;
  container.insertAdjacentHTML("beforeend", card);
};

const addRecipeToFavourites = (recipe) => {
  insertRecipes(recipe, favoriteList);
  localStorage.setItem("cards", favoriteList.innerHTML);
};

const displayRecipe = (ingredient) => {
  lists.innerHTML = "";
  const url = `${mealApiUrl}${ingredient}`;
  fetch(url)
    .then(response => response.json())
    .then((data) => {
      data.meals.forEach((meal) => {
        insertRecipes(meal, lists);
      });

      const favorites = document.querySelectorAll(".fa-bookmark");
      favorites.forEach((favorite) => {
        favorite.addEventListener("click", (event) => {
          const title = event.target.offsetParent.innerText;
          const image = event.target.nextElementSibling.currentSrc;
          const newRecipeToAdd = { strMeal: title, strMealThumb: image };
          addRecipeToFavourites(newRecipeToAdd);
        });
      });
    });
};

button.addEventListener("click", (event) => {
  event.preventDefault();
  displayRecipe(name.value);
});

const cards = localStorage.getItem("cards");
if (cards !== null) {
  favoriteList.insertAdjacentHTML("beforeend", cards);
}

//localStorage.clear();
