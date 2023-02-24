import "./App.css";
import Scatter from "./components/Scatter";
import data from "./dataSet.json";
import { ScatterPlotProps } from "./components/Scatter";
import Bar from "./components/Bar";

export interface DataPoint {
  Alcohol: number;
  "Malic Acid": number;
  Ash: number | string;
  "Alcalinity of ash": number;
  Magnesium: number;
  "Total phenols": number;
  Flavanoids: number | string;
  "Nonflavanoid phenols": number | string;
  Proanthocyanins: string;
  "Color intensity": number | string;
  Hue: number;
  "OD280/OD315 of diluted wines": number | string;
  Unknown: number;
}

function App() {
  console.log(data);
  return (
    <div className="App">
      <div className="scatter">
        <Scatter data={data} />
      </div>
      <div className="bar">
        <Bar data={data} />
      </div>
    </div>
  );
}

export default App;
