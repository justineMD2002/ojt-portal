import React from "react";
import { Line, Bar } from "react-chartjs-2";

const OJTAnalytics = () => {
  const lineData = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        label: "Dataset 1",
        data: [65, 59, 80, 81, 56, 55, 40],
        fill: false,
        borderColor: "rgba(75,192,192,1)",
        backgroundColor: "rgba(75,192,192,0.4)",
        yAxisID: "y-axis-1",
      },
      {
        label: "Dataset 2",
        data: [28, 48, 40, 19, 86, 27, 90],
        fill: false,
        borderColor: "rgba(255,99,132,1)",
        backgroundColor: "rgba(255,99,132,0.4)",
        yAxisID: "y-axis-2",
      },
    ],
  };

  const barData = {
    labels: [
      "Strategic Leadership Skill",
      "Enterprise Political Commitment",
      "Monitoring and Benchmarking",
      "Work Distribution",
      "Management of Workers",
      "Creativity",
      "Marketing ",
    ],
    datasets: [
      {
        label: "Dataset 1",
        data: [44, 20, 18, 18, 17, 14, 14],
        backgroundColor: "rgba(75,192,192,0.2)",
        borderColor: "rgba(75,192,192,1)",
        borderWidth: 1,
      },
    ],
  };

  const skillFilter = ["skill1", "skill2", "skill3"];
  const domainFilter = ["domain1", "domain2", "domain3"];
  const trendDirectionFilter = ["trend1", "trend2", "trend3"];

  const dataTable = [
    {
      skill: "SkillA",
      domain: "Data Analytics",
      trendDirection: "Upward",
      prediction: "Continous Improvement",
    },
    {
      skill: "SkillB",
      domain: "Machine Learning",
      trendDirection: "Upward",
      prediction: "Continous Improvement",
    },
    {
      skill: "SkillC",
      domain: "Data Analytics",
      trendDirection: "Upward",
      prediction: "Continous Improvement",
    },
  ];

  return (
    <div className="OJTAnalytics">
      <h3>Skill Graph Trend</h3>
      <div className="chart-container">
        <div className="chart">
          <Line data={lineData} />
        </div>
        <div className="chart">
          <Bar data={barData} />
        </div>
      </div>
      <div className="filter-options container">
        <h4>Filter Options</h4>
        <div className="filters">
          <div className="select-container">
            <select name="" id="">
              <option value="" disabled selected>
                Select Skills
              </option>
              {skillFilter.map((skill, i) => (
                <option value="">{skill}</option>
              ))}
            </select>
            <select name="" id="">
              <option value="" disabled selected>
                Select Domain
              </option>
              {domainFilter.map((skill, i) => (
                <option value="">{skill}</option>
              ))}
            </select>
            <div className="date-time-container">
              {/* this is for selecting the time range */}
              <div>
                <label htmlFor="">From</label>
                <input type="datetime-local" id="datetime" name="datetime" />
              </div>{" "}
              <div>
                <label htmlFor="">To</label>
                <input type="datetime-local" id="datetime" name="datetime" />
              </div>
            </div>
            <select name="" id="">
              <option value="" disabled selected>
                Trend Direction
              </option>
              {trendDirectionFilter.map((skill, i) => (
                <option value="">{skill}</option>
              ))}
            </select>
          </div>

          <button>Apply Filters</button>
        </div>
      </div>

      <div className="data-table container">
        <h4>Data Table</h4>

        <table>
          <thead>
            <tr>
              <th>Skill Name</th>
              <th>Domain</th>
              <th>Trend Direction</th>
              <th>Prediction</th>
            </tr>
          </thead>
          <tbody>
            {dataTable.map((data, i) => (
              <tr>
                <td>{data.skill}</td>
                <td>{data.domain}</td>
                <td>{data.trendDirection}</td>
                <td>{data.prediction}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OJTAnalytics;
