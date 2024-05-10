import React from "react";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const SubmittedInfo = () => {
  return (
    <section className="submitted-info-wrapper">
      <div className="rectangle-style">
        <h1 style={{ marginBottom: '2%' }}>Pending Approval</h1>
        <ul className="submitted-info">
          <li className="list-item-style">
            <div className="colored-square-style" style={{ backgroundColor: '#660000' }}></div> 
            <div>Review logbook submission</div>
            <div>Finished Android</div>
            <button className="rectangle-button-style">Approve</button> 
            <button className="rectangle-button-style">Reject</button> 
            <div>John Quinnvic Taboada</div>
            <div><FontAwesomeIcon className="icon icon-style" icon={faUserCircle} /></div>
          </li>
        </ul>
        <ul className="submitted-info">
          <li className="list-item-style">
            <div className="colored-square-style" style={{ backgroundColor: '#660000' }}></div> 
            <div>Review logbook submission</div>
            <div>Finished Android</div>
            <button className="rectangle-button-style">Approve</button> 
            <button className="rectangle-button-style">Reject</button> 
            <div>John Quinnvic Taboada</div>
            <div><FontAwesomeIcon className="icon icon-style" icon={faUserCircle} /></div>
          </li>
        </ul>
        <ul className="submitted-info">
          <li className="list-item-style">
            <div className="colored-square-style" style={{ backgroundColor: '#660000' }}></div> 
            <div>Review logbook submission</div>
            <div>Finished Android</div>
            <button className="rectangle-button-style">Approve</button> 
            <button className="rectangle-button-style">Reject</button> 
            <div>John Quinnvic Taboada</div>
            <div><FontAwesomeIcon className="icon icon-style" icon={faUserCircle} /></div>
          </li>
        </ul>
      </div>

      <div className="rectangle-style">
        <h1 style={{ marginBottom: '2%' }}>Approved</h1>
        <ul className="submitted-info">
          <li className="list-item-style">
            <div className="colored-square-style" style={{ backgroundColor: '#286E34' }}></div> 
            <div>Review logbook submission</div>
            <div>Finished Android</div>
            <button className="rec-button-style">View Feedback</button> 
            <div>John Quinnvic Taboada</div>
            <div><FontAwesomeIcon className="icon icon-style" icon={faUserCircle} /></div>
          </li>
        </ul>
        <ul className="submitted-info">
          <li className="list-item-style">
            <div className="colored-square-style" style={{ backgroundColor: '#286E34' }}></div> 
            <div>Review logbook submission</div>
            <div>Finished Android</div>
            <button className="rec-button-style">View Feedback</button> 
            <div>John Quinnvic Taboada</div>
            <div><FontAwesomeIcon className="icon icon-style" icon={faUserCircle} /></div>
          </li>
        </ul>
        <ul className="submitted-info">
          <li className="list-item-style">
            <div className="colored-square-style" style={{ backgroundColor: '#286E34' }}></div> 
            <div>Review logbook submission</div>
            <div>Finished Android</div>
            <button className="rec-button-style">View Feedback</button> 
            <div>John Quinnvic Taboada</div>
            <div><FontAwesomeIcon className="icon icon-style" icon={faUserCircle} /></div>
          </li>
        </ul>
      </div>
      <div className="rectangle-style">
        <h1 style={{ marginBottom: '2%' }}>Rejected</h1>
        <ul className="submitted-info">
          <li className="list-item-style">
            <div className="colored-square-style" style={{ backgroundColor: '#FF4A4A' }}></div> 
            <div>Review logbook submission</div>
            <div>Finished Android</div>
            <button className="rec-button-style">View Feedback</button> 
            <div>John Quinnvic Taboada</div>
            <div><FontAwesomeIcon className="icon icon-style" icon={faUserCircle} /></div>
          </li>
        </ul>
        <ul className="submitted-info">
          <li className="list-item-style">
            <div className="colored-square-style" style={{ backgroundColor: '#FF4A4A' }}></div> 
            <div>Review logbook submission</div>
            <div>Finished Android</div>
            <button className="rec-button-style">View Feedback</button> 
            <div>John Quinnvic Taboada</div>
            <div><FontAwesomeIcon className="icon icon-style" icon={faUserCircle} /></div>
          </li>
        </ul>
        <ul className="submitted-info">
          <li className="list-item-style">
            <div className="colored-square-style" style={{ backgroundColor: '#FF4A4A' }}></div> 
            <div>Review logbook submission</div>
            <div>Finished Android</div>
            <button className="rec-button-style">View Feedback</button> 
            <div>John Quinnvic Taboada</div>
            <div><FontAwesomeIcon className="icon icon-style" icon={faUserCircle} /></div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default SubmittedInfo;
