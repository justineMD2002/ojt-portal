import React, { useState, useEffect } from "react";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useAuth } from "../UserManagement/AuthContext";
import axios from "axios";

const SubmittedInfo = () => {
  const [isFeedbackPopupVisible, setFeedbackPopupVisible] = useState(false);
  const [feedbackMessage, setFeedbackMessage] = useState("");
  const [isActionPopupVisible, setActionPopupVisible] = useState(false);
  const [actionFeedback, setActionFeedback] = useState("");
  const [actionType, setActionType] = useState("");
  const { authUser } = useAuth();
  const [entries, setEntries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedEntry, setSelectedEntry] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://ojt-backend.azurewebsites.net/supervisor/get-logbooks",
          {
            params: {
              supervisorEmail: authUser.userInfo.email,
            },
            headers: {
              Authorization: `Bearer ${authUser.accessToken}`,
            },
          }
        );
        console.log(response.data);
        setEntries(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, [authUser]);

  const handleViewFeedbackClick = (message) => {
    setFeedbackMessage(message);
    setFeedbackPopupVisible(true);
  };

  const handleApproveRejectClick = (type, entry) => {
    setActionType(type);
    setSelectedEntry(entry);
    setActionPopupVisible(true);
  };

  const handleActionSubmit = async () => {
    try {
      let response;
      if (actionType === "Approve") {
        response = await approveEntry(selectedEntry.entryId, actionFeedback);
      } else if (actionType === "Reject") {
        response = await rejectEntry(selectedEntry.entryId, actionFeedback);
      }
      console.log("Response:", response.data);
      alert(response.data);
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred. Please try again.");
    } finally {
      setActionPopupVisible(false);
      window.location.reload();
    }
  };

  const approveEntry = async (entryId, remarks) => {
    const formData = new FormData();
    formData.append("entryID", entryId);
    formData.append("remarks", remarks);
    console.log("Form data:", formData);
    return await axios.post(
      "https://ojt-backend.azurewebsites.net/supervisor/approve-logbook",
      formData,
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          Authorization: `Bearer ${authUser.accessToken}`,
        },
      }
    );
  };

  const rejectEntry = async (entryId, remarks) => {
    const formData = new FormData();
    formData.append("entryID", entryId);
    formData.append("remarks", remarks);

    return await axios.post(
      "https://ojt-backend.azurewebsites.net/supervisor/reject-logbook",
      formData,
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          Authorization: `Bearer ${authUser.accessToken}`,
        },
      }
    );
  };

  const handleFeedbackChange = (e) => {
    setActionFeedback(e.target.value);
  };

  const closeFeedbackModal = () => {
    setFeedbackPopupVisible(false);
  };

  const closeActionModal = () => {
    setActionPopupVisible(false);
  };

  const renderEntry = (entry, statusColor) => (
    <ul className="submitted-info" key={entry.entryId}>
      <li className="list-item-style">
        <div className="left-section">
          <div
            className="colored-square-style"
            style={{ backgroundColor: statusColor }}
          ></div>
          <div className="entry-activities">{entry.activities}</div>
        </div>
        <div className="middle-section">
          {statusColor === "#660000" && (
            <>
              <button
                className="rectangle-button-style"
                onClick={() => handleApproveRejectClick("Approve", entry)}
                style={{marginRight: '15px'}}
              >
                Approve
              </button>
              <button
                className="rectangle-button-style"
                onClick={() => handleApproveRejectClick("Reject", entry)}
              >
                Reject
              </button>
            </>
          )}
          {statusColor !== "#660000" && (
            <button
              className="rec-button-style"
              onClick={() => handleViewFeedbackClick(entry.remarks)}
            >
              View Feedback
            </button>
          )}
        </div>
        <div className="right-section">
          <div className="name">
            {entry.ojtrecord.student.user.firstname}{" "}
            {entry.ojtrecord.student.user.lastname}
          </div>
          <div>
            <FontAwesomeIcon className="icon icon-style" icon={faUserCircle} />
          </div>
        </div>
      </li>
    </ul>
  );

  if (loading) {
    return <div>Loading...</div>;
  }

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

export default SubmittedInfo;
