import React from "react";
import { Link } from "react-router-dom";

const LogbookEntries = () => {
  const trainees = [
    {
      date: "2024-05-15",
      status: "Pending",
    },
    {
      date: "2024-05-15",
      status: "Pending",
    },
    {
      date: "2024-05-15",
      status: "Pending",
    },
    {
      date: "2024-05-15",
      status: "Pending",
    },
    
  ];
  return (
    <div className="LogbookEntries">
      <h1>Logbook Entries</h1>

      <table>
        <tbody>
          {trainees.map((item) => (
            <div className="container">
                <td>
                <div>
                  <div className="item-name">Date: {item.date}</div>
                  <div className="item-name">Status: {item.status}</div>
                </div>
              </td>
              <td>
                <Link to={" "}>
                  <button>View Entry</button>
                </Link>
              </td>
            </div>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default LogbookEntries;
