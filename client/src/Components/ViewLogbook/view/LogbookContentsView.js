import React from "react";
import DropdownDomainController from "../../LogbookSubmission/DropdownDomain/controller/DropdownDomainController";
import DropdownTaskController from "../../LogbookSubmission/DropdownTask/controller/DropdownTaskController";

const LogbookContentsView = ({
  logbookEntry,
  formData,
  isReadOnly,
  handleChange,
  handleSkillChange,
  handleTaskChange,
  handleSubmit,
}) => {
  return (
    <div className="logbook-form">
      <div className="logbook-entry">
        <h2>Logbook Entry</h2>
        <h2>Status: {logbookEntry.status}</h2>
      </div>
      <div className="group">
        <div className="row">
          <div className="column">
            <label>Date</label>
            <input
              type="date"
              name="date"
              value={logbookEntry.timeIn.split("T")[0]}
              onChange={(e) => handleChange(e)}
              readOnly
            />
          </div>
          <div className="column">
            <label>Time In</label>
            <input
              type="time"
              name="timeIn"
              onChange={(e) => handleChange(e)}
              value={formData.timeIn}
              readOnly
            />
          </div>
        </div>
        <div className="row">
          <div className="column">
            <label>Time Out</label>
            <input
              type="time"
              name="timeOut"
              onChange={(e) => handleChange(e)}
              value={formData.timeOut}
              readOnly
            />
          </div>
          <div className="column">
            <label>Domain</label>
            {!isReadOnly && logbookEntry.status === "REJECTED" ? (
              <DropdownDomainController
                setSkill={handleSkillChange}
                value={formData.skills}
              />
            ) : (
              <input
                type="text"
                value={
                  logbookEntry.skills.length > 0
                    ? `${
                        logbookEntry.skills[logbookEntry.skills.length - 1]
                          .domain
                      }: ${
                        logbookEntry.skills[logbookEntry.skills.length - 1]
                          .skillName
                      }`
                    : ""
                }
                name="domain"
                readOnly={isReadOnly}
              />
            )}
          </div>
          <div className="column">
            <label>Task</label>
            {!isReadOnly && logbookEntry.status === "REJECTED" ? (
              <DropdownTaskController
                required
                setTask={handleTaskChange}
                value={formData.task}
              />
            ) : (
              <input
                type="text"
                value={
                  logbookEntry.tasks
                    ? `${
                        logbookEntry.tasks[logbookEntry.tasks.length - 1].taskId
                      }: ${
                        logbookEntry.tasks[logbookEntry.tasks.length - 1].title
                      }`
                    : ""
                }
                name="task"
                readOnly={isReadOnly}
              />
            )}
          </div>
        </div>
        <div className="row">
          <label>Activities</label>
          <textarea
            name="activities"
            rows="4"
            value={formData.activities}
            onChange={(e) => handleChange(e)}
            readOnly={isReadOnly}
          ></textarea>
        </div>
        {(logbookEntry.status === "APPROVED" && isReadOnly) ||
        logbookEntry.status === "REJECTED" ? (
          <div className="row">
            <label>Remarks</label>
            <textarea
              name="feedback"
              rows="4"
              value={logbookEntry.remarks}
              readOnly
            ></textarea>
          </div>
        ) : (
          <div></div>
        )}
        {logbookEntry.status === "REJECTED" && (
          <button type="submit" onClick={(e) => handleSubmit(e)}>
            Submit
          </button>
        )}
      </div>
    </div>
  );
};

export default LogbookContentsView;
