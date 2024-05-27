import React, { useEffect, useState } from "react";
import { faUserCircle, faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../UserManagement/AuthContext";
import useWindowSize from "../CustomHooks/UseWindowHook";

import HamburgerNavigation from "../ResponsiveUI/HamburgerNavigation";

const Header = () => {
  const navigate = useNavigate();
  const { width } = useWindowSize();
  const { authUser, isLoggedIn, setIsLoggedIn, setAuthUser } = useAuth();

  const [openHamburgerNav, setOpenHamburgerNav] = useState(false);

  const handleHamburgerNavigation = () => {
    console.log(openHamburgerNav);
    setOpenHamburgerNav(true);
  };

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
      {width >= 768 ? (
        <p className="logo">OJT Management Portal</p>
      ) : (
        <FontAwesomeIcon icon={faBars} onClick={handleHamburgerNavigation} />
      )}
      <div className="head-side">
        <p className="user">
          Welcome,{" "}
          <span>
            {authUser != null
              ? authUser.userInfo.firstname + " " + authUser.userInfo.lastname
              : "Guest"}
          </span>{" "}
          <FontAwesomeIcon className="icon" icon={faUserCircle} />
        </p>
        <Link
          onClick={(e) => {
            handleLogout(e);
          }}
          to={"/"}
          className="logout"
        >
          <p>Logout</p>
        </Link>
      </div>

      {openHamburgerNav && (
        <HamburgerNavigation
          isOpen={openHamburgerNav}
          setOpenHamburgerNav={setOpenHamburgerNav}
        />
      )}
    </header>
  );
};

export default Header;
