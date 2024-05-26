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
        <h2>Add Intern</h2>
        <form>
          <label>
            Email:
            <input
              type="text"
              name="studentEmail"
              onChange={handleInputChange}
              value={designation.studentEmail}
            />
          </label>
          <label>
            OJT Hours:
            <input
              type="text"
              name="ojtHours"
              onChange={handleInputChange}
              value={designation.ojtHours}
            />
          </label>
          <label>
            Designation:
            <input
              type="text"
              name="designation"
              onChange={handleInputChange}
              value={designation.designation}
            />
          </label>
          <label>
            Department:
            <input
              type="text"
              name="department"
              onChange={handleInputChange}
              value={designation.department}
            />
          </label>

          <button
            type="submit"
            onClick={(e) => {
              handleAddIntern(e);
              handleOpenModal();
            }}
          >
            Invite Intern
          </button>
        </form>

        <div className="close">
          <button onClick={handleOpenModal}>X</button>
        </div>
      </div>
    </div>
  );
};

export default AddInternModalView;
