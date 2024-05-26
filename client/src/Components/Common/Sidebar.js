import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../UserManagement/AuthContext";
import {
  faHouse,
  faCalendar,
  faListCheck,
  faFile,
  faBookOpen,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Sidebar = ({ userRole }) => {
  const [currentPageIndex, setCurrentPageIndex] = useState(0);
  const { authUser } = useAuth();
  const studentLinks = [
    {
      goto: "/student-info",
      name: "Dashboard",
    },
    {
      goto: "/training-plan",
      name: "Training Plan",
    },
    {
      goto: "/logbook-entries",
      name: "Logbook Entries",
    },
    {
      goto: "/logbook",
      name: "Submit Daily Logbook",
    },
  ];

  const supervisorLinks = [
    {
      goto: "/intern-monitoring",
      name: "Intern Monitoring",
    },
    {
      goto: "/task-monitoring",
      name: "Task Monitoring",
    },
    {
      goto: "/ojt-analytics",
      name: "OJT Analytics",
    },
    {
      goto: "/logbookSubmissions",
      name: "View Logbook Submissions",
    },
    {
      goto: "/submitted-logbook",
      name: "View Logbook Submissions",
    },
    {
      goto: "/trainee-evaluation",
      name: "Evaluate Trainee",
    },
  ];

  const links =
    authUser && authUser.accountType === "ROLE_STUDENT"
      ? studentLinks
      : supervisorLinks;

  useEffect(() => {
    setCurrentPageIndex(
      links.findIndex((link) => link.goto === window.location.pathname)
    );
  }, [links]);

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
        {links.map((link, i) => {
          return (
            <Link to={link.goto} onClick={() => setCurrentPageIndex(i)} key={i}>
              <li className={currentPageIndex === i && "active"}>
                {link.name}
              </li>
            </Link>
          );
        })}
      </ul>
    </div>
  );
};

export default Sidebar;
