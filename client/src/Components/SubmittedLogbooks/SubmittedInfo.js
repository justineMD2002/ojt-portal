import React, { useState } from "react";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SubmittedInfo = () => {
  const [isFeedbackPopupVisible, setFeedbackPopupVisible] = useState(false);
  const [feedbackMessage, setFeedbackMessage] = useState('');
  const [isActionPopupVisible, setActionPopupVisible] = useState(false);
  const [actionFeedback, setActionFeedback] = useState('');
  const [actionType, setActionType] = useState('');

  const handleViewFeedbackClick = () => {
    const message = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";
    setFeedbackMessage(message);
    setFeedbackPopupVisible(true);
  };

  const handleApproveRejectClick = (type) => {
    setActionType(type);
    setActionPopupVisible(true);
  };

  const handleFeedbackChange = (e) => {
    setActionFeedback(e.target.value);
  };

  const handleSubmit = () => {
    console.log(`${actionType} Feedback:`, actionFeedback);
    setActionPopupVisible(false);
  };

  const closeFeedbackModal = () => {
    setFeedbackPopupVisible(false);
  };

  const closeActionModal = () => {
    setActionPopupVisible(false);
  };

  return (
    <section className="submitted-info-wrapper">
      <div className="rectangle-style">
        <h1 style={{ marginBottom: '2%' }}>Pending Approval</h1>
        <ul className="submitted-info">
          <li className="list-item-style">
            <div className="colored-square-style" style={{ backgroundColor: '#660000' }}></div> 
            <div>Review logbook submission</div>
            <div>Finished Android</div>
            <button className="rectangle-button-style" onClick={() => handleApproveRejectClick('Approve')}>Approve</button> 
            <button className="rectangle-button-style" onClick={() => handleApproveRejectClick('Reject')}>Reject</button> 
            <div>John Quinnvic Taboada</div>
            <div><FontAwesomeIcon className="icon icon-style" icon={faUserCircle} /></div>
          </li>
        </ul>
        <ul className="submitted-info">
          <li className="list-item-style">
            <div className="colored-square-style" style={{ backgroundColor: '#660000' }}></div> 
            <div>Review logbook submission</div>
            <div>Finished Android</div>
            <button className="rectangle-button-style" onClick={() => handleApproveRejectClick('Approve')}>Approve</button> 
            <button className="rectangle-button-style" onClick={() => handleApproveRejectClick('Reject')}>Reject</button> 
            <div>John Quinnvic Taboada</div>
            <div><FontAwesomeIcon className="icon icon-style" icon={faUserCircle} /></div>
          </li>
        </ul>
        <ul className="submitted-info">
          <li className="list-item-style">
            <div className="colored-square-style" style={{ backgroundColor: '#660000' }}></div> 
            <div>Review logbook submission</div>
            <div>Finished Android</div>
            <button className="rectangle-button-style" onClick={() => handleApproveRejectClick('Approve')}>Approve</button> 
            <button className="rectangle-button-style" onClick={() => handleApproveRejectClick('Reject')}>Reject</button> 
            <div>John Quinnvic Taboada</div>
            <div><FontAwesomeIcon className="icon icon-style" icon={faUserCircle} /></div>
          </li>
        </ul>
      </div>

      <div className="rectangle-style">
        <h1 style={{ marginBottom: '2%' }}>Approved</h1>
        <ul className="submitted-info">
          <li className="list-item-style">
            <div className="colored-square-style" style={{ backgroundColor: '#286E34' }}></div> 
            <div>Review logbook submission</div>
            <div>Finished Android</div>
            <button className="rec-button-style" onClick={handleViewFeedbackClick}>View Feedback</button> 
            <div>John Quinnvic Taboada</div>
            <div><FontAwesomeIcon className="icon icon-style" icon={faUserCircle} /></div>
          </li>
        </ul>
        <ul className="submitted-info">
          <li className="list-item-style">
            <div className="colored-square-style" style={{ backgroundColor: '#286E34' }}></div> 
            <div>Review logbook submission</div>
            <div>Finished Android</div>
            <button className="rec-button-style" onClick={handleViewFeedbackClick}>View Feedback</button> 
            <div>John Quinnvic Taboada</div>
            <div><FontAwesomeIcon className="icon icon-style" icon={faUserCircle} /></div>
          </li>
        </ul>
        <ul className="submitted-info">
          <li className="list-item-style">
            <div className="colored-square-style" style={{ backgroundColor: '#286E34' }}></div> 
            <div>Review logbook submission</div>
            <div>Finished Android</div>
            <button className="rec-button-style" onClick={handleViewFeedbackClick}>View Feedback</button> 
            <div>John Quinnvic Taboada</div>
            <div><FontAwesomeIcon className="icon icon-style" icon={faUserCircle} /></div>
          </li>
        </ul>
      </div>

      <div className="rectangle-style">
        <h1 style={{ marginBottom: '2%' }}>Rejected</h1>
        <ul className="submitted-info">
          <li className="list-item-style">
            <div className="colored-square-style" style={{ backgroundColor: '#FF4A4A' }}></div> 
            <div>Review logbook submission</div>
            <div>Finished Android</div>
            <button className="rec-button-style" onClick={handleViewFeedbackClick}>View Feedback</button> 
            <div>John Quinnvic Taboada</div>
            <div><FontAwesomeIcon className="icon icon-style" icon={faUserCircle} /></div>
          </li>
        </ul>
        <ul className="submitted-info">
          <li className="list-item-style">
            <div className="colored-square-style" style={{ backgroundColor: '#FF4A4A' }}></div> 
            <div>Review logbook submission</div>
            <div>Finished Android</div>
            <button className="rec-button-style" onClick={handleViewFeedbackClick}>View Feedback</button> 
            <div>John Quinnvic Taboada</div>
            <div><FontAwesomeIcon className="icon icon-style" icon={faUserCircle} /></div>
          </li>
        </ul>
        <ul className="submitted-info">
          <li className="list-item-style">
            <div className="colored-square-style" style={{ backgroundColor: '#FF4A4A' }}></div> 
            <div>Review logbook submission</div>
            <div>Finished Android</div>
            <button className="rec-button-style" onClick={handleViewFeedbackClick}>View Feedback</button> 
            <div>John Quinnvic Taboada</div>
            <div><FontAwesomeIcon className="icon icon-style" icon={faUserCircle} /></div>
          </li>
        </ul>
      </div>

      {isFeedbackPopupVisible && (
        <div className="modal-overlay" onClick={closeFeedbackModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h2 className="modal-header">Feedback</h2>
            <p>{feedbackMessage}</p>
            <button className="close-button" onClick={closeFeedbackModal}>Close</button>
          </div>
        </div>
      )}

      {isActionPopupVisible && (
        <div className="modal-overlay" onClick={closeActionModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h2 className="modal-header">{actionType}</h2>
            <label style={{fontSize: '18px'}}>
              Feedback:
              <textarea value={actionFeedback} onChange={handleFeedbackChange} />
            </label>
            <button className="close-button" onClick={handleSubmit}>Submit</button>
          </div>
        </div>
      )}
    </section>
  );
};

export default SubmittedInfo;
