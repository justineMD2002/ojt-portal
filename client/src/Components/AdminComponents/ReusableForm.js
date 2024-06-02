import React from 'react';

const ReusableForm = ({ show, onClose, onSubmit, transactionType, children }) => {
  if (!show) {
    return null;
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit();
  };

  return (
    <div className="modal-overlay">
      <div className="modal">
        <div className="modal-header">
          <h2>{transactionType}</h2>
          <button onClick={onClose} className="close-button">&times;</button>
        </div>
        <form onSubmit={handleSubmit} className="modal-form">
          {children}
          <div className="modal-footer">
            <button type="submit" className="submit-button">Submit</button>
            <button type="button" onClick={onClose} className="cancel-button">Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ReusableForm;
