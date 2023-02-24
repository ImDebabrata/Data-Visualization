import ReactEcharts from "echarts-for-react";
import { ScatterPlotProps } from "../App";

const Scatter = ({ data }: ScatterPlotProps) => {
  const option = {
    title: {
      text: "Scatter",
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
      data: data.map((e) => e["Color intensity"]),
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
        data: data.map((e) => e.Hue),
        name: "Hue",
        type: "scatter",
      },
    ],
  };

  return <ReactEcharts option={option} />;
};

export default Scatter;
