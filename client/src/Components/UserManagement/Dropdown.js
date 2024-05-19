import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export const DropdownUserType = (props) => {

    const handleChange = (event) => {
        props.setUserType(event.target.value);
      };

    return (
        <FormControl sx={{ m: 1, minWidth: 120 }}>
            <Select
            onChange={handleChange}
            displayEmpty
            inputProps={{ 'aria-label': 'Without label' }}
            >
            <MenuItem value={'Student'}>Student</MenuItem>
            <MenuItem value={'Supervisor'}>Supervisor</MenuItem>
            <MenuItem value={'Admin'}>Admin</MenuItem>
            </Select>
        </FormControl>
    );
}
