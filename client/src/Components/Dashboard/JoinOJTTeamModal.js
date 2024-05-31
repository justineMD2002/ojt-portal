import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import qs from "qs";

const JoinOJTTeamModal = ({
  handleLogout,
  accessToken,
  setIsOfficialIntern,
}) => {
  const navigate = useNavigate();
  const [teamCode, setTeamCode] = useState("");
  const [error, setError] = useState(false);

  const handleChange = (e) => {
    setTeamCode(e.target.value);
  };

  const handleJoinTeam = async () => {
    try {
      const response = await axios.put(
        "https://ojt-backend.azurewebsites.net/student/join-team",
        qs.stringify({ teamCode: teamCode }),
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );

      console.log(response.data);
      if (response.data === 1) {
        setError(false);
        setIsOfficialIntern(true);
      } else {
        setError(true);
      }
    } catch (error) {
      alert("Invalid Team Code");
      console.log(error);
    }
  };

  return (
    <div className="overlay">
      <div className="modal-container">
        <h2>Join OJT Team</h2>
        <p>
          You are one step away from becoming an official intern. Please enter
          below the code your supervisor sent you in your respective email.
        </p>

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

export default JoinOJTTeamModal;
