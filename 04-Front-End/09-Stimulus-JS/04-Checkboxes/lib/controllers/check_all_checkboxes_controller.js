// lib/controllers/check_all_checkboxes_controller.js
import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  static targets = ["appartment", "house", "igloo", "cabin"]

  checkAll(event) {
    console.log(event);
    this.appartmentTarget.toggleAttribute("checked");
    this.houseTarget.toggleAttribute("checked");
    this.iglooTarget.toggleAttribute("checked");
    this.cabinTarget.toggleAttribute("checked");
  }
}
