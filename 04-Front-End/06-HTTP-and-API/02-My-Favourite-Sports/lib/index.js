// TODO: write your code here!
const sportsList = document.querySelectorAll(".clickable");

const displayClickedElement = (event) => {
  event.currentTarget.classList.toggle("active");
  // sport.classList.toggle("active");
};

const bindButtonToClick = (button) => {
  button.addEventListener("click", displayClickedElement);
};

sportsList.forEach(bindButtonToClick);
