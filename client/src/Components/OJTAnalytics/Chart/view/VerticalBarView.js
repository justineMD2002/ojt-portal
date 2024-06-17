import React from "react";
import { Bar } from "react-chartjs-2";

const VerticalBarView = ({ chartData }) => {
  return (
    <div>
      <h2>Skill Trend Data</h2>
      <div style={{ width: "80%", margin: "auto" }}>
        <Bar
          data={chartData}
          options={{
            maintainAspectRatio: false,
            scales: {
              y: {
                beginAtZero: true,
              },
            },
          }}
        />
      </div>
    </div>
  );
};

export default VerticalBarView;
