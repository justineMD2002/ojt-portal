import React from "react";

const InternEvalFeedbackFormView = ({
  props,
  handleChange,
  handleSubmit,
  handleSubmitStudent,
  calculateAverageGrade,
  feedback,
  setFeedback,
}) => {
  return (
    <div className="InternEvalFeedbackForm">
      <div className="header-title">
        <h2>Intern Evaluation Feedback Form</h2>
      </div>
      <div className="intern-info">
        <div className="profile-section">
          <img
            src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
            alt="Profile"
            className="profile-pic"
          />
          {props.type === "trainee" && (
            <div className="intern-details">
              <div>ID: {props.student.uid}</div>
              <div>
                {props.student.firstname} {props.student.lastname}
              </div>
              <div>Email: {props.student.email}</div>
            </div>
          )}
          {props.type === "student" && (
            <div className="intern-details">
              <div>ID: {props.student.studentid}</div>
              <div>
                {props.student.user.firstname} {props.student.user.lastname}
              </div>
              <div>Email: {props.student.user.email}</div>
            </div>
          )}
        </div>
      </div>
      <div className="evaluation container">
        <h3>Evaluation</h3>
        <div className="filters">
          <div className="dropdown-column">
            <div className="td">
              <div className="eval-info">Attendance</div>
              <select onChange={(e) => handleChange(e, "attendance")}>
                {[
                  "Excellent",
                  "Very Good",
                  "Average",
                  "Needs Improvement",
                  "Poor",
                ].map((skill, i) => (
                  <option key={i} value={skill}>
                    {skill}
                  </option>
                ))}
              </select>
            </div>
            <div className="td">
              <div className="eval-info">Communication</div>
              <select onChange={(e) => handleChange(e, "communication")}>
                {[
                  "Excellent",
                  "Very Good",
                  "Average",
                  "Needs Improvement",
                  "Poor",
                ].map((skill, i) => (
                  <option key={i} value={skill}>
                    {skill}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="dropdown-column">
            <div className="td">
              <div className="eval-info">Quality of Work</div>
              <select onChange={(e) => handleChange(e, "qualOfWork")}>
                {[
                  "Excellent",
                  "Very Good",
                  "Average",
                  "Needs Improvement",
                  "Poor",
                ].map((skill, i) => (
                  <option key={i} value={skill}>
                    {skill}
                  </option>
                ))}
              </select>
            </div>
            <div className="td">
              <div className="eval-info">Problem Solving</div>
              <select onChange={(e) => handleChange(e, "probSolving")}>
                {[
                  "Excellent",
                  "Very Good",
                  "Average",
                  "Needs Improvement",
                  "Poor",
                ].map((skill, i) => (
                  <option key={i} value={skill}>
                    {skill}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>
      <div className="average-grade">
        <p>Average Grade: {calculateAverageGrade()}</p>
      </div>
      <div className="comment-section container">
        <h3>Feedback</h3>
        <textarea
          rows={6}
          cols={40}
          placeholder="Enter your feedback here..."
          value={feedback}
          onChange={(e) => setFeedback(e.target.value)}
        ></textarea>
      </div>
      <button
        onClick={props.type === "trainee" ? handleSubmit : handleSubmitStudent}
      >
        Submit
      </button>
    </div>
  );
};

export default InternEvalFeedbackFormView;
