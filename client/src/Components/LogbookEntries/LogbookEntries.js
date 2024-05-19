import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../UserManagement/AuthContext";
import { ClipLoader } from "react-spinners";

const LogbookEntries = () => {
  const { authUser } = useAuth();
  const [logbookEntries, setLogbookEntries] = useState([]);
  const [loading, setLoading] = useState(true);

  const recordNumber = async () => {
    try {
      const response = await axios.get(
        "https://ojt-portal-backend2.azurewebsites.net/student/get-ojt-record",
        {
          params: {
            studentNo: authUser.userInfo.studentID,
          },
          headers: {
            Authorization: `Bearer ${authUser.accessToken}`,
          },
        }
      );

      return response.data;
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const studentLogbookEntries = async (recordNo) => {
    try {
      const response = await axios.get(
        "https://ojt-portal-backend2.azurewebsites.net/student/get-all-entries",
        {
          params: {
            recordNo: recordNo,
          },
          headers: {
            Authorization: `Bearer ${authUser.accessToken}`,
          },
        }
      );

      return response.data;
    } catch (error) {
      console.error("Error:", error);
    }
  };

  useEffect(() => {
    const fetchLogbookEntries = async () => {
      setLoading(true);
      try {
        const record = await recordNumber();
        if (record) {
          const entries = await studentLogbookEntries(record.recordNo);
          if (entries) {
            setLogbookEntries(entries);
          }
          console.log(entries);
        }
      } catch (error) {
        console.error("Error:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchLogbookEntries();
  }, [authUser]);

  return (
    <div className="LogbookEntries">
      <h1>Logbook Entries</h1>

      <table>
        <tbody>
          {loading && logbookEntries.length > 0 ? (
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "50vh",
              }}
            >
              <ClipLoader size={100} loading={loading} />
            </div>
          ) : (
            logbookEntries.map((item) => (
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
                    to={"/view-logbook"}
                    state={{
                      entryID: item.entryId,
                    }}
                  >
                    <button>View Entry</button>
                  </Link>
                </td>
              </div>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default LogbookEntries;
