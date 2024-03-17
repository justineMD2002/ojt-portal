import React from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const CircularProgress = ({ percentage }) => {
  // contains the circular bar component

  const value = percentage ? percentage : 0;
  return (
    <div className="Progress">
      <CircularProgressbar value={value} text={`${value}%`} />;
    </div>
  );
};

export default CircularProgress;
