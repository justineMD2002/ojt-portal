import { FormControl, MenuItem, Select } from "@mui/material";
import React from "react";

const DropdownTaskView = ({ taskMenu, handleTaskChange, selectedTask }) => {
  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <FormControl sx={{ minWidth: 120 }}>
        <Select
          value={selectedTask}
          displayEmpty
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

export default DropdownTaskView;
