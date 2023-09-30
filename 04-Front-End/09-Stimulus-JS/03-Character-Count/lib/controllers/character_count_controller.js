// lib/controllers/character_count_controller.js
import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  static targets = ["counter", "text"];

  count(event) {
    if (this.textTarget.value.length < 1) {
      this.counterTarget.classList.add("d-none");
    } else if (this.textTarget.value.length === 140) {
      this.counterTarget.classList.add("text-danger");
      this.counterTarget.innerText = `Nombre de caractères dépassé de ${this.textTarget.value.length} caractères`;
    } else {
      this.counterTarget.classList.remove("text-danger");
      this.counterTarget.classList.remove("d-none");
      this.counterTarget.innerText = `${this.textTarget.value.length} characters`;
    }
    console.log(this.textTarget.value.length);
  }
}
