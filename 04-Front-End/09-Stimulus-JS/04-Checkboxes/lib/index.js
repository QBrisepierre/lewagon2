import { Application } from "@hotwired/stimulus";

// TODO: Import the Stimulus Controller here
<<<<<<< HEAD
import checkAllCheckboxes from "./controllers/check-all-checkboxes.js";
window.Stimulus = Application.start();
// TODO: Register your Stimulus Controller below
Stimulus.register("check-all-checkboxes", checkAllCheckboxes);
=======
import checkAllCheckboxesController from "./controllers/check_all_checkboxes_controller.js";

window.Stimulus = Application.start();
// TODO: Register your Stimulus Controller below
Stimulus.register("check-all-checkboxes", checkAllCheckboxesController);
>>>>>>> e412f6835bbe1ff31e2f77261e4168a71ba00907
