import React from "react";

const AddInternModalView = ({
  designation,
  handleInputChange,
  handleAddIntern,
  handleOpenModal,
}) => {
  return (
    <div className="overlay">
      <div className="modal-container">
        <div className="close">
          <button onClick={handleOpenModal}>X</button>
        </div>
        <h2>Add Intern</h2>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleAddIntern(e);
            handleOpenModal();
          }}
        >
          <label>
            Email:
            <input
              type="email"
              name="studentEmail"
              onChange={handleInputChange}
              value={designation.studentEmail}
              required
              placeholder="Enter email"
            />
          </label>
          <label>
            OJT Hours:
            <input
              type="number"
              name="ojtHours"
              onChange={handleInputChange}
              value={designation.ojtHours}
              required
              placeholder="Enter OJT hours"
            />
          </label>
          <label>
            Designation:
            <input
              type="text"
              name="designation"
              onChange={handleInputChange}
              value={designation.designation}
              required
              placeholder="Enter designation"
            />
          </label>
          <label>
            Department:
            <input
              type="text"
              name="department"
              onChange={handleInputChange}
              value={designation.department}
              required
              placeholder="Enter department"
            />
          </label>

          <button type="submit">Invite Intern</button>
        </form>
      </div>
    </div>
  );
};

export default AddInternModalView;
