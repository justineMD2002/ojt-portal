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
        <Link to="/" className="active"><li>Dashboard</li></Link>
        <Link to="/training-sessions"><li>Training Sessions</li></Link>
        <Link to="/progress"><li>Progress</li></Link>
        <Link to="/document-submissions"><li>Document Submissions</li></Link>
        <Link to="/logbook"><li>Daily Logbook</li></Link>
      </ul>
    </div>
  );
};

export default Sidebar;
