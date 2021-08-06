import React, { Fragment } from "react";
import * as Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
export const ChartFrame = (props) => {
  const { chartInfo } = props;
  const _type = chartInfo.type.toLowerCase();
  const options = {
    title: {
      text: chartInfo.type,
    },
    series: [
      {
        type: _type,
        data: [1, 2, 3],
      },
    ],
  };
  const chartContainer = {
    width: "150px",
    height: "150px",
  };
  return (
    <div className={chartContainer}>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
};
