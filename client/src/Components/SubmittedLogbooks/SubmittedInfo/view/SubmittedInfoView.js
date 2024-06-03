import React from "react";

const SubmittedInfoView = ({
  entries,
  renderEntry,
  isFeedbackPopupVisible,
  closeFeedbackModal,
  feedbackMessage,
  isActionPopupVisible,
  closeActionModal,
  actionType,
  actionFeedback,
  handleFeedbackChange,
  handleActionSubmit,
}) => {
  return (
    <section className="submitted-info-wrapper">
      <div className="rectangle-style">
        <h1 style={{ marginBottom: "2%" }}>Pending Approval</h1>
        {entries
          .filter((entry) => entry.status === "PENDING")
          .map((entry) => renderEntry(entry, "#660000"))}
      </div>

      <div className="rectangle-style">
        <h1 style={{ marginBottom: "2%" }}>Approved</h1>
        {entries
          .filter((entry) => entry.status === "APPROVED")
          .map((entry) => renderEntry(entry, "#286E34"))}
      </div>

      <div className="rectangle-style">
        <h1 style={{ marginBottom: "2%" }}>Rejected</h1>
        {entries
          .filter((entry) => entry.status === "REJECTED")
          .map((entry) => renderEntry(entry, "#FF4A4A"))}
      </div>

      {isFeedbackPopupVisible && (
        <div className="modal-overlay" onClick={closeFeedbackModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h2 className="modal-header">Feedback</h2>
            <p>{feedbackMessage}</p>
            <button className="close-button" onClick={closeFeedbackModal}>
              Close
            </button>
          </div>
        </div>
      )}

      {isActionPopupVisible && (
        <div className="modal-overlay" onClick={closeActionModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h2 className="modal-header">{actionType}</h2>
            <label style={{ fontSize: "18px" }}>
              Feedback:
              <textarea
                value={actionFeedback}
                onChange={handleFeedbackChange}
              />
            </label>
            <button className="close-button" onClick={handleActionSubmit}>
              Submit
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default SubmittedInfoView;
