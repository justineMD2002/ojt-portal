import React from "react";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header = () => {
  return (
    <header className="Header">
      <p className="logo">OJT Management Portal</p>
      <p className="user">
        Welcome, <span>John Doe</span>{" "}
        <FontAwesomeIcon className="icon" icon={faUserCircle} />
      </p>
    </header>
  );
};

export default Header;
