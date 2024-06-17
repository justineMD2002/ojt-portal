import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import DropdownDomainController from "../LogbookSubmission/DropdownDomain/controller/DropdownDomainController";
import DropdownTaskController from "../LogbookSubmission/DropdownTask/controller/DropdownTaskController";
import axios from "axios";
import { useAuth } from "../UserManagement/AuthContext";

const LogbookContents = () => {
  const { state } = useLocation();
  const [logbookEntry] = useState(
    state.entries.filter((entry) => entry.entryId === state.entryID)[0]
  );

  const [formData, setFormData] = useState({
    timeIn: logbookEntry.timeIn.split("T")[1],
    timeOut: logbookEntry.timeOut.split("T")[1],
    entryID: state.entryID,
    skills: logbookEntry.skills,
    task: logbookEntry.tasks[0],
    activities: logbookEntry.activities,
  });

  const [isReadOnly] = useState(
    logbookEntry.status === "APPROVED" || logbookEntry.status === "PENDING"
  );
  const { authUser } = useAuth();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSkillChange = (skill) => {
    setFormData((prevState) => ({
      ...prevState,
      skills: [...prevState.skills, skill],
    }));
    console.log("skills: ", formData.skills);
  };

  const handleTaskChange = (task) => {
    setFormData((prevState) => ({ ...prevState, task: task }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const body = {
      entry: {
        entryID: formData.entryID,
        timeIn: `${logbookEntry.timeIn.split("T")[0]}T${formData.timeIn}`,
        timeOut: `${logbookEntry.timeIn.split("T")[0]}T${formData.timeOut}`,
        activities: formData.activities,
      },
      taskIDs: formData.task ? [formData.task] : [],
      skills: formData.skills.map((skill) => ({
        skill_name: skill.skill ? skill.skill : skill.skillName,
        domain: skill.domain,
      })),
    };
    console.log("body", body);
    try {
      const response = await axios.put(
        "https://ojt-backend.azurewebsites.net/student/update-logbook-entry",
        body,
        {
          headers: {
            Authorization: `Bearer ${authUser.accessToken}`,
          },
        }
      );

      console.log("response: ", response.data);
      if (
        typeof response.data === "string" &&
        response.data.substring(0, 5) === "ERROR"
      ) {
        alert("Logbook entry update failed");
      } else {
        alert("Logbook entry updated successfully");
        navigate("/logbook-entries");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

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
                    ? `${logbookEntry.tasks[0].taskId}: ${logbookEntry.tasks[0].title}`
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
        {((logbookEntry.status === "APPROVED" && isReadOnly) ||
          logbookEntry.status === "REJECTED") && (
            <div className="row">
              <label>Remarks</label>
              <textarea
                name="feedback"
                rows="4"
                value={logbookEntry.remarks}
                readOnly
              ></textarea>
            </div>
          ) &&
          logbookEntry.status === "REJECTED" && (
            <button type="submit" onClick={(e) => handleSubmit(e)}>
              Submit
            </button>
          )}
      </div>
    </div>
  );
};

export default LogbookContents;
