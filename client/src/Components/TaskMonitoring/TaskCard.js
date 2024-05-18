import React from "react";

const TaskCard = ({
  thumbnail,
  title,
  details,
  trainingPlan,
  users,
  completionProgress,
}) => {
  return (
    <div className="TaskCard">
      <img className="thumbnail" src={thumbnail} alt="" />
      <h4>{title}</h4>
      <p>{details}</p>
      <p>{trainingPlan}</p>

      <div className="img-container">
        {users.map((user, i) => (
          <img src={user.img} alt="" />
        ))}
      </div>
      <div className="btn">
        <button>View Details</button>
        <p>{completionProgress}% complete</p>
      </div>
    </div>
  );
};

export default TaskCard;
