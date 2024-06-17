import React, { useEffect, useState } from "react";
import { useAuth } from "../../../UserManagement/AuthContext";
import { trendCountsModel, getTrendSummary } from "../model/ChartModel";
import LineChartView from "../view/LineChartView";

const LineChartController = () => {
  const [trendCounts] = useState(trendCountsModel);
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

  data.forEach((item) => {
    trendCounts[item.trend]++;
  });

  const chartData = {
    labels: Object.keys(trendCounts),
    datasets: [
      {
        label: "Trend Summary",
        data: Object.values(trendCounts),
        fill: false,
        borderColor: "#FF0000",
        tension: 0.4,
      },
    ],
  };

  return <LineChartView chartData={chartData} />;
};

export default LineChartController;
