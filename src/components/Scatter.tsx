import ReactEcharts from "echarts-for-react";
import { ScatterPlotProps } from "../App";

const Scatter = ({ data }: ScatterPlotProps) => {
  const option = {
    dataset: [
      {
        source: data.map((d) => [d["Color intensity"], d.Hue]),
      },
    ],

    title: {
      text: "Linear Regression",
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
      name: "Color Intensity",
      splitLine: {
        lineStyle: {
          type: "dashed",
        },
      },
    },
    yAxis: {
      name: "Hue",
      splitLine: {
        lineStyle: {
          type: "dashed",
        },
      },
    },
    series: [
      {
        name: "Hue",
        type: "scatter",
      },
    ],
  };

  return <ReactEcharts option={option} />;
};

export default Scatter;
