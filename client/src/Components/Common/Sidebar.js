import React from "react";
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
  return (
    <div className="Sidebar">
      <ul className="icon-container">
        <li><Link to="/"><FontAwesomeIcon icon={faHouse} /></Link></li>
        <li><Link to="/calendar"><FontAwesomeIcon icon={faCalendar} /></Link></li>
        <li><Link to="/tasks"><FontAwesomeIcon icon={faListCheck} /></Link></li>
        <li><Link to="/files"><FontAwesomeIcon icon={faFile} /></Link></li>
        <li><Link to="/logbook"><FontAwesomeIcon icon={faBookOpen} /></Link></li>
      </ul>

      <ul className="clicked-option">
        <li className="active">Dashboard</li>{" "}
        {/*todo: dynamic setting of the "active" className. responsible for setting the current page.*/}
        <li>Training Sessions</li>
        <li>Progress</li>
        <li>Document Submissions</li>
        <li>Student Progress</li>
        <li>Daily Logbook</li>
      </ul>
    </div>
  );
};

export default Sidebar;
