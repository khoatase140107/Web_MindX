import React, { useEffect, useState } from "react";
import Chart from "react-apexcharts";
import usePieChartData from "../hooks/useChartData";

function PieChart(props) {
  const { mySeries, myLable } = usePieChartData(props);
  const options = {
    series: mySeries,
    labels: myLable,
  };
  const series = mySeries;
  return (
    <div
      style={{
        marginTop: "160px",
      }}
    >
      {/* <h1 style={{
        marginBottom:20
     }}>{type}</h1> */}
      <Chart
        options={options}
        series={series}
        type="donut"
        width="100%"
        height={300}
      />
    </div>
  );
}

export default PieChart;
