// eslint-disable-next-line max-len
// TODO: Import the JavaScript code which will explicitly load and register controller files with your application instance.
import { Application } from "@hotwired/stimulus";
// eslint-disable-next-line import/extensions
import EventListenerController from "./controllers/event_listener_controller.js";

window.Stimulus = Application.start();
window.Stimulus.register("event-listener", EventListenerController);
