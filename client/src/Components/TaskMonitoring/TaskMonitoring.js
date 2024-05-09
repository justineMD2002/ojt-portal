import React from "react";
import TaskCard from "./TaskCard";

const TaskMonitoring = () => {
  const tasks = [
    {
      thumbnail:
        "https://images.squarespace-cdn.com/content/v1/6446dadb329c922b5cfe60b1/1683679509314-RFMGQXEGRYC69825E0XK/Daring_Creative_A_computer_screen_displaying_various_eye-catchi_84329a55-d780-43ab-b6ed-5ce2ed3d02c9.png",
      title: "Task Title",
      details: "Lorem Ipsum",
      trainingPlan: "Training Plan 1",
      users: [
        {
          img: "https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg",
        },
        {
          img: "https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg",
        },
        {
          img: "https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg",
        },
      ],
      completionProgress: 30,
    },
    {
      thumbnail:
        "https://images.squarespace-cdn.com/content/v1/6446dadb329c922b5cfe60b1/1683679509314-RFMGQXEGRYC69825E0XK/Daring_Creative_A_computer_screen_displaying_various_eye-catchi_84329a55-d780-43ab-b6ed-5ce2ed3d02c9.png",
      title: "Task Title",
      details: "Lorem Ipsum",
      trainingPlan: "Training Plan 1",
      users: [
        {
          img: "https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg",
        },
        {
          img: "https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg",
        },
        {
          img: "https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg",
        },
      ],
      completionProgress: 30,
    },
    {
      thumbnail:
        "https://images.squarespace-cdn.com/content/v1/6446dadb329c922b5cfe60b1/1683679509314-RFMGQXEGRYC69825E0XK/Daring_Creative_A_computer_screen_displaying_various_eye-catchi_84329a55-d780-43ab-b6ed-5ce2ed3d02c9.png",
      title: "Task Title",
      details: "Lorem Ipsum",
      trainingPlan: "Training Plan 1",
      users: [
        {
          img: "https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg",
        },
        {
          img: "https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg",
        },
        {
          img: "https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg",
        },
      ],
      completionProgress: 30,
    },
  ];

  const trainingPlan = [
    {
      id: 1,
      title: "SafetyProtocols",
      tasks: [
        {
          title: "test",
          mark: "complete",
        },
        {
          title: "test1",
          mark: "incomplete",
        },
      ],
    },
    {
      id: 2,
      title: "SafetyProtocols",
      tasks: [
        {
          title: "test",
          mark: "complete",
        },
        {
          title: "test1",
          mark: "incomplete",
        },
      ],
    },
    {
      id: 3,
      title: "SafetyProtocols",
      tasks: [
        {
          title: "test",
          mark: "complete",
        },
        {
          title: "test1",
          mark: "incomplete",
        },
      ],
    },
    {
      id: 4,
      title: "SafetyProtocols",
      tasks: [
        {
          title: "test",
          mark: "complete",
        },
        {
          title: "test1",
          mark: "incomplete",
        },
      ],
    },
  ];

  const countCompleteTasks = (tasks) => {
    let completeCount = 0;

    tasks.forEach((task) => {
      if (task.mark === "complete") {
        completeCount++;
      }
    });

    return completeCount;
  };
  return (
    <div className="TaskMonitoring">
      <h3 className="title">Task Status Overview</h3>
      <div className="TaskCard-container">
        {tasks.map((task, i) => (
          <TaskCard
            thumbnail={task.thumbnail}
            title={task.title}
            details={task.details}
            trainingPlan={task.trainingPlan}
            users={task.users}
            completionProgress={task.completionProgress}
          />
        ))}
      </div>

      <div className="training-plan-title">
        <h3 className="title">Create Training Plan</h3>
        <button>Create Training Plan</button>
      </div>

      <ul className="training-plan">
        {trainingPlan.map((item, i) => (
          <li>
            <p>
              Module {item.id} - {item.title}
            </p>

            <div className="btn-container">
              <p>
                Tasks: {countCompleteTasks(item.tasks)}/{item.tasks.length}
              </p>

              <button>View Details</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskMonitoring;
