import React, { useState } from "react";
import { Chart, registerables } from "chart.js";
import axios from "axios";
import { useAuth } from "../UserManagement/AuthContext";
import VerticalBarChart from "./VerticalBarChart";
import LineChart from "./LineChart.js";

Chart.register(...registerables);

const OJTAnalytics = () => {
  const skillFilter = ["NoSQL", "Spring Frameworks", "Python", "Django", 
                        "C#", "PostgreSQL", "MySQL", "C++", "Oracle Java", 
                        "Javascript", "Spring Boot", "API"];

  const [selectedSkill, setSelectedSkill] = useState("");
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");
  const [apiData, setApiData] = useState(null); 
  const { authUser } = useAuth();

  const handleSkillChange = (e) => {
    setSelectedSkill(e.target.value);
  };

  const handleFromDateChange = (e) => {
    setFromDate(e.target.value);
  };

  const handleToDateChange = (e) => {
    setToDate(e.target.value);
  };

  const handleClick = async () => {
    const formData = new FormData();
    formData.append("skill", selectedSkill);
    formData.append("startDate", fromDate);
    formData.append("endDate", toDate);

    try {
      const response = await axios.post(
        "https://ojt-backend.azurewebsites.net/get-skill-trend-report",
        formData,
        {
          headers: {
            Authorization: `Bearer ${authUser.accessToken}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log("Response:", response.data);
      setApiData(response.data); 
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="OJTAnalytics">
      <h3>Skill Graph Trend</h3>
      <div className="chart-container">
        <div className="chart">
          <VerticalBarChart />
        </div>
        <div className="chart">
          <LineChart />
        </div>
      </div>
      <div className="filter-options container">
        <h4>Filter Options</h4>
        <div className="filters">
          <div className="select-container">
            <select name="skill" value={selectedSkill} onChange={handleSkillChange}>
              <option value="" disabled selected>
                Select Skills
              </option>
              {skillFilter.map((skill, i) => (
                <option key={i} value={skill}>
                  {skill}
                </option>
              ))}
            </select>
            <div className="date-time-container">
              <div>
                <label htmlFor="fromDate">From</label>
                <input type="date" id="fromDate" name="fromDate" onChange={handleFromDateChange} />
              </div>
              <div>
                <label htmlFor="toDate">To</label>
                <input type="date" id="toDate" name="toDate" onChange={handleToDateChange} />
              </div>
            </div>
          </div>
          <button onClick={handleClick}>Apply Filters</button>
        </div>
      </div>
      <div className="data-table container">
        <h4>Data Table</h4>
        <table>
          <thead>
            <tr>
              <th>Skill</th>
              <th>Trend</th>
              <th>Start Date</th>
              <th>End Date</th>
              <th>Avg Demand Change</th>
            </tr>
          </thead>
          <tbody>
            {apiData ? (
              <>
                <tr>
                  <td>{apiData.skill}</td>
                  <td>{apiData.trend}</td>
                  <td>{apiData.startDate}</td>
                  <td>{apiData.endDate}</td>
                  <td>{apiData.avg_demand_change}</td>
                </tr>
                {apiData.yearly_data.map((data, i) => (
                  <tr key={i}>
                    <td colSpan="5">
                      Year: {data.year}, Skill Frequency: {data.skillFrequency}, Demand Change: {data.demandChange}
                    </td>
                  </tr>
                ))}
              </>
            ) : (
              <tr>
                <td colSpan="5">No data available</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OJTAnalytics;
