import React, { useEffect, useState } from "react";
import { useAuth } from "../UserManagement/AuthContext";
import axios from "axios";

const OjtTRacking = () => {
  const { authUser } = useAuth();
  const [ojtEntries, setOjtEntries] = useState([]);

  useEffect(() => {
    const fetchOjtRecord = async () => {
      if (authUser && authUser.accessToken) {
        try {
          const response = await axios.get(
            "https://ojt-backend.azurewebsites.net/student/get-all-entries",
            {
              params: {
                email: authUser.userInfo.email,
              },
              headers: {
                Authorization: `Bearer ${authUser.accessToken}`,
              },
            }
          );
          console.log("Response from API:", response.data);
          setOjtEntries(response.data);
        } catch (error) {
          console.error("Error fetching logbook:", error);
        }
      }
    };
    fetchOjtRecord();
  }, [authUser]);

  const handleOnClick = () => {
    window.location.href = "/logbook-entries";
  };

  return (
    <section className="ojt-hrs-tracking">
      <div className="title-container">
        <h3>OJT Hours Tracking</h3>
        <h3>
          Total Rendered Hours:{" "}
          <span>
            {authUser && authUser.ojtRecord
              ? authUser.ojtRecord.renderedHrs
              : "Guest"}
          </span>{" "}
        </h3>
      </div>
      <table>
        <thead>
          <tr>
            <th>Entry ID</th>
            <th>Total Hours</th>
            <th>Remarks</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {ojtEntries.map((entry) => (
            <tr key={entry.entryId}>
              <td>{entry.entryId}</td>
              <td>{entry.totalHrs}</td>
              <td>{entry.remarks || "N/A"}</td>
              <td>{entry.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={handleOnClick}>View Entire Log</button>
      <div className="separator" />
    </section>
  );
};

export default OjtTRacking;
