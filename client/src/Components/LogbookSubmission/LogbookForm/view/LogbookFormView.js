import React from "react";
import DropdownDomainController from "../../DropdownDomain/controller/DropdownDomainController";
import DropdownTaskController from "../../DropdownTask/controller/DropdownTaskController";

const LogbookFormView = ({
  formData,
  handleChange,
  handleSkillChange,
  handleTaskChange,
  handleSubmit,
  authUser,
}) => {
  return (
    <div>
      <form onSubmit={handleSubmit} className="logbook-form">
        <div className="group">
          <div className="row">
            <div className="column">
              <label>Date</label>
              <input
                required
                readOnly
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
              />
            </div>
            <div className="column">
              <label>Time In</label>
              <input
                required
                type="time"
                name="timeIn"
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="row">
            <div className="column">
              <label>Time Out</label>
              <input
                required
                type="time"
                name="timeOut"
                onChange={handleChange}
              />
            </div>
            <div className="column">
              <label>Domain</label>
              <DropdownDomainController setSkill={handleSkillChange} />
            </div>
            {authUser && (
              <div className="column">
                <label>Task</label>
                <DropdownTaskController required setTask={handleTaskChange} />
              </div>
            )}
          </div>
          <div className="row">
            <label>Activities</label>
            <textarea
              required
              name="activities"
              rows="4"
              onChange={handleChange}
            ></textarea>
          </div>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default LogbookFormView;
