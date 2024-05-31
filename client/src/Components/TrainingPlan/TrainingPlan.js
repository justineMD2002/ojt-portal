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
          "https://ojt-backend.azurewebsites.net/get-student-trainingplans",
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
          {item.tasks.length > 0 && <h4>Tasks</h4>}
          <ul className="task-list">
            {item.tasks.map((task) => (
              <li key={task.taskId} className="task">
                <p className="id">
                  <span>Task ID:</span> {task.taskId}
                </p>
                <p className="title">
                  <span>Title:</span> {task.title}
                </p>
                <p>
                  <span>Description:</span> {task.description}
                </p>
                <p>
                  <span>Objective:</span> {task.objective}
                </p>
                <p className="skills-txt">Skills:</p>
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
