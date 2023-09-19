// TODO: write your code here
const moveForward = (player) => {
  const player1 = document.querySelector(`#player${player}-race .active`);
  if (player1.nextElementSibling) {
    player1.nextElementSibling.classList.add("active");
    player1.classList.remove("active");
  } else {
    alert(`Player1 wins`);
    window.location.reload();
  }
};


const moveWagons = (event) => {
  if (event.key === "q") {
    moveForward(1);
  } else if (event.key === "p") {
    moveForward(2);
  }
};

document.addEventListener("keyup", moveWagons);
