import { Injectable } from '@angular/core';
import { Graph } from 'src/app/app-models/Graph.model';

@Injectable()
export class GraphService {
  graphData: Graph;
  chartdata = [];
  dataLabels = [];
  lineTension = 0;
  borderColor = 'blue';
  borderWidth = 1;
  isFill = true;

  constructor() {}

  getChartData(): Graph {
    // return the complete chart related details
    this.graphData = {
        chartType: 'line',
        chartLabel: 'Number of Items Sold in Months',
        chartTitle: 'Line Chart',
        displayChartTitle: true,
        data: {
            dataLabels: [
                "","","","","","","","","Nine","",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "Nine",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "Nine",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "Nine",
            "",
            "",
            ""],
            dataSet: {
                chartData: [9,
                    7,
                    3,
                    5,
                    2,
                    10,
                    15,
                    16,
                    19,
                    3,
                    1,
                    9,
                    9,
                    7,
                    3,
                    5,
                    2,
                    10,
                    15,
                    16,
                    19,
                    3,
                    1,
                    9,
                    9,
                    7,
                    3,
                    5,
                    2,
                    10,
                    15,
                    16,
                    19,
                    3,
                    1,
                    9,
                    9,
                    7,
                    3,
                    5,
                    2,
                    10,
                    15,
                    16,
                    19,
                    3,
                    1,
                    9],
                isFill: true,
                lineTension: 0,
                borderColor: 'red',
                borderWidth: 1
            }
        }
    };
    return this.graphData;
  }

  
}
