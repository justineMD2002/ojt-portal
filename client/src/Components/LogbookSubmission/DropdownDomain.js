import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useState } from 'react';

export const DropdownDomain = (props) => {
    const [showTextInput, setShowTextInput] = useState(false);

    const handleChange = (event) => {
        const selectedValue = event.target.value;
        if (selectedValue === 'Others') {
            setShowTextInput(true);
        } else {
            props.setSkill(selectedValue);
            setShowTextInput(false);
        }
    };

    const handleTextInputChange = (event) => {
        props.setSkill(event.target.value);
    };

    return (
        <div style={{ display: 'flex', alignItems: 'center' }}>
            <FormControl sx={{ minWidth: 120 }}>
                <Select
                    onChange={handleChange}
                    displayEmpty
                    inputProps={{ 'aria-label': 'Without label' }}
                    sx={{ height: '40px' }} 
                >
                    <MenuItem value={'Networking'}>Networking</MenuItem>
                    <MenuItem value={'Hardware'}>Hardware</MenuItem>
                    <MenuItem value={'Software'}>Software</MenuItem>
                    <MenuItem value={'Data Management'}>Data Management</MenuItem>
                    <MenuItem value={'Security'}>Security</MenuItem>
                    <MenuItem value={'Others'}>Others</MenuItem>
                </Select>
            </FormControl>
            {showTextInput && (
                <input
                    type="text"
                    onChange={handleTextInputChange}
                    placeholder="Enter custom value"
                    style={{ height: '40px', marginLeft: '8px', flex: 1 }} 
                />
            )}
        </div>
    );
}
