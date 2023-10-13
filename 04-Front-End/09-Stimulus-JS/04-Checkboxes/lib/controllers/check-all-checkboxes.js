// lib/controllers/check_all_checkboxes_controller.js
import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  static targets = ["checkbox"]

  checkAll(event) {
    console.log(this.checkboxTargets[0]);
    this.checkboxTargets.forEach(checkbox => checkbox.checked = event.currentTarget.checked);
  }
}
