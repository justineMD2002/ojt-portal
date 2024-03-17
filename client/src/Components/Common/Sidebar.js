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
        <li><Link to="/" className="active">Dashboard</Link></li>
        <li><Link to="/training-sessions">Training Sessions</Link></li>
        <li><Link to="/progress">Progress</Link></li>
        <li><Link to="/document-submissions">Document Submissions</Link></li>
        <li><Link to="/logbook">Daily Logbook</Link></li>
      </ul>
    </div>
  );
};

export default Sidebar;
