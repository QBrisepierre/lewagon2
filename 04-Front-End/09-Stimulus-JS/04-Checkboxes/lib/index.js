import { Application } from "@hotwired/stimulus";

// TODO: Import the Stimulus Controller here
import checkAllCheckboxes from "./controllers/check-all-checkboxes.js";
window.Stimulus = Application.start();
// TODO: Register your Stimulus Controller below
Stimulus.register("check-all-checkboxes", checkAllCheckboxes);
