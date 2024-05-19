import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const LogbookContents = () => {
  const { state } = useLocation();
  useEffect(() => {
    console.log(state);
  }, []);

  return (
    <div className="logbook-form">
      <div className="logbook-entry">
        <h1>Logbook Entry</h1>
        <h1>Status:</h1>
      </div>
      <div className="group">
        <div className="row">
          <div className="column">
            <label>Date</label>
            <input type="date" name="date" contentEditable={false} readOnly />
          </div>
          <div className="column">
            <label>Time In</label>
            <input type="time" name="timeIn" readOnly />
          </div>
        </div>
        <div className="row">
          <div className="column">
            <label>Time Out</label>
            <input type="time" name="timeOut" readOnly />
          </div>
          <div className="column">
            <label>Domain</label>
            <input type="text" name="domain" readOnly />
          </div>
          <div className="column">
            <label>Task</label>
            <input type="text" name="task" readOnly />
          </div>
        </div>
        <div className="row">
          <label>Activities</label>
          <textarea name="activities" rows="4"></textarea>
        </div>
      </div>
    </div>
  );
};

export default LogbookContents;
