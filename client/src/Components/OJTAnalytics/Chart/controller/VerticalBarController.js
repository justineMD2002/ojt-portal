import React, { useEffect, useState } from "react";
import { useAuth } from "../../../UserManagement/AuthContext";
import { getTrendSummary } from "../model/ChartModel";
import VerticalBarView from "../view/VerticalBarView";

const VerticalBarController = () => {
  const [data, setData] = useState([]);
  const { authUser } = useAuth();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getTrendSummary(authUser.accessToken);
        setData(response);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [authUser]);

  const labels = data.map((item) => item.skill.skillName);
  const demandChanges = data.map((item) => item.demandChange);
  const trendColors = data.map((item) => {
    if (item.trend === "Rising Demand") return "#00FF00";
    else if (item.trend === "Decreasing Demand") return "#FF0000";
    else return "#0000FF";
  });

  const chartData = {
    labels: labels,
    datasets: [
      {
        label: "Demand Change",
        backgroundColor: trendColors,
        borderColor: trendColors,
        borderWidth: 1,
        hoverBackgroundColor: trendColors,
        hoverBorderColor: trendColors,
        data: demandChanges,
      },
    ],
  };

  return <VerticalBarView chartData={chartData} />;
};

export default VerticalBarController;
