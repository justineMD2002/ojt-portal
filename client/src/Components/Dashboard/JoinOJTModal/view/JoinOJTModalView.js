import React from "react";
import { useNavigate } from "react-router-dom";

const JoinOJTModalView = ({
  teamCode,
  handleChange,
  handleJoinTeam,
  error,
  handleLogout,
}) => {
  const navigate = useNavigate();
  return (
    <div className="overlay">
      <div className="modal-container">
        <h2>Join OJT Team</h2>
        <p>
          You are one step away from becoming an official intern. Please enter
          below the code your supervisor sent you in your respective email.
        </p>
        <form>
          <label>
            OJT Team Code:
            <input
              name="teamCode"
              type="text"
              placeholder="Enter code here"
              value={teamCode}
              onChange={handleChange}
            />
          </label>
        </form>

        {error && <p style={{ color: "red" }}>Invalid Team Code</p>}

        <button onClick={handleJoinTeam}>Join Team</button>

        <div className="close">
          <button
            onClick={(e) => {
              handleLogout(e);
              navigate("/");
            }}
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default JoinOJTModalView;
