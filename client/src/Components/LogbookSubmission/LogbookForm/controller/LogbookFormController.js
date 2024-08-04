import React, { useState } from "react";
import { useAuth } from "../../../UserManagement/AuthContext";
import { LogbookFormModel } from "../model/LogbookFormModel";
import axios from "axios";
import LogbookFormView from "../view/LogbookFormView";

const LogbookFormController = () => {
  const { authUser } = useAuth();
  const [formData, setFormData] = useState(LogbookFormModel.formData);

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
      skills: formData.skills.map((skill) => ({
        skill_name: skill.skill,
        domain: skill.domain,
      })),
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
      if (
        typeof response.data === "string" &&
        response.data.substring(0, 5) === "ERROR"
      ) {
        alert("Logbook entry submission failed");
      } else {
        alert("Logbook entry submission successful");
        console.log("Response:", response.data);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <LogbookFormView
      formData={formData}
      handleChange={handleChange}
      handleSkillChange={handleSkillChange}
      handleTaskChange={handleTaskChange}
      handleSubmit={handleSubmit}
      authUser={authUser}
    />
  );
};

export default LogbookFormController;
