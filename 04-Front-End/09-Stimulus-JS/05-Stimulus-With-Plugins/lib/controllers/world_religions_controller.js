// eslint-disable-next-line import/no-unresolved
import { Controller } from 'stimulus';
// eslint-disable-next-line import/no-unresolved
import { Chart } from "chart.js";

export default class extends Controller {
  worldReligions = {
    christianity: 2382000000,
    islam: 1907000000,
    agnostic: 1193000000,
    hinduism: 1161000000,
    buddhism: 506000000,
    Chinese: 394000000,
  }

  connect() {
    const labels = Object.keys(this.worldReligions);
    const data = Object.values(this.worldReligions);
    // eslint-disable-next-line no-new
    new Chart(
      this.element,
      {
        type: 'polarArea',
        data: {
          labels,
          datasets: [
            {
              label: 'Religions population',
              data,
              backgroundColor: [
                'rgb(255, 99, 132)',
                'rgb(75, 192, 192)',
                'rgb(255, 205, 86)',
                'rgb(201, 203, 207)',
                'rgb(54, 162, 235)',
                'rgb(28, 72, 195)'
              ],
              hoverOffset: 4
            }
          ]
        }
      }
    );
  }
}
