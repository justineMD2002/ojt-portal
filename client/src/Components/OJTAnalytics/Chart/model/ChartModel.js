import axios from "axios";

export const trendCountsModel = {
  "Rising Demand": 0,
  "Decreasing Demand": 0,
  "Steady Demand": 0,
};

export const getTrendSummary = async (accessToken) => {
  try {
    const response = await axios.get(
      "https://ojt-backend.azurewebsites.net/get-trend-summary",
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );

    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};