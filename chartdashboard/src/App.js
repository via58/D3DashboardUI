import "./App.css";
import { ChartFrame } from "./components/chart/chart-frame";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [chartdata, setChartData] = useState();
  useEffect(() => {
    axios
      .get(
        "https://s3-ap-southeast-1.amazonaws.com/he-public-data/chart2986176.json"
      )
      .then((response) => {
        console.log(response);
        setChartData(response.data);
      });
  }, []);

  // const fetchUser = async () => {
  //   const user = await axios.get(
  //     "https://s3-ap-southeast-1.amazonaws.com/he-public-data/chart2986176.json"
  //   );

  //   return user.data;
  // };
  return (
    <div className="App">
      <div className="title-board">
        <h1>Charts Dashboard</h1>
      </div>
      <header className="App-header">
        {chartdata === undefined
          ? null
          : chartdata.map((chart, i) => (
              <div className="chart-frame">
                <ChartFrame chartInfo={chart} key={i}>
                  Loading ...
                </ChartFrame>
              </div>
            ))}
      </header>
    </div>
  );
}

export default App;
