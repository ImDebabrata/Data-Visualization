import { ScatterPlotProps } from "../App";
import ReactECharts from "echarts-for-react";

const Bar = ({ data }: ScatterPlotProps) => {
  const option = {
    title: {
      text: "Bar chart",
      left: "left",
    },
    tooltip: {
      trigger: "axis",
    },
    legend: {
      data: ["Malic Acid"],
    },
    toolbox: {
      show: true,
      feature: {
        dataView: { show: true, readOnly: false },
        magicType: { show: true, type: ["line", "bar"] },
        restore: { show: true },
        saveAsImage: { show: true },
      },
    },
    calculable: true,
    xAxis: [
      {
        type: "category",
        // prettier-ignore
        name:"Alcohol",
        data: data.map((d) => d.Alcohol),
      },
    ],
    yAxis: [
      {
        name: "Malic Acid",
        type: "value",
      },
    ],
    series: [
      {
        name: "Malic Acid",
        type: "bar",
        data: data.map((d) => d["Malic Acid"]),
        markPoint: {
          data: [
            { type: "max", name: "Max" },
            { type: "min", name: "Min" },
          ],
        },
        markLine: {
          data: [{ type: "average", name: "Avg" }],
        },
      },
    ],
  };

  return <ReactECharts option={option} />;
};

export default Bar;
