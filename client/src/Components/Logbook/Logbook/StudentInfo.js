import React from "react";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const StudentInfo = () => {
  const rectangleStyle = {
    border: '2px solid white',
    padding: '20px',
    margin: '20px 0',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' 
  };

  const listItemStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    marginRight: '-650px'
  };

  const redSquareStyle = {
    width: '20px',
    height: '20px',
    backgroundColor: '#660000',
    borderRadius: '5px', 
    marginRight: '-60px'
  };
  
  const greenSquareStyle = {
    width: '20px',
    height: '20px',
    backgroundColor: '#286E34',
    borderRadius: '5px', 
    marginRight: '-60px'
  };

  const pinkSquareStyle = {
    width: '20px',
    height: '20px',
    backgroundColor: '#FF4A4A',
    borderRadius: '5px', 
    marginRight: '-60px'
  };

  const rectangleButtonStyle = {
    width: '150px',
    height: '30px',
    backgroundColor: 'transparent',
    border: '2px solid black',
    textAlign: 'center',
    lineHeight: '30px',
    cursor: 'default',
  };

  const recButtonStyle = {
    width: '370px',
    height: '30px',
    backgroundColor: '#C8EDFD',
    border: '2px solid #C8EDFD',
    textAlign: 'center',
    lineHeight: '30px',
    cursor: 'default',
    borderRadius: '20px', 
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
  };

  const iconStyle = {
    fontSize: '24px', 
    color: '#000', 
  };

  return (
    <section className="student-info-wrapper">
      <div style={rectangleStyle}>
        <h1 style={{ marginBottom: '20px' }}>Pending Approval</h1>
        <ul className="student-info">
          <li style={listItemStyle}>
            <div style={redSquareStyle}></div> {/* Red square */}
            <div>Review logbook submission</div>
            <div>Finished Android</div>
            <div style={rectangleButtonStyle}>Approve</div> {/* Rectangle for Approve */}
            <div style={rectangleButtonStyle}>Reject</div> {/* Rectangle for Reject */}
            <div>John Quinnvic Taboada</div>
            <div><FontAwesomeIcon className="icon" icon={faUserCircle} style={iconStyle} /></div>
          </li>
        </ul>
        <ul className="student-info">
          <li style={listItemStyle}>
            <div style={redSquareStyle}></div> {/* Red square */}
            <div>Review logbook submission</div>
            <div>Finished Android</div>
            <div style={rectangleButtonStyle}>Approve</div> {/* Rectangle for Approve */}
            <div style={rectangleButtonStyle}>Reject</div> {/* Rectangle for Reject */}
            <div>John Quinnvic Taboada</div>
            <div><FontAwesomeIcon className="icon" icon={faUserCircle} style={iconStyle} /></div>
          </li>
        </ul>
        <ul className="student-info">
          <li style={listItemStyle}>
            <div style={redSquareStyle}></div> {/* Red square */}
            <div>Review logbook submission</div>
            <div>Finished Android</div>
            <div style={rectangleButtonStyle}>Approve</div> {/* Rectangle for Approve */}
            <div style={rectangleButtonStyle}>Reject</div> {/* Rectangle for Reject */}
            <div>John Quinnvic Taboada</div>
            <div><FontAwesomeIcon className="icon" icon={faUserCircle} style={iconStyle} /></div>
          </li>
        </ul>
      </div>

      {/* Another Rectangle */}
      <div style={rectangleStyle}>
        <h1 style={{ marginBottom: '20px' }}>Approved</h1>
        <ul className="student-info">
          <li style={listItemStyle}>
            <div style={greenSquareStyle}></div> {/* Red square */}
            <div>Review logbook submission</div>
            <div>Finished Android</div>
            <div style={recButtonStyle}>View Feedback</div> {/* Rectangle for Approve */}
            <div>John Quinnvic Taboada</div>
            <div><FontAwesomeIcon className="icon" icon={faUserCircle} style={iconStyle} /></div>
          </li>
        </ul>
        <ul className="student-info">
          <li style={listItemStyle}>
            <div style={greenSquareStyle}></div> {/* Red square */}
            <div>Review logbook submission</div>
            <div>Finished Android</div>
            <div style={recButtonStyle}>View Feedback</div> {/* Rectangle for Approve */}
            <div>John Quinnvic Taboada</div>
            <div><FontAwesomeIcon className="icon" icon={faUserCircle} style={iconStyle} /></div>
          </li>
        </ul>
        <ul className="student-info">
          <li style={listItemStyle}>
            <div style={greenSquareStyle}></div> {/* Red square */}
            <div>Review logbook submission</div>
            <div>Finished Android</div>
            <div style={recButtonStyle}>View Feedback</div> {/* Rectangle for Approve */}
            <div>John Quinnvic Taboada</div>
            <div><FontAwesomeIcon className="icon" icon={faUserCircle} style={iconStyle} /></div>
          </li>
        </ul>
      </div>

      {/* Another Rectangle */}
      <div style={rectangleStyle}>
        <h1 style={{ marginBottom: '20px' }}>Rejected</h1>
        <ul className="student-info">
          <li style={listItemStyle}>
            <div style={pinkSquareStyle}></div> {/* Red square */}
            <div>Review logbook submission</div>
            <div>Finished Android</div>
            <div style={recButtonStyle}>View Feedback</div> {/* Rectangle for Approve */}
            <div>John Quinnvic Taboada</div>
            <div><FontAwesomeIcon className="icon" icon={faUserCircle} style={iconStyle} /></div>
          </li>
        </ul>
        <ul className="student-info">
          <li style={listItemStyle}>
            <div style={pinkSquareStyle}></div> {/* Red square */}
            <div>Review logbook submission</div>
            <div>Finished Android</div>
            <div style={recButtonStyle}>View Feedback</div> {/* Rectangle for Approve */}
            <div>John Quinnvic Taboada</div>
            <div><FontAwesomeIcon className="icon" icon={faUserCircle} style={iconStyle} /></div>
          </li>
        </ul>
        <ul className="student-info">
          <li style={listItemStyle}>
            <div style={pinkSquareStyle}></div> {/* Red square */}
            <div>Review logbook submission</div>
            <div>Finished Android</div>
            <div style={recButtonStyle}>View Feedback</div> {/* Rectangle for Approve */}
            <div>John Quinnvic Taboada</div>
            <div><FontAwesomeIcon className="icon" icon={faUserCircle} style={iconStyle} /></div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default StudentInfo;
