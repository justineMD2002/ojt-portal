import React, { useEffect } from "react";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../UserManagement/AuthContext";

const Header = () => {
  const navigate = useNavigate();
  const { authUser, isLoggedIn, setIsLoggedIn, setAuthUser } = useAuth();

  useEffect(() => {
    console.log("Is User Logged In:", isLoggedIn);
    console.log("Auth User Data:", authUser);
  }, [isLoggedIn, authUser]);

  const handleLogout = (e) => {
    e.preventDefault();
    setIsLoggedIn(null);
    setAuthUser(null);
    navigate("/");
  };

  return (
    <header className="Header">
      <p className="logo">OJT Management Portal</p>
      <div className="head-side">
        <p className="user">
          Welcome, <span>{authUser != null ? authUser.userInfo.firstname + " " + authUser.userInfo.lastname : "Guest"}</span>{" "}
          <FontAwesomeIcon className="icon" icon={faUserCircle} />
        </p>
        <Link onClick={(e) => { handleLogout(e) }} to={"/"}>
          <p>Logout</p>
        </Link>
      </div>
    </header>
  );
};

export default Header;
