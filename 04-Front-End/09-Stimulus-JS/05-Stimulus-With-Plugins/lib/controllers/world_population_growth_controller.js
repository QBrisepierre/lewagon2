// eslint-disable-next-line import/no-unresolved
import { Controller } from 'stimulus';
// eslint-disable-next-line import/no-unresolved
import { Chart } from "chart.js";

export default class extends Controller {
  worldPopulationGrowth = {
    2023: 8045311447,
    2022: 7975105156,
    2021: 7909295151,
    2020: 7794798739,
    2019: 7764951032,
    2018: 7683789828,
    2017: 7599822404,
    2016: 7513474238,
    2015: 7426597537,
    2014: 7339013419,
    2013: 7250593370,
    2012: 7161697921,
    2011: 7073125425,
    2010: 6985603105
    // your turn now to fill the rest of the object until 2010
  }

  connect() {
    const labels = Object.keys(this.worldPopulationGrowth);
    const data = Object.values(this.worldPopulationGrowth);

    // eslint-disable-next-line no-new
    new Chart(
      this.element,
      {
        type: 'line',
        data: {
          labels,
          datasets: [
            {
              label: 'Population Growth',
              data,
              backgroundColor: [
                'rgb(54, 162, 235)'
              ],
              hoverOffset: 4
            }
          ]
        }
      }
    );
  }
}
