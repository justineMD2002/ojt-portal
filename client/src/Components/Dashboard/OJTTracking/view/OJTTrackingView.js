import React from "react";

const OJTTrackingView = ({ authUser, ojtEntries, handleOnClick }) => {
  return (
    <section className="ojt-hrs-tracking">
      <div className="title-container">
        <h3>OJT Hours Tracking</h3>
        <h3>
          Total Rendered Hours:{" "}
          <span>
            {authUser && authUser.ojtRecord
              ? authUser.ojtRecord.renderedHrs
              : "Guest"}
          </span>{" "}
        </h3>
      </div>
      <table>
        <thead>
          <tr>
            <th>Entry ID</th>
            <th>Total Hours</th>
            <th>Remarks</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {ojtEntries.map((entry) => (
            <tr key={entry.entryId}>
              <td>{entry.entryId}</td>
              <td>{entry.totalHrs}</td>
              <td>{entry.remarks || "N/A"}</td>
              <td>{entry.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={handleOnClick}>View Entire Log</button>
      <div className="separator" />
    </section>
  );
};

export default OJTTrackingView;
