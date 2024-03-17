import React, { useState } from 'react';

const LogbookForm = () => {
  const [formData, setFormData] = useState({
    date: '',
    division: '',
    department: '',
    designation: '',
    timeIn: '',
    timeOut: '',
    activities: '',
    remarks: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data Submitted', formData);
  };

  return (
    <form onSubmit={handleSubmit} className="logbook-form">
      <div className="group">
        <label>Date</label>
        <input type="date" name="date" onChange={handleChange} />
        <label>Division</label>
        <input type="text" name="division" onChange={handleChange} />
        <label>Department/Area Assigned</label>
        <input type="text" name="department" onChange={handleChange} />
        <label>Designation</label>
        <input type="text" name="designation" onChange={handleChange} />
      </div>

      <div className="group">
        <label>Time In</label>
        <input type="time" name="timeIn" onChange={handleChange} />
        <label>Time Out</label>
        <input type="time" name="timeOut" onChange={handleChange} />
      </div>

      <div className="group">
        <label>Activities</label>
        <textarea name="activities" rows="4" onChange={handleChange}></textarea>
      </div>

      <div className="group">
        <label>Remarks</label>
        <textarea name="remarks" rows="4" onChange={handleChange}></textarea>
      </div>

      <button type="submit">Submit</button>
    </form>
  );
};

export default LogbookForm;
