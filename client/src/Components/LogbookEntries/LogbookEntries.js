import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../UserManagement/AuthContext";
import ClipLoader from "react-spinners/ClipLoader";

const LogbookEntries = () => {
  const { authUser } = useAuth();
  const [logbookEntries, setLogbookEntries] = useState([]);
  const [loading, setLoading] = useState(true);

  const studentLogbookEntries = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        "https://ojt-portal-backend2.azurewebsites.net/student/get-all-entries",
        {
          params: {
            email: authUser.userInfo.email,
          },
          headers: {
            Authorization: `Bearer ${authUser.accessToken}`,
          },
        }
      );

      setLogbookEntries(response.data);
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    studentLogbookEntries();
  }, [authUser]);

  return (
    <div className="LogbookEntries">
      <h1>Logbook Entries</h1>
      <br />
      <hr />
      <table>
        <tbody>
          {loading ? (
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "50vh",
              }}
            >
              <ClipLoader loading={loading} size={150} />
            </div>
          ) : logbookEntries.length > 0 ? (
            logbookEntries.map((item, i) => (
              <div className="container">
                <td>
                  <div>
                    <div className="item-name">
                      Date: {item.timeIn.split("T")[0]}
                    </div>
                    <div className="item-name">Status: {item.status}</div>
                  </div>
                </td>
                <td>
                  <Link
                    key={i}
                    to="/view-logbook"
                    state={{
                      entries: logbookEntries,
                      entryID: item.entryId,
                    }}
                  >
                    <button>View Entry</button>
                  </Link>
                </td>
              </div>
            ))
          ) : (
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "20vh",
                color: "red",
              }}
            >
              <h2>No logbook entries found.</h2>
            </div>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default LogbookEntries;