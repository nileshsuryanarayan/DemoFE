export interface Graph {
  chartType: String;
  chartLabel: String;
  chartTitle: String;
  displayChartTitle: Boolean;
  data: Data;
}

export interface Data {
  dataLabels: String[];
  dataSet: {
    chartData: number[];
    isFill: Boolean;
    lineTension: number;
    borderColor: String;
    borderWidth: number;
  };
}
