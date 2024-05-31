import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export const DropdownUserTypeView = ({ handleChange }) => (
  <FormControl sx={{ m: 1, minWidth: 120 }}>
    <Select
      onChange={handleChange}
      displayEmpty
      inputProps={{ "aria-label": "Without label" }}
    >
      <MenuItem value={"Student"}>Student</MenuItem>
      <MenuItem value={"Supervisor"}>Supervisor</MenuItem>
    </Select>
  </FormControl>
);
