import React, { useState } from "react";

const LogbookForm = () => {
  const [formData, setFormData] = useState({
    generalInfo: '',
    timeDetails: '',
    activities: '',
    remarks: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="generalInfo"
        value={formData.generalInfo}
        onChange={handleChange}
        placeholder="General Information"
      />
      <input
        type="text"
        name="timeDetails"
        value={formData.timeDetails}
        onChange={handleChange}
        placeholder="Time Details"
      />
      <textarea
        name="activities"
        value={formData.activities}
        onChange={handleChange}
        placeholder="Activities"
      />
      <textarea
        name="remarks"
        value={formData.remarks}
        onChange={handleChange}
        placeholder="Remarks"
      />
      <button type="submit">Submit Logbook Entry</button>
    </form>
  );
};

export default LogbookForm;
