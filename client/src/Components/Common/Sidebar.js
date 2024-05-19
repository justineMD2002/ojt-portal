import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  faHouse,
  faCalendar,
  faListCheck,
  faFile,
  faBookOpen,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Sidebar = () => {
  const links = [
    {
      goto: "/student-info",
      name: "Dashboard",
    },
    {
      goto: "/training-plan",
      name: "Training Plan",
    },
    {
      goto: "/logbookSubmissions",
      name: "View Logbook Submissions",
    },
    {
      goto: "/logbook",
      name: "Submit Daily Logbook",
    },
    {
      goto: "/logbook-entries",
      name: "Logbook Entries",
    },
    {
      goto: "/task-monitoring",
      name: "Task Monitoring",
    },
    {
      goto: "/ojt-analytics",
      name: "OJT Analytics",
    },
  ];
  const [currentPageIndex, setCurrentPageIndex] = useState(0); // student progress

  // console.log(currentPageIndex);

  return (
    <div className="Sidebar">
      <ul className="icon-container">
        <li>
          <Link to="/">
            <FontAwesomeIcon icon={faHouse} />
          </Link>
        </li>
        <li>
          <Link to="/calendar">
            <FontAwesomeIcon icon={faCalendar} />
          </Link>
        </li>
        <li>
          <Link to="/tasks">
            <FontAwesomeIcon icon={faListCheck} />
          </Link>
        </li>
        <li>
          <Link to="/files">
            <FontAwesomeIcon icon={faFile} />
          </Link>
        </li>
        <li>
          <Link to="/logbook">
            <FontAwesomeIcon icon={faBookOpen} />
          </Link>
        </li>
      </ul>

      <ul className="clicked-option">
        {links.map((link, i) => (
          <Link to={link.goto} onClick={() => setCurrentPageIndex(i)} key={i}>
            <li className={currentPageIndex === i && "active"}>{link.name}</li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
