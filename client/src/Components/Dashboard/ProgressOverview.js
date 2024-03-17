import React from "react";
import CircularProgress from "./CircularProgress";

const ProgressOverview = () => {
  return (
    <section className="ProgressOverview">
      <h3>Progress Overview</h3>
      <div className="progress-wrapper">
        <div className="progress-container">
          <CircularProgress percentage={75} /> {/* this is the circular bar */}
          <p className="description">OJT Document Submission</p>
          <p className="description">Deadline: May 24, 2024, 11pm</p>
        </div>
        <div className="progress-container">
          <CircularProgress percentage={75} />
          <p className="description">OJT Document Submission</p>
          <p className="description">Deadline: May 24, 2024, 11pm</p>
        </div>
        <div className="progress-container">
          <CircularProgress percentage={75} />
          <p className="description">OJT Document Submission</p>
          <p className="description">Deadline: May 24, 2024, 11pm</p>
        </div>
      </div>
    </section>
  );
};

export default ProgressOverview;
