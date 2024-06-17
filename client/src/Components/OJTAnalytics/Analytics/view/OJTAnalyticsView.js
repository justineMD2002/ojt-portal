import React from "react";
import VerticalBarController from "../../Chart/controller/VerticalBarController";
import LineChartController from "../../Chart/controller/LineChartController";

const OJTAnalyticsView = ({
  skillFilter,
  selectedSkill,
  handleSkillChange,
  handleFromDateChange,
  handleToDateChange,
  apiData,
  handleClick,
}) => {
  return (
    <div className="OJTAnalytics">
      <h3>Skill Graph Trend</h3>
      <div className="chart-container">
        <div className="chart">
          <VerticalBarController />
        </div>
        <div className="chart">
          <LineChartController />
        </div>
      </div>
      <div className="filter-options container">
        <h4>Filter Options</h4>
        <div className="filters">
          <div className="select-container">
            <select
              name="skill"
              value={selectedSkill}
              onChange={(e) => handleSkillChange(e)}
            >
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
                <input
                  type="date"
                  id="fromDate"
                  name="fromDate"
                  onChange={(e) => handleFromDateChange(e)}
                />
              </div>
              <div>
                <label htmlFor="toDate">To</label>
                <input
                  type="date"
                  id="toDate"
                  name="toDate"
                  onChange={(e) => handleToDateChange(e)}
                />
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
                      Year: {data.year}, Skill Frequency: {data.skillFrequency},
                      Demand Change: {data.demandChange}
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

export default OJTAnalyticsView;
