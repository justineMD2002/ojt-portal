import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { useAuth } from "../UserManagement/AuthContext";
import axios from "axios";
import InternEvalFeedbackForm from "../InternEvalFeedbackForm/InternEvalFeedbackForm";

const TraineeEvaluation = () => {
  const { authUser } = useAuth();
  const [trainees, setTrainees] = useState([]);
  const [loading, setLoading] = useState(true);
  const [openFeedback, setOpenFeedback] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://ojt-portal-backend2.azurewebsites.net/company/get-all-students",
          {
            params: {
              companyName: authUser.company_name,
            },
            headers: {
              Authorization: `Bearer ${authUser.accessToken}`,
            },
          }
        );
        setTrainees(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, [authUser]);

  const handleChange = () => {
    setOpenFeedback(true);
    console.log("sud")
  };

  return (
    <div className="TraineeEvaluation">
      <h1>Trainee Evaluation</h1>

      <table>
        <thead>
          <tr>
            <th className="trainees-count">Trainees</th>
            <th></th>
            <th></th>
            <th className="filter-department">Filter by Department</th>
          </tr>
        </thead>
        <tbody>
          {loading ? (
            <tr>
              <td colSpan="4">Loading...</td>
            </tr>
          ) : (
            trainees.map((item, index) => (
              <tr key={index}>
                <td>
                  <FontAwesomeIcon
                    icon={faUserCircle}
                    style={{ fontSize: "30px", marginRight: "-100px" }}
                  />
                </td>
                <td>
                  <div>
                    <div className="item-name">{item.user.firstname} {item.user.lastname}</div>
                    <div className="item-position">{item.user.email}</div>
                  </div>
                </td>
                <td>
                  <div>
                    <div>{item.degreeProgram}</div>
                    <div className="item-ojtHrs">Student ID: {item.studentid}</div>
                  </div>
                </td>
                <td>
                  <button onClick={handleChange} student={item}>Evaluate Trainee</button>
                  {openFeedback && <InternEvalFeedbackForm student={item}/>}
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default TraineeEvaluation;
