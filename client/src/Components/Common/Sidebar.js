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
      url: "/student-info",
      name: "Dashboard",
    },
    {
      url: "/training-sessions",
      name: "Training Sessions",
    },
    {
      url: "/progress",
      name: "Progress",
    },
    {
      url: "/document-submission",
      name: "Document Submissions",
    },
    {
      url: "/studentProgress",
      name: "Student Progress",
    },
    {
      url: "/logbook",
      name: "Daily Logbook",
    },
  ];
  const [currentPageIndex, setCurrentPageIndex] = useState(4); // student progress

  console.log(currentPageIndex);

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
          <Link to={link.url} onClick={() => setCurrentPageIndex(i)} key={i}>
            <li className={currentPageIndex === i && "active"}>{link.name}</li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
