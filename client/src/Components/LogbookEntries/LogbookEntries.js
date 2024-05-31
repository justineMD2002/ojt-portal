
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../UserManagement/AuthContext";
import ClipLoader from "react-spinners/ClipLoader";
import { LogbookEntriesModel } from "./model/LogbookEntriesModel";

const LogbookEntries = () => {
  const { authUser } = useAuth();
  const [logbookEntries, setLogbookEntries] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    LogbookEntriesModel()(authUser, setLogbookEntries, setLoading);
  }, [authUser]);

  return (
    <div className="LogbookEntries">
      <h1>Logbook Entries</h1>
      <br />
      <hr />
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
        <ul className="logbook-entries">
          {logbookEntries.map((item, i) => (
            <li>
              <div>
                <div className="item-name">
                  Date: {item.timeIn.split("T")[0]}
                </div>
                <div className="item-name">Status: {item.status}</div>
              </div>
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
            </li>
          ))}
        </ul>
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
    </div>
  );
};

export default LogbookEntries;
