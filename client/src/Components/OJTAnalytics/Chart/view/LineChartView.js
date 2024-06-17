import React from "react";
import { Line } from "react-chartjs-2";

const LineChartView = ({ chartData }) => {
  return (
    <div>
      <h2>Trend Summary</h2>
      <div style={{ width: "50%", margin: "auto" }}>
        <Line
          data={chartData}
          options={{
            maintainAspectRatio: false,
          }}
        />
      </div>
    </div>
  );
};

export default LineChartView;
