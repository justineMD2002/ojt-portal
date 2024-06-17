import React, { useState } from "react";
import { useAuth } from "../../../UserManagement/AuthContext";
import { TaskCardModel } from "../model/TaskCardModel";
import axios from "axios";
import TaskCardView from "../view/TaskCardView";

const TaskCardController = ({
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
  const { authUser } = useAuth();
  const [taskTitle, setTaskTitle] = useState(TaskCardModel.taskTitle);
  const [taskDescription, setTaskDescription] = useState(TaskCardModel.taskDescription);
  const [taskObjective, setTaskObjective] = useState(TaskCardModel.taskObjective);
  const [skills, setSkills] = useState([TaskCardModel.skills]);
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
    <TaskCardView
      thumbnail={thumbnail}
      title={title}
      description={description}
      startDate={startDate}
      endDate={endDate}
      toggleDetailPopup={toggleDetailPopup}
      isDetailPopupVisible={isDetailPopupVisible}
      tasks={tasks}
      toggleCreateTaskPopup={toggleCreateTaskPopup}
      taskTitle={taskTitle}
      isCreateTaskPopupVisible={isCreateTaskPopupVisible}
      handleInputChange={handleInputChange}
      taskObjective={taskObjective}
      taskDescription={taskDescription}
      removeSkill={removeSkill}
      addSkill={addSkill}
      skills={skills}
      handleSkillChange={handleSkillChange}
      handleCreateTask={handleCreateTask}
    />
  );
};

export default TaskCardController;
