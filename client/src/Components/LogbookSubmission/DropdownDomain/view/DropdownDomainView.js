import { FormControl, MenuItem, Select } from "@mui/material";
import React from "react";

const DropdownDomainView = ({
  handleChange,
  taskMenu,
  showTextInput,
  handleTextInputChange,
  domain,
}) => {
  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <FormControl sx={{ minWidth: 120 }}>
        <Select
          onChange={handleChange}
          defaultValue={
            domain && !showTextInput
              ? taskMenu.find(
                  (task) =>
                    task.domain === domain[domain.length - 1].domain &&
                    task.skill === domain[domain.length - 1].skillName
                )
                ? `${domain[domain.length - 1].domain}: ${
                    domain[domain.length - 1].skillName
                  }`
                : "Others"
              : ""
          }
          displayEmpty
          inputProps={{ "aria-label": "Without label" }}
          sx={{ height: "40px" }}
        >
          <MenuItem value="" disabled>
            Select a domain
          </MenuItem>
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
            defaultValue={domain && domain[0].domain}
            onChange={handleTextInputChange}
            placeholder="Enter domain"
            style={{ height: "40px", marginLeft: "8px", flex: 1 }}
          />
          <input
            type="text"
            name="skill"
            defaultValue={domain && domain[0].skillName}
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
