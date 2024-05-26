import React, { useState } from "react";

const TaskCard = ({
  thumbnail,
  title,
  details,
  trainingPlan,
  users,
  completionProgress,
}) => {
  const [isDetailPopupVisible, setDetailPopupVisibility] = useState(false);
  const [isCreateTaskPopupVisible, setCreateTaskPopupVisibility] = useState(false);
  const [skills, setSkills] = useState([{ skillName: "", domain: "" }]);

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

  return (
    <div className="TaskCard">
      <img className="thumbnail" src={thumbnail} alt="" />
      <h4>{title}</h4>
      <p>{details}</p>
      <p>{trainingPlan}</p>

      <div className="img-container">
        {users.map((user, i) => (
          <img key={i} src={user.img} alt="" />
        ))}
      </div>
      <div className="btn">
        <button onClick={toggleDetailPopup}>View Details</button>
        <p>{completionProgress}% complete</p>
      </div>

      {isDetailPopupVisible && (
        <div className="popup">
          <div className="popup-inner">
            <h2>Training Plan Details</h2>
            <p>Training Plan 1: random</p>
            <p>Task 1: random</p>
            <p>Task 2: random</p>
            <p>Task 3: random</p>
            <button onClick={toggleCreateTaskPopup}>Create Task</button>
            <button onClick={toggleDetailPopup}>Close</button>
          </div>
        </div>
      )}

      {isCreateTaskPopupVisible && (
        <div className="popup">
          <div className="popup-inner">
            <h2>Create Task</h2>
            <label>Title:</label>
            <input type="text" name="title" />
            <label>Description:</label>
            <textarea name="description"></textarea>
            <label>Objective:</label>
            <input type="text" name="objective" />
            <div className="skills-header">
              <h3 className="skills-title">Skills</h3>
              <div className="skill-buttons">
                <button className="add-skill-btn" onClick={addSkill}>+</button>
                <button className="remove-skill-btn" onClick={() => removeSkill(skills.length - 1)}>-</button>
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
              <button onClick={toggleCreateTaskPopup}>Close</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TaskCard;
