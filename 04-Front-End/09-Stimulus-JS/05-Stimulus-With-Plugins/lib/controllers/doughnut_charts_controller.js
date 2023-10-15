// eslint-disable-next-line import/no-unresolved
import { Controller } from 'stimulus';
// eslint-disable-next-line import/no-unresolved
import { Chart } from "chart.js";

export default class extends Controller {
  worldPopulation = {
    men: 504,
    women: 496
  };

  connect() {
    const labels = Object.keys(this.worldPopulation);
    const data = Object.values(this.worldPopulation);

    // eslint-disable-next-line no-new
    new Chart(
      this.element,
      {
        type: 'doughnut',
        data: {
          labels,
          datasets: [
            {
              label: 'Gender Ratio',
              data,
              backgroundColor: [
                'rgb(54, 162, 235)',
                'rgb(255, 99, 132)'
              ],
              hoverOffset: 4
            }
          ]
        }
      }
    );
  }
}
