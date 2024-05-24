import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const LogbookContents = () => {
  const { state } = useLocation();
  const [logbookEntry] = useState(
    state.entries.filter((entry) => entry.entryId === state.entryID)[0]
  );
  const [isReadOnly] = useState(logbookEntry.status === "APPROVED");

  useEffect(() => {
    console.log(logbookEntry);
  }, []);

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
              contentEditable={false}
              readOnly={isReadOnly}
            />
          </div>
          <div className="column">
            <label>Time In</label>
            <input
              type="time"
              name="timeIn"
              value={logbookEntry.timeIn.split("T")[1]}
              readOnly={isReadOnly}
            />
          </div>
        </div>
        <div className="row">
          <div className="column">
            <label>Time Out</label>
            <input
              type="time"
              name="timeOut"
              value={logbookEntry.timeOut.split("T")[1]}
              readOnly={isReadOnly}
            />
          </div>
          <div className="column">
            <label>Domain</label>
            <input type="text" name="domain" readOnly={isReadOnly} />
          </div>
          <div className="column">
            <label>Task</label>
            <input type="text" name="task" readOnly={isReadOnly} />
          </div>
        </div>
        <div className="row">
          <label>Activities</label>
          <textarea
            name="activities"
            rows="4"
            value={logbookEntry.activities}
            readOnly={isReadOnly}
          ></textarea>
        </div>
        {isReadOnly ? (
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
          <button type="submit">Submit</button>
        )}
      </div>
    </div>
  );
};

export default LogbookContents;
