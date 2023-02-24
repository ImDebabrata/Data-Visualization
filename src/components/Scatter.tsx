import ReactEcharts from "echarts-for-react";
import * as echarts from "echarts";
// import * as d from 'echarts-stat';
// import ecStat from "echarts-stat";
import { DataPoint } from "../App";

export interface ScatterPlotProps {
  data: DataPoint[];
}
// echarts.registerTransform(ecStat.transform.regression);

const Scatter = ({ data }: ScatterPlotProps) => {
  const option = {
    dataset: [
      {
        source: data.map((d) => [d["Color intensity"], d.Hue]),
      },
      // {
      //   transform: {
      //     type: "ecStat:regression",
      //     // type: "linear",
      //     // 'linear' by default.
      //     // config: { method: 'linear', formulaOn: 'end'}
      //   },
      // },
    ],

    title: {
      text: "Linear Regression",
      subtext: "By ecStat.regression",
      sublink: "https://github.com/ecomfe/echarts-stat",
      left: "center",
    },
    legend: {
      bottom: 5,
    },
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "cross",
      },
    },
    xAxis: {
      splitLine: {
        lineStyle: {
          type: "dashed",
        },
      },
    },
    yAxis: {
      splitLine: {
        lineStyle: {
          type: "dashed",
        },
      },
    },
    series: [
      {
        name: "scatter",
        type: "scatter",
      },
      {
        name: "line",
        type: "line",
        datasetIndex: 1,
        symbolSize: 0.1,
        symbol: "circle",
        label: { show: true, fontSize: 16 },
        labelLayout: { dx: -20 },
        encode: { label: 2, tooltip: 1 },
      },
    ],
  };

  return <ReactEcharts option={option} />;
};

export default Scatter;
