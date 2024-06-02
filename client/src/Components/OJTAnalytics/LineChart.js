import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Line } from 'react-chartjs-2';
import { useAuth } from '../UserManagement/AuthContext';

const LineChart = () => {
  const [data, setData] = useState([]);
  const { authUser } = useAuth();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://ojt-backend.azurewebsites.net/get-trend-summary",
          {
            headers: {
              Authorization: `Bearer ${authUser.accessToken}`,
            },
          }
        );
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const trendCounts = {
    "Rising Demand": 0,
    "Decreasing Demand": 0,
    "Steady Demand": 0
  };

  data.forEach(item => {
    trendCounts[item.trend]++;
  });

  const chartData = {
    labels: Object.keys(trendCounts),
    datasets: [
      {
        label: 'Trend Summary',
        data: Object.values(trendCounts),
        fill: false,
        borderColor: '#FF0000',
        tension: 0.4
      }
    ]
  };

  return (
    <div>
      <h2>Trend Summary</h2>
      <div style={{ width: '50%', margin: 'auto' }}>
        <Line
          data={chartData}
          options={{
            maintainAspectRatio: false
          }}
        />
      </div>
    </div>
  );
};

export default LineChart;
