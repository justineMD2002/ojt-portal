import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../../UserManagement/AuthContext';
import { LogbookContentsModel  } from '../model/LogbookContentsModel';
import LogbookContentsView from '../view/LogbookContentsView';
import axios from 'axios';

const LogbookContentsController = () => {
    const { state } = useLocation();
    const [logbookEntry] = useState(
      state.entries.filter((entry) => entry.entryId === state.entryID)[0]
    );
    const [formData, setFormData] = useState(LogbookContentsModel(logbookEntry, state));
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
  return <LogbookContentsView 
    logbookEntry={logbookEntry}
    formData={formData}
    isReadOnly={isReadOnly}
    handleChange={handleChange}
    handleSkillChange={handleSkillChange}
    handleTaskChange={handleTaskChange}
    handleSubmit={handleSubmit}
  />
}

export default LogbookContentsController