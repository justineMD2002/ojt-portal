import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Bar } from 'react-chartjs-2';
import { useAuth } from '../UserManagement/AuthContext';

const VerticalBarChart = () => {
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

  const labels = data.map(item => item.skill.skillName);
  const demandChanges = data.map(item => item.demandChange);
  const trendColors = data.map(item => {
    if (item.trend === 'Rising Demand') return '#00FF00';
    else if (item.trend === 'Decreasing Demand') return '#FF0000';
    else return '#0000FF';
  });

  const chartData = {
    labels: labels,
    datasets: [
      {
        label: 'Demand Change',
        backgroundColor: trendColors,
        borderColor: trendColors,
        borderWidth: 1,
        hoverBackgroundColor: trendColors,
        hoverBorderColor: trendColors,
        data: demandChanges
      }
    ]
  };

  return (
    <div>
      <h2>Skill Trend Data</h2>
      <div style={{ width: '80%', margin: 'auto' }}>
        <Bar
          data={chartData}
          options={{
            maintainAspectRatio: false,
            scales: {
              y: {
                beginAtZero: true
              }
            }
          }}
        />
      </div>
    </div>
  );
};

export default VerticalBarChart;
