import React from "react";
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
        <li>
          <FontAwesomeIcon icon={faHouse} />
        </li>
        <li>
          <FontAwesomeIcon icon={faCalendar} />
        </li>{" "}
        <li>
          <FontAwesomeIcon icon={faListCheck} />
        </li>
        <li>
          <FontAwesomeIcon icon={faFile} />
        </li>
        <li>
          <FontAwesomeIcon icon={faBookOpen} />
        </li>
      </ul>

      {/*todo: hide/unhide option depending on the clicked icon*/}
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
