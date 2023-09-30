import { Controller } from "@hotwired/stimulus";

const audio = new Audio("../sound.mp3");

export default class extends Controller {
  disable(event) {
    this.element.setAttribute("disabled", "");
    this.element.innerText = "Bingo!";
    audio.play();
  }
}
