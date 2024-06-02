import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
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
  const navigate = useNavigate();
  const [currentPageIndex, setCurrentPageIndex] = useState(0);
  const { authUser, isLoggedIn, setIsLoggedIn, setAuthUser } = useAuth();

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
      goto: "/intern-monitoring",
      name: "Intern Monitoring",
    },
    {
      goto: "/task-monitoring",
      name: "Task Monitoring",
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

  const deanLinks = [
    {
      goto: "/admin-dashboard",
      name: "Admin Dashboard",
    },
    {
      goto: "/student-monitoring",
      name: "Student Monitoring",
    },
    {
      goto: "/ojt-analytics",
      name: "OJT Analytics",
    }
  ];

  const adminLinks = [
    {
      goto: "/users",
      name: "Users",
    },
    {
      goto: "/companies",
      name: "Companies",
    },
  ];

  const handleNavigation = () => {
    console.log(isOpen);
    setOpenHamburgerNav(false);
  };

  const handleLogout = (e) => {
    e.preventDefault();
    setIsLoggedIn(null);
    setAuthUser(null);
    navigate("/");
  };

  const links = 
  authUser && authUser.accountType === "ROLE_STUDENT"
    ? studentLinks
    : authUser && authUser.accountType === "ROLE_SUPERVISOR"
    ? supervisorLinks
    : authUser && authUser.userInfo.accountType === "ROLE_CHAIR"
    ? deanLinks
    : authUser && authUser.userInfo.accountType === "ROLE_ADMIN"
    ? adminLinks
    : [];

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
        <Link
          onClick={(e) => {
            handleLogout(e);
          }}
          to={"/"}
          className="mlogout"
        >
          <p>Logout</p>
        </Link>
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
