import { FormControl, MenuItem, Select } from "@mui/material";
import React from "react";

const DropdownDomainView = ({
  handleChange,
  taskMenu,
  showTextInput,
  handleTextInputChange,
}) => {
  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <FormControl sx={{ minWidth: 120 }}>
        <Select
          onChange={handleChange}
          displayEmpty
          inputProps={{ "aria-label": "Without label" }}
          sx={{ height: "40px" }}
        >
          {taskMenu.map((task) => (
            <MenuItem key={task.domain} value={`${task.domain}: ${task.skill}`}>
              {`${task.domain}: ${task.skill}`}
            </MenuItem>
          ))}
          <MenuItem value="Others">Others</MenuItem>
        </Select>
      </FormControl>
      {showTextInput && (
        <>
          <input
            type="text"
            name="domain"
            onChange={handleTextInputChange}
            placeholder="Enter domain"
            style={{ height: "40px", marginLeft: "8px", flex: 1 }}
          />
          <input
            type="text"
            name="skill"
            onChange={handleTextInputChange}
            placeholder="Enter skill"
            style={{ height: "40px", marginLeft: "8px", flex: 1 }}
          />
        </>
      )}
    </div>
  );
};

export default DropdownDomainView;
