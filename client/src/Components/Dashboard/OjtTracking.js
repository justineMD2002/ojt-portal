import React from "react";

const OjtTRacking = () => {
  return (
    <section className="ojt-hrs-tracking">
      <div className="title-container">
        <h3>OJT Hours Tracking</h3>
        <h3>
          Total Rendered Hours: <span>20 hrs</span>
        </h3>
      </div>
      <table>
        <thead>
          <th>Date</th>
          <th>Start Time</th>
          <th>End Time</th>
          <th>Total Hours</th>
          <th>Task Description</th>
          <th>Supervisor Comments</th>
        </thead>
        <tbody>
          <tr>
            <td>2022-05-20</td>
            <td>9:00 AM</td>
            <td>5:00 PM</td>
            <td>8 hours</td>
            <td>Developed new feature</td>
            <td>Good job!</td>
          </tr>
          <tr>
            <td>2022-05-20</td>
            <td>9:00 AM</td>
            <td>5:00 PM</td>
            <td>8 hours</td>
            <td>Developed new feature</td>
            <td>Good job!</td>
          </tr>
        </tbody>
      </table>
      <button>View Entire Log</button>
      <div className="separator" />
    </section>
  );
};

export default OjtTRacking;
