import React, { useState } from "react";
import axios from "axios";
import { useAuth } from "../UserManagement/AuthContext";

const TaskCard = ({
  thumbnail,
  title,
  description,
  startDate,
  endDate,
  tasks,
  trainingPlanID,
}) => {
  const [isDetailPopupVisible, setDetailPopupVisibility] = useState(false);
  const [isCreateTaskPopupVisible, setCreateTaskPopupVisibility] =
    useState(false);
  const [taskTitle, setTaskTitle] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [taskObjective, setTaskObjective] = useState("");
  const [skills, setSkills] = useState([{ skillName: "", domain: "" }]);
  const { authUser } = useAuth();
  const toggleDetailPopup = () => {
    setDetailPopupVisibility(!isDetailPopupVisible);
  };

  const toggleCreateTaskPopup = () => {
    setCreateTaskPopupVisibility(!isCreateTaskPopupVisible);
  };

  const addSkill = () => {
    setSkills([...skills, { skillName: "", domain: "" }]);
  };

  const removeSkill = (index) => {
    setSkills(skills.filter((_, skillIndex) => index !== skillIndex));
  };

  const handleSkillChange = (index, event) => {
    const newSkills = skills.map((skill, skillIndex) => {
      if (index === skillIndex) {
        return { ...skill, [event.target.name]: event.target.value };
      }
      return skill;
    });
    setSkills(newSkills);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    if (name === "title") {
      setTaskTitle(value);
    } else if (name === "description") {
      setTaskDescription(value);
    } else if (name === "objective") {
      setTaskObjective(value);
    }
  };

  const handleCreateTask = async () => {
    try {
      const requestBody = {
        trainingPlanID: trainingPlanID,
        task: {
          title: taskTitle,
          description: taskDescription,
          objective: taskObjective,
        },
        skills: skills,
      };

      const response = await axios.post(
        "https://ojt-backend.azurewebsites.net/supervisor/add-task",
        requestBody,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${authUser.accessToken}`,
          },
        }
      );
      alert(response.data);
      console.log(response.data);
      setDetailPopupVisibility(false);
      setCreateTaskPopupVisibility(false);
      window.location.reload();
    } catch (error) {
      console.error("Error creating task:", error);
    }
  };

  return (
    <div className="TaskCard">
      <img className="thumbnail" src={thumbnail} alt="" />
      <h4>{title}</h4>
      <p>{description}</p>
      <p>Start Date: {startDate}</p>
      <p>End Date: {endDate}</p>

      <div className="btn">
        <button onClick={toggleDetailPopup}>View Details</button>
      </div>

      {isDetailPopupVisible && (
        <div className="popup">
          <div className="popup-inner">
            <h2 style={{marginBottom: '10px'}}>Training Plan Details</h2>
            {tasks.map((task, index) => (
              <p key={index}>
                Task {index + 1}: {task.title}
              </p>
            ))}
            <button style={{marginTop: '10px', marginBottom: '10px'}} onClick={toggleCreateTaskPopup}>Create Task</button>
            <button onClick={toggleDetailPopup}>Close</button>
          </div>
        </div>
      )}

      {isCreateTaskPopupVisible && (
        <div className="popup">
          <div className="popup-inner">
            <h2>Create Task</h2>
            <label>Title:</label>
            <input
              type="text"
              name="title"
              value={taskTitle}
              onChange={handleInputChange}
            />
            <label>Description:</label>
            <textarea
              name="description"
              value={taskDescription}
              onChange={handleInputChange}
            ></textarea>
            <label>Objective:</label>
            <input
              type="text"
              name="objective"
              value={taskObjective}
              onChange={handleInputChange}
            />
            {/* Skills */}
            <div className="skills-header">
              <h3 className="skills-title">Skills</h3>
              <div className="skill-buttons">
                <button className="add-skill-btn" onClick={addSkill}>
                  +
                </button>
                <button
                  className="remove-skill-btn"
                  onClick={() => removeSkill(skills.length - 1)}
                >
                  -
                </button>
              </div>
            </div>
            {skills.map((skill, index) => (
              <div key={index} className="skill-container">
                <input
                  type="text"
                  name="skillName"
                  placeholder="Skill Name"
                  value={skill.skillName}
                  onChange={(event) => handleSkillChange(index, event)}
                />
                <input
                  type="text"
                  name="domain"
                  placeholder="Domain"
                  value={skill.domain}
                  onChange={(event) => handleSkillChange(index, event)}
                />
              </div>
            ))}
            <div className="popup-actions">
              <button onClick={handleCreateTask}>Create Task</button>
              <button onClick={toggleCreateTaskPopup}>Close</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TaskCard;
