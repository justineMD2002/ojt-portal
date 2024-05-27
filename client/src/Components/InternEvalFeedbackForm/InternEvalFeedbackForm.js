import React, { useState } from "react";
import axios from "axios";
import { useAuth } from "../UserManagement/AuthContext";

const InternEvalFeedbackForm = (props) => {
  const [grades, setGrades] = useState({
    attendance: 5,
    communication: 5,
    qualOfWork: 5,
    probSolving: 5,
  });
  const [feedback, setFeedback] = useState("");
  const { authUser } = useAuth();

  const handleChange = (e, type) => {
    const value = e.target.value;
    const grade = getGrade(value);
    setGrades((prevGrades) => ({
      ...prevGrades,
      [type]: grade,
    }));
  };

  const handleSubmit = async () => {
    const averageGrade = calculateAverageGrade();
    const formData = new FormData();
    formData.append('grade', averageGrade);
    formData.append('feedback', feedback);
    formData.append('studentEmail', props.student.email);

    try {
      const response = await axios.post(
        "https://ojt-portal-backend2.azurewebsites.net/supervisor/evaluate-intern",
        formData,
        {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            Authorization: `Bearer ${authUser.accessToken}`,
          }
        }
      );
      console.log(response.data);
      if (/^ERROR/.test(response.data)) {
        alert(`${response.data}`);
      } else {
        alert(`${response.data}`);
        props.onClose(); 
      }
    } catch (error) {
      console.error("Error submitting evaluation:", error);
    }
  };

  const getGrade = (value) => {
    switch (value) {
      case "Excellent":
        return 5;
      case "Very Good":
        return 4;
      case "Average":
        return 3;
      case "Needs Improvement":
        return 2;
      case "Poor":
        return 1;
      default:
        return 0;
    }
  };

  const calculateAverageGrade = () => {
    const { attendance, communication, qualOfWork, probSolving } = grades;
    const averageGrade =
      (attendance + communication + qualOfWork + probSolving) / 4;
    return averageGrade.toFixed(1);
  };

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
            <div>ID: {props.student.uid}</div>
            <div>
              {props.student.firstname} {props.student.lastname}
            </div>
            <div>Email: {props.student.email}</div>
          </div>
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
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default InternEvalFeedbackForm;
