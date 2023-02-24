import "./App.css";
import Scatter from "./components/Scatter";
import data from "./dataSet.json";
import Bar from "./components/Bar";

interface DataPoint {
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

export interface ScatterPlotProps {
  data: DataPoint[];
}

function App() {
  return (
    <div className="App">
      <div className="graph">
        <Scatter data={data} />
      </div>
      <div className="graph">
        <Bar data={data} />
      </div>
    </div>
  );
}

export default App;
