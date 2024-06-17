import React, { useEffect, useState } from "react";
import { DropdownDomainModel } from "../model/DropdownTaskModel";
import { useAuth } from "../../../UserManagement/AuthContext";
import DropdownTaskView from "../view/DropdownTaskView";

const DropdownTaskController = (props) => {
  const { authUser } = useAuth();
  const [taskMenu, setTaskMenu] = useState([]);
  const [selectedTask, setSelectedTask] = useState(
    props.value ? props.value.taskId : ""
  );

  useEffect(() => {
    props.value ? props.setTask(selectedTask) : props.setTask("");
    const fetchOjtRecord = async () => {
      try {
        const data = await DropdownDomainModel(authUser);
        setTaskMenu(data);
      } catch (error) {
        console.error("Error fetching ojt record:", error);
      }
    };

    fetchOjtRecord();
  }, [authUser]);

  const handleTaskChange = (event) => {
    setSelectedTask(event.target.value);
    props.setTask(event.target.value);
  };

  return (
    <DropdownTaskView
      taskMenu={taskMenu}
      handleTaskChange={handleTaskChange}
      selectedTask={selectedTask}
    />
  );
};

export default DropdownTaskController;
