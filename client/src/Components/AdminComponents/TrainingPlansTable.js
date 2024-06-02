import React, { useEffect, useState } from 'react';
import { useAuth } from '../UserManagement/AuthContext';
import axios from 'axios';

const TrainingPlansTable = () => {
    const {authUser} = useAuth();
    const [data, setData] = useState([]);
    
    useEffect(() => {
        const fetchData =  async() => {
            try {
                const response = await axios.get(
                  "https://ojt-backend.azurewebsites.net/get-training-plans",
                  {
                    params: {
                      studentEmail: "all",
                    },
                    headers: {
                      Authorization: `Bearer ${authUser.accessToken}`,
                    },
                  }
                );
                setData(response.data);
              } catch (error) {
                console.log(error);
              }
        }
        fetchData();
    },[authUser]);

  return (
    <div className="container">
      <h1>Training Plans</h1>
      {data.map((plan) => (
        <div key={plan.trainingplanid} className="training-plan">
          <table>
            <thead>
              <tr>
                <th colSpan="2">Training Plan Details</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Title</td>
                <td>{plan.title}</td>
              </tr>
              <tr>
                <td>Description</td>
                <td>{plan.description}</td>
              </tr>
              <tr>
                <td>Start Date</td>
                <td>{plan.startDate}</td>
              </tr>
              <tr>
                <td>End Date</td>
                <td>{plan.endDate}</td>
              </tr>
              <tr>
                <td>Total Tasks</td>
                <td>{plan.totalTasks}</td>
              </tr>
            </tbody>
          </table>

          {plan.tasks.length > 0 && (
            <div className="tasks">
              <h2>Tasks</h2>
              {plan.tasks.map((task) => (
                <table key={task.taskId}>
                  <thead>
                    <tr>
                      <th colSpan="2">Task Details</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Title</td>
                      <td>{task.title}</td>
                    </tr>
                    <tr>
                      <td>Description</td>
                      <td>{task.description}</td>
                    </tr>
                    <tr>
                      <td>Objective</td>
                      <td>{task.objective}</td>
                    </tr>
                    <tr>
                      <td>Visibility</td>
                      <td>{task.visibility}</td>
                    </tr>
                  </tbody>
                  <thead>
                    <tr>
                      <th colSpan="2">Skills</th>
                    </tr>
                  </thead>
                  {task.skills.map((skill) => (
                    <tbody key={skill.skillId}>
                      <tr>
                        <td>Skill Name</td>
                        <td>{skill.skillName}</td>
                      </tr>
                      <tr>
                        <td>Domain</td>
                        <td>{skill.domain}</td>
                      </tr>
                    </tbody>
                  ))}
                </table>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default TrainingPlansTable;
