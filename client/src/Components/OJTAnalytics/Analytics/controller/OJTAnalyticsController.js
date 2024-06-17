import React, { useState } from "react";
import { skillFilterModel } from "../model/OJTAnalyticsModel";
import { useAuth } from "../../../UserManagement/AuthContext";
import OJTAnalyticsView from "../view/OJTAnalyticsView";
import axios from "axios";
import { Chart, registerables } from "chart.js";

Chart.register(...registerables);

const OJTAnalyticsController = () => {
  const [skillFilter] = useState(skillFilterModel);
  const [selectedSkill, setSelectedSkill] = useState("");
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");
  const [apiData, setApiData] = useState(null);
  const { authUser } = useAuth();

  const handleSkillChange = (e) => {
    setSelectedSkill(e.target.value);
  };

  const handleFromDateChange = (e) => {
    setFromDate(e.target.value);
  };

  const handleToDateChange = (e) => {
    setToDate(e.target.value);
  };

  const handleClick = async () => {
    const formData = {
      skill: selectedSkill,
      startDate: fromDate,
      endDate: toDate,
    };

    console.log("Form Data:", formData);

    try {
      const response = await axios.post(
        "https://ojt-backend.azurewebsites.net/get-skill-trend-report",
        formData,
        {
          headers: {
            Authorization: `Bearer ${authUser.accessToken}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log("Response:", response.data);
      setApiData(response.data);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <OJTAnalyticsView
      skillFilter={skillFilter}
      selectedSkill={selectedSkill}
      handleSkillChange={handleSkillChange}
      handleFromDateChange={handleFromDateChange}
      handleToDateChange={handleToDateChange}
      apiData={apiData}
      handleClick={handleClick}
    />
  );
};

export default OJTAnalyticsController;
