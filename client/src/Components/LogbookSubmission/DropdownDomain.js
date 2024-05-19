import React, { useState } from 'react';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export const DropdownDomain = (props) => {
    const [showTextInput, setShowTextInput] = useState(false);
    const [customSkill, setCustomSkill] = useState({ domain: '', skill: '' });

    const handleChange = (event) => {
        const selectedValue = event.target.value;
        if (selectedValue === 'Others') {
            setShowTextInput(true);
            props.setSkill({ domain: '', skill: '' });
        } else {
            const [domain, skill] = selectedValue.split(': ');
            props.setSkill({ domain, skill });
            setShowTextInput(false);
        }
    };

    const handleTextInputChange = (event) => {
        const { name, value } = event.target;
        setCustomSkill(prevState => ({ ...prevState, [name]: value }));
        props.setSkill({ ...customSkill, [name]: value });
    };

    const taskMenu = [
        { domain: "Financial analysis software", skill: "1003 Uniform Residential Loan Application" },
        { domain: "Human resources software", skill: "!Trak-it Solutions !Trak-it HR" },
        { domain: "Procurement software", skill: "1ST Pricing Window & Door Toolkit" },
        { domain: "Access software", skill: "2AB iLock Security Services" },
        { domain: "Analytical or scientific software", skill: "360 Analytics eQUEST" },
    ];

    return (
        <div style={{ display: 'flex', alignItems: 'center' }}>
            <FormControl sx={{ minWidth: 120 }}>
                <Select
                    onChange={handleChange}
                    displayEmpty
                    inputProps={{ 'aria-label': 'Without label' }}
                    sx={{ height: '40px' }}
                >
                    {taskMenu.map(task => (
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
                        style={{ height: '40px', marginLeft: '8px', flex: 1 }}
                    />
                    <input
                        type="text"
                        name="skill"
                        onChange={handleTextInputChange}
                        placeholder="Enter skill"
                        style={{ height: '40px', marginLeft: '8px', flex: 1 }}
                    />
                </>
            )}
        </div>
    );
};
