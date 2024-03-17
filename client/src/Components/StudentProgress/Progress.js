import React from "react";

const Progress = ({ name, progress }) => {
  const widthValue = progress ? progress : 0;
  return (
    <div className="Progress">
      <p>{name}</p>
      <div className="progress-bar-container">
        <div className="progress-bar" style={{ width: `${widthValue}%` }}>
          <div className="percent">{widthValue}%</div>
        </div>
      </div>
    </div>
  );
};

export default Progress;
