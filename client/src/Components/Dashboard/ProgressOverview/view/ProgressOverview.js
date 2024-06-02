import React from "react";
import CircularProgress from "../../CircularProgress";

const ProgressOverview = ({
  authUser,
  approvalPercentage,
  pendingPercentage,
}) => {
  return (
    <section className="ProgressOverview">
      <h3>Progress Overview</h3>
      <div className="progress-wrapper">
        <div className="progress-container">
          {authUser && authUser.ojtRecord && (
            <CircularProgress
              percentage={Math.ceil(
                (authUser.ojtRecord.renderedHrs / authUser.ojtRecord.ojtHours) *
                  100
              )}
            />
          )}
          <p className="description">OJT Hours</p>
        </div>
        <div className="progress-container">
          <CircularProgress percentage={pendingPercentage} />
          <p className="description">Pending Logbook Entries</p>
        </div>
        <div className="progress-container">
          <CircularProgress percentage={approvalPercentage} />
          <p className="description">Approved Logbook Entries</p>
        </div>
      </div>
    </section>
  );
};

export default ProgressOverview;
