import React, { useState, useEffect } from "react";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useAuth } from "../UserManagement/AuthContext";
import axios from "axios";

export const DropdownTask = (props) => {
  const { authUser } = useAuth();
  const [taskMenu, setTaskMenu] = useState([]);
  const [selectedTask, setSelectedTask] = useState("");

  useEffect(() => {
    const fetchOjtRecord = async () => {
      try {
        const response = await axios.get(
          "https://ojt-backend.azurewebsites.net/get-student-allTasks",
          {
            params: {
              studentEmail: authUser.userInfo.email,
            },
            headers: {
              Authorization: `Bearer ${authUser.accessToken}`,
            },
          }
        );
        console.log("Response from asdf:", response.data);
        setTaskMenu(response.data);
      } catch (error) {
        console.error("Error fetching ojt record:", error);
      }
    };
    fetchOjtRecord();
  }, [authUser.accessToken, authUser.userInfo.email]);

  const handleTaskChange = (event) => {
    setSelectedTask(event.target.value);
    props.setTask(event.target.value);
  };

  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <FormControl sx={{ minWidth: 120 }}>
        <Select
          value={selectedTask}
          onChange={handleTaskChange}
          inputProps={{ "aria-label": "Without label" }}
          sx={{ height: "40px" }}
        >
          {taskMenu.map((task) => (
            <MenuItem key={task.taskId} value={task.taskId}>
              {`${task.taskId}: ${task.title}`}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};
