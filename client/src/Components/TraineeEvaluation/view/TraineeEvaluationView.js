import React from "react";
import InternEvalFeedbackFormController from "../../InternEvalFeedbackForm/controller/InternEvalFeedbackFormController";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";

const TraineeEvaluationView = ({
  trainees,
  loading,
  openFeedback,
  handleChange,
  handleCloseFeedback,
}) => {
  return (
    <div className="TraineeEvaluation">
      <h1>Trainee Evaluation</h1>

      {loading ? (
        <td colSpan="4">Loading...</td>
      ) : (
        <ul>
          {trainees.map((item, index) => (
            <li
              key={index}
              style={{ display: openFeedback[index] ? "block" : "flex" }}
            >
              <div
                className={`user`}
                style={{ display: openFeedback[index] && "none" }}
              >
                <FontAwesomeIcon icon={faUserCircle} className="icon" />

                <div>
                  <p>
                    {item.user.firstname} {item.user.lastname}
                  </p>
                  <p>{item.user.email}</p>
                </div>
              </div>

              <div
                className="student-id-container"
                style={{ display: openFeedback[index] && "none" }}
              >
                <p>{item.degreeProgram}</p>
                <p>Student ID: {item.studentid}</p>
              </div>

              <div style={{ display: openFeedback[index] && "none" }}>
                <button onClick={() => handleChange(index)} student={item}>
                  Evaluate Trainee
                </button>
              </div>
              {openFeedback[index] && (
                <InternEvalFeedbackFormController
                  type="trainee"
                  student={item.user}
                  onClose={() => handleCloseFeedback(index)}
                />
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TraineeEvaluationView;
