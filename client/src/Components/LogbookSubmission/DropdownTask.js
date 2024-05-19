import React, { useState, useEffect } from 'react';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export const DropdownTask = (props) => {
    const taskMenu = [
        { taskId: 1, title: "Task 1" },
        { taskId: 2, title: "Task 2" },
        { taskId: 3, title: "Task 3" },
      ];      

    return (
        <div style={{ display: 'flex', alignItems: 'center' }}>
            <FormControl sx={{ minWidth: 120 }}>
                <Select
                    inputProps={{ 'aria-label': 'Without label' }}
                    sx={{ height: '40px' }} 
                >
                    {taskMenu.map(task => (
                        <MenuItem key={task.taskId} value={task.taskId}>
                            {`${task.taskId}: ${task.title}`}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </div>
    );
};
