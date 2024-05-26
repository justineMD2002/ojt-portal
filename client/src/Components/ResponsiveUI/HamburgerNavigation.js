import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../UserManagement/AuthContext";
import {
  faHouse,
  faCalendar,
  faListCheck,
  faFile,
  faBookOpen,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const HamburgerNavigation = ({ isOpen, setOpenHamburgerNav }) => {
  const [currentPageIndex, setCurrentPageIndex] = useState(0);
  const { authUser } = useAuth();
  const [navigated, setNavigated] = useState(false);
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

  const handleNavigation = () => {
    console.log(isOpen);
    setOpenHamburgerNav(false);
  };

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
    <div className="HamburgerNavigation">
      <div className="header">
        <p className="logo">OJT Management Portal</p>
        <FontAwesomeIcon
          icon={faXmark}
          className="xmark"
          onClick={() => setOpenHamburgerNav(false)}
        />
      </div>

      <ul className="clicked-option">
        {links.map((link, i) => (
          <Link
            to={link.goto}
            onClick={() => {
              setCurrentPageIndex(i);
              handleNavigation();
            }}
            key={i}
          >
            <li className={currentPageIndex === i && "active"}>{link.name}</li>
          </Link>
        ))}
      </ul>

      <ul className="icon-container">
        <li
          onClick={() => {
            handleNavigation();
            setCurrentPageIndex(0);
          }}
        >
          <Link to="/student-info">
            <FontAwesomeIcon icon={faHouse} />
          </Link>
        </li>
        <li onClick={handleNavigation}>
          <Link to="/calendar">
            <FontAwesomeIcon icon={faCalendar} />
          </Link>
        </li>
        <li onClick={handleNavigation}>
          <Link to="/tasks">
            <FontAwesomeIcon icon={faListCheck} />
          </Link>
        </li>
        <li onClick={handleNavigation}>
          <Link to="/files">
            <FontAwesomeIcon icon={faFile} />
          </Link>
        </li>
        <li onClick={handleNavigation}>
          <Link to="/logbook">
            <FontAwesomeIcon icon={faBookOpen} />
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default HamburgerNavigation;
