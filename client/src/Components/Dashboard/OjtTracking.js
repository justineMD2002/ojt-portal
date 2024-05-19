import React, { useEffect } from "react";
import { useAuth } from "../UserManagement/AuthContext";
import axios from 'axios';

const OjtTRacking = () => {
  const { authUser } = useAuth();
  
  useEffect(() => {
    const fetchOjtRecord = async() => {
      try {
        const response = await axios.get('https://ojt-portal-backend2.azurewebsites.net/student/get-ojt-record',{
          params: {
            studentNo: authUser.studentInfo.studentID
          },
          headers: {
            Authorization: `Bearer ${authUser.accessToken}`
          }
        });
        console.log('Response from API:', response.data);
      } catch (error) {
        console.error('Error fetching ojt record:', error);
      } 
    }
    fetchOjtRecord();
  },[]);

  return (
    <section className="ojt-hrs-tracking">
      <div className="title-container">
        <h3>OJT Hours Tracking</h3>
        <h3>
          Total Rendered Hours: <span>20 hrs</span>
        </h3>
      </div>
      <table>
        <thead>
          <th>Date</th>
          <th>Start Time</th>
          <th>End Time</th>
          <th>Total Hours</th>
          <th>Task Description</th>
          <th>Supervisor Comments</th>
        </thead>
        <tbody>
          <tr>
            <td>2022-05-20</td>
            <td>9:00 AM</td>
            <td>5:00 PM</td>
            <td>8 hours</td>
            <td>Developed new feature</td>
            <td>Good job!</td>
          </tr>
          <tr>
            <td>2022-05-20</td>
            <td>9:00 AM</td>
            <td>5:00 PM</td>
            <td>8 hours</td>
            <td>Developed new feature</td>
            <td>Good job!</td>
          </tr>
        </tbody>
      </table>
      <button>View Entire Log</button>
      <div className="separator" />
    </section>
  );
};

export default OjtTRacking;
