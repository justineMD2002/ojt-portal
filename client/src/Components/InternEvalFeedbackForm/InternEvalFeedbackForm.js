import React from "react";

const InternEvalFeedbackForm = (props) => {

  const attendance = ["Excellent", "Very Good", "Good", "Poor"];
  const communication = ["Excellent", "Very Good", "Good", "Poor"];
  const qualOfWork = ["Excellent", "Very Good", "Good", "Po yor"];
  const probSolving = ["Excellent", "Very Good", "Good", "Poor"];

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
          <div className="intern-details">
            <div>John Doe</div>
            <div>Job Position: Software Engineer Intern</div>
            <div>Department:</div>
          </div>
        </div>
      </div>
      <div className="evaluation container">
        <h3>Evaluation</h3>
        <div className="filters">
          <div className="dropdown-column">
            <div className="td">
              <div className="eval-info">Attendance</div>
              <select>
                {attendance.map((skill, i) => (
                  <option key={i} value={skill}>{skill}</option>
                ))}
              </select>
            </div>
            <div className="td">
              <div className="eval-info">Communication</div>
              <select>
                {communication.map((skill, i) => (
                  <option key={i} value={skill}>{skill}</option>
                ))}
              </select>
            </div>
          </div>
          <div className="dropdown-column">
            <div className="td">
              <div className="eval-info">Quality of Work</div>
              <select>
                {qualOfWork.map((skill, i) => (
                  <option key={i} value={skill}>{skill}</option>
                ))}
              </select>
            </div>
            <div className="td">
              <div className="eval-info">Problem Solving</div>
              <select>
                {probSolving.map((skill, i) => (
                  <option key={i} value={skill}>{skill}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>
      <div className="comment-section container">
        <h3>Comment</h3>
        <textarea
          rows={6}
          cols={40}
          placeholder="Enter your comment here..."
        ></textarea>
      </div>
      <button>Submit</button>
    </div>
  );
};

export default InternEvalFeedbackForm;
