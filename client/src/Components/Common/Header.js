import React from "react";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="Header">
      <p className="logo">OJT Management Portal</p>
     <div className="head-side">
      <p className="user">
          Welcome, <span>John Doe</span>{" "}
          <FontAwesomeIcon className="icon" icon={faUserCircle} />
        </p>
        <Link to={"/"}>
          <p>Logout</p>
        </Link>
     </div>
    </header>
  );
};

export default Header;
