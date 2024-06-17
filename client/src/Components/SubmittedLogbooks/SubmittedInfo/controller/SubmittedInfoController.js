import React, { useEffect, useState } from "react";
import { useAuth } from "../../../UserManagement/AuthContext";
import { SubmittedInfoModel } from "../model/SubmittedInfoModel";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import SubmittedInfoView from "../view/SubmittedInfoView";

const SubmittedInfoController = () => {
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
    const fetchLogbookData = async () => {
      setLoading(true);
      try {
        const data = await SubmittedInfoModel(authUser);
        setEntries(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchLogbookData();
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
                style={{ marginRight: "15px" }}
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
    <SubmittedInfoView
      entries={entries}
      renderEntry={renderEntry}
      isFeedbackPopupVisible={isFeedbackPopupVisible}
      closeFeedbackModal={closeFeedbackModal}
      feedbackMessage={feedbackMessage}
      isActionPopupVisible={isActionPopupVisible}
      closeActionModal={closeActionModal}
      actionType={actionType}
      actionFeedback={actionFeedback}
      handleFeedbackChange={handleFeedbackChange}
      handleActionSubmit={handleActionSubmit}
    />
  );
};

export default SubmittedInfoController;
