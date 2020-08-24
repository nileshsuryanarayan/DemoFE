export interface Graph {
  chartType: string;
  chartLabel: string;
  chartTitle: string;
  displayChartTitle: boolean;
  data: Data;
}

export interface Data {
  dataLabels: string[];
  dataSet: {
    chartData: number[];
    isFill: boolean;
    lineTension: number;
    borderColor: string;
    borderWidth: number;
  };
}
