import { Application } from "@hotwired/stimulus";

// TODO: Import the Stimulus Controller here
import checkAllCheckboxesController from "./controllers/check_all_checkboxes_controller.js";

window.Stimulus = Application.start();
// TODO: Register your Stimulus Controller below
Stimulus.register("check-all-checkboxes", checkAllCheckboxesController);
