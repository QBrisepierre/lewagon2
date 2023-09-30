import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  static targets = ["input", "button"]

  static values = {
    feedbackText: String
  }

  copy() {
    navigator.clipboard.writeText(this.inputTarget.value);
    this.buttonTarget.setAttribute("disable", "");
    this.buttonTarget.innerText = this.feedbackTextValue;
  }
}
