import React, { useState } from "react";
import { InternEvalFeedbackFormModel } from "../model/InternEvalFeedbackFormModel";
import InternEvalFeedbackFormView from "../view/InternEvalFeedbackFormView";
import { useAuth } from "../../UserManagement/AuthContext";
import axios from "axios";

const InternEvalFeedbackFormController = (props) => {
  const [InternEvalFeedbackForm] = useState(InternEvalFeedbackFormModel);
  const [grades, setGrades] = useState(InternEvalFeedbackForm.grades);
  const [feedback, setFeedback] = useState(InternEvalFeedbackForm.feedback);
  const { authUser } = useAuth();

  const handleChange = (e, type) => {
    const value = e.target.value;
    const grade = getGrade(value);
    setGrades((prevGrades) => ({
      ...prevGrades,
      [type]: grade,
    }));
  };

  const handleSubmitStudent = async () => {
    const averageGrade = calculateAverageGrade();
    const formData = new FormData();
    formData.append("grade", averageGrade);
    formData.append("feedback", feedback);
    formData.append("studentEmail", props.student.user.email);

    console.log("Student Email: ", props.student.user.email);

    try {
      const response = await axios.post(
        "https://ojt-backend.azurewebsites.net/instructor/evaluate-intern",
        formData,
        {
          headers: {
            Authorization: `Bearer ${authUser.accessToken}`,
          },
        }
      );
      console.log(response.data);
      if (/^ERROR/.test(response.data)) {
        console.log("here");
        alert(`${response.data}`);
      } else {
        console.log("here1");
        alert(`${response.data}`);
        props.onClose();
      }
    } catch (error) {
      console.error("Error submitting evaluation:", error);
    }
  };

  const handleSubmit = async () => {
    const averageGrade = calculateAverageGrade();
    const formData = new FormData();
    formData.append("grade", averageGrade);
    formData.append("feedback", feedback);
    formData.append("studentEmail", props.student.email);

    try {
      const response = await axios.post(
        "https://ojt-backend.azurewebsites.net/supervisor/evaluate-intern",
        formData,
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            Authorization: `Bearer ${authUser.accessToken}`,
          },
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
    <InternEvalFeedbackFormView
      props={props}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      handleSubmitStudent={handleSubmitStudent}
      calculateAverageGrade={calculateAverageGrade}
      feedback={feedback}
      setFeedback={setFeedback}
    />
  );
};

export default InternEvalFeedbackFormController;
