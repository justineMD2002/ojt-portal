import React, { useState } from 'react';
import { DropdownDomain } from './DropdownDomain';
import { DropdownTask } from './DropdownTask';
import { useAuth } from "../UserManagement/AuthContext";
import axios from 'axios';

const LogbookForm = () => {
  const { authUser } = useAuth();
  const [formData, setFormData] = useState({
    date: '',
    timeIn: '',
    timeOut: '',
    skill: '',
    task: '',
    activities: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSkillChange = (selectedSkill) => {
    setFormData(prevState => ({ ...prevState, skill: selectedSkill }));
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    console.log('Form Data Submitted', formData);
  };

  return (
    <form onSubmit={handleSubmit} className="logbook-form">
      <div className="group">
        <div className="row">
          <div className="column">
            <label>Date</label>
            <input type="date" name="date" onChange={handleChange} />
          </div>
          <div className="column">
            <label>Time In</label>
            <input type="time" name="timeIn" onChange={handleChange} />
          </div>
        </div>
        <div className="row">
          <div className="column">
            <label>Time Out</label>
            <input type="time" name="timeOut" onChange={handleChange} />
          </div>
          <div className="column">
            <label>Domain</label>
            <DropdownDomain setSkill={handleSkillChange} />
          </div>
          <div className="column">
            <label>Task</label>
            <DropdownTask />
          </div>
        </div>
        <div className="row">
          <label>Activities</label>
          <textarea name="activities" rows="4" onChange={handleChange}></textarea>
        </div>
      </div>

      <button type="submit">Submit</button>
    </form>
  );
};

export default LogbookForm;
