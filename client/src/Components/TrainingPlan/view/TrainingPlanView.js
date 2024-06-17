import React from "react";

const TrainingPlanView = ({ plans }) => {
  return (
    <div className="TrainingPlan">
      <h1>Training Plan</h1>
      {plans.length < 1 && (
        <h2 style={{ color: "red", marginTop: "5rem" }}>
          You currenly don't have any assigned training plans
        </h2>
      )}
      {plans.map((item) => (
        <div key={item.trainingplanid} className="data">
          <h2>{item.description}</h2>
          {item.tasks.length > 0 && <h4>Tasks</h4>}
          <ul className="task-list">
            {item.tasks.map((task) => (
              <li key={task.taskId} className="task">
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
    </div>
  );
};

export default TrainingPlanView;
