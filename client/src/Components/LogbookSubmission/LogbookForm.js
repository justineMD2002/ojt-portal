import React, { useState, useEffect } from "react";
import { DropdownDomain } from "./DropdownDomain";
import { DropdownTask } from "./DropdownTask";
import { useAuth } from "../UserManagement/AuthContext";
import axios from "axios";

const LogbookForm = () => {
  const { authUser } = useAuth();

  const getCurrentDate = () => {
    const date = new Date();
    return date.toISOString().split("T")[0];
  };

  const [formData, setFormData] = useState({
    date: getCurrentDate(),
    timeIn: "",
    timeOut: "",
    skills: [],
    task: "",
    activities: "",
  });
  

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSkillChange = (selectedSkill) => {
    setFormData((prevState) => ({
      ...prevState,
      skills: [...prevState.skills, selectedSkill],
    }));
  };
  

  const handleTaskChange = (selectedTask) => {
    setFormData((prevState) => ({ ...prevState, task: selectedTask }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const body = {
      entry: {
        timeIn: `${formData.date}T${formData.timeIn}`,
        timeOut: `${formData.date}T${formData.timeOut}`,
        activities: formData.activities,
      },
      taskIDs: formData.task ? [formData.task] : [],
      skills: formData.skills,
    };
    console.log(body);
    try {
      const response = await axios.post(
        "https://ojt-backend.azurewebsites.net/student/add-logbook-entry",
        body,
        {
          headers: {
            Authorization: `Bearer ${authUser.accessToken}`,
          },
        }
      );
      console.log("Response:", response.data);
    } catch (error) {
      console.error("Error:", error);
    }
  };  

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
              <DropdownDomain setSkill={handleSkillChange} />
            </div>
            {authUser && (
              <div className="column">
                <label>Task</label>
                <DropdownTask required setTask={handleTaskChange} />
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

export default LogbookForm;
