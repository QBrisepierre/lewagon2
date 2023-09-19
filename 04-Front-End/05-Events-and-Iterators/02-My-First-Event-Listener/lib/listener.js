// TODO: React to a click on the button!
const button = document.getElementById('clickme');
const audio = new Audio('sound.mp3');
button.addEventListener("click", (event) => {
  audio.play();
});
