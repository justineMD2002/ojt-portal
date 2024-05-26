import React, { useEffect, useState } from "react";
import axios from "axios";
import { useAuth } from "../UserManagement/AuthContext";

const TrainingPlan = () => {
    const [plans, setPlans] = useState([]);
    const { authUser } = useAuth();
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get(
            "https://ojt-portal-backend2.azurewebsites.net/get-student-trainingplans",
            {
              params: {
                studentEmail: authUser.userInfo.email,
              },
              headers: {
                Authorization: `Bearer ${authUser.accessToken}`,
              },
            }
          );
          console.log(response.data);
          setPlans(response.data);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      };
  
      fetchData();
    }, []);
  
    return (
        <div className="TrainingPlan">
          <h1>Training Plan</h1>
          {plans.map((item) => (
            <div key={item.trainingplanid} className="data">
              <h2>
                {item.trainingplanid}: {item.description}
              </h2>
              <p>Tasks: </p>
              <ul>
                {item.tasks.map((task) => (
                  <li key={task.taskId}>
                    <div>Task ID: {task.taskId}</div>
                    <div>Title: {task.title}</div>
                    <div>Description: {task.description}</div>
                    <div>Objective: {task.objective}</div>
                    <p>Skills: </p>
                    <ul>
                      {task.skills.map((skill) => (
                        <li key={skill.skillId}>
                          {skill.skillName} - {skill.domain}
                        </li>
                      ))}
                    </ul>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <button>Upload Logbook</button>
        </div>
      );
    };
  
  export default TrainingPlan;