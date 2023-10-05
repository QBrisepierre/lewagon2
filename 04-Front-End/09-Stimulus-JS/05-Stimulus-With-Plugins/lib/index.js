// eslint-disable-next-line import/no-unresolved
import { Application } from "stimulus";
// TODO: Import Chartjs external library
// eslint-disable-next-line import/no-unresolved
import { Chart } from "chart.js";
// eslint-disable-next-line import/no-unresolved
import * as Chartjs from "chart.js";

// TODO: Import the Stimulus Controller here
// eslint-disable-next-line import/extensions
import DoughnutChartsController from "./controllers/doughnut_charts_controller.js";
import WorldPopulationGrowthController from "./controllers/world_population_growth_controller.js";
import WorldReligionsController from "./controllers/world_religions_controller.js";

window.Stimulus = Application.start();

// TODO: Register all Chartjs controllers
const controllers = Object.values(Chartjs).filter(
  chart => chart.id !== undefined
);
Chart.register(...controllers);

// TODO: Register your Stimulus Controller below
// eslint-disable-next-line no-undef
Stimulus.register("doughnut-charts", DoughnutChartsController);
// eslint-disable-next-line no-undef
Stimulus.register("world-population-growth", WorldPopulationGrowthController);
// eslint-disable-next-line no-undef
Stimulus.register("world-religions", WorldReligionsController);
