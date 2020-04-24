import { Component, Input, ElementRef, ViewChild } from "@angular/core";
import { Sensex } from "src/app/app-models/SensexModel";
// import * as chart from 'chart.js';
import { Chart } from "chart.js";
import { Graph } from 'src/app/app-models/Graph.model';
import { GraphService } from './graph.service';

@Component({
  selector: "graph",
  templateUrl: "./graph.component.html",
  styleUrls: ["./graph.component.css"]
})
export class GraphComponent {
  // @Input() lineData: Sensex[];

  @ViewChild("customChart", null) chart: ElementRef;

  @Input() graphMeta: Graph;

  LineChart = [];
  myChartData: Graph;
  isScaleBeginAtZero = true;

  constructor(private grpServ: GraphService) {}

  ngOnInit() {

    
  }

  ngAfterViewInit() {
    // console.log(this.graphMeta);
    
    this.myChartData = this.graphMeta; // this.grpServ.getChartData();
    // Line chart:
    this.LineChart = new Chart(this.chart.nativeElement.id, {
      type: this.myChartData.chartType,
      data: {
        labels: this.myChartData.data.dataLabels,
        datasets: [
          {
            label: this.myChartData.chartLabel,
            data: this.myChartData.data.dataSet.chartData,
            fill: this.myChartData.data.dataSet.isFill,
            lineTension: this.myChartData.data.dataSet.lineTension,
            borderColor: this.myChartData.data.dataSet.borderColor,
            borderWidth: this.myChartData.data.dataSet.borderWidth
          }
        ]
      },
      options: {
        title: {
          text: this.myChartData.chartTitle,
          display: this.myChartData.displayChartTitle
        },
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true
              }
            }
          ],
          xAxes: [
            {
              ticks: {
                beginAtZero: true
              }
            }
          ]
        }
      }
    });
  }
}
