import React, { useState } from "react";
import JoinOJTModalView from "../view/JoinOJTModalView";
import axios from "axios";
import qs from "qs";
import { JoinOJTModalControllerModel } from "../model/JoinOJTModalControllerModel";

const JoinOJTModalController = ({
  handleLogout,
  accessToken,
  setIsOfficialIntern,
}) => {
  const [teamCode, setTeamCode] = useState(
    JoinOJTModalControllerModel.teamCode
  );
  const [error, setError] = useState(JoinOJTModalControllerModel.error);

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
    <JoinOJTModalView
      teamCode={teamCode}
      handleChange={handleChange}
      handleJoinTeam={handleJoinTeam}
      error={error}
      handleLogout={handleLogout}
    />
  );
};

export default JoinOJTModalController;
