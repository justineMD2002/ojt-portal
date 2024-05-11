import React from "react";

const InternEvalFeedbackForm = () => {
  

  const attendance = ["Excellent", "Very Good", "Good", "Poor"];
  const communication = ["Excellent", "Very Good", "Good", "Poor"];
  const qualOfWork = ["Excellent", "Very Good", "Good", "Poor"];
  const probSolving = ["Excellent", "Very Good", "Good", "Poor"];

  return (
    <div className="InternEvalFeedbackForm">
     <div className="header-title">
     <h2>Intern Evaluation Feedback Form</h2>
     </div>
     <div className="intern-info">
        <table>
            <tbody>
            <tr>
                <td>
                <img
                    src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
                    alt=""
                    style={{ width: "50px", height: "50px", marginRight: "10px" }}
                />
                </td>
                <td>
                <div style={{ fontSize: '18px' }}>
                    <div>John Doe</div>
                    <div>Job Position: Software Engineer Intern</div>
                    <div>Department:</div>
                </div>
                </td>
            </tr>
            </tbody>
        </table>
        </div>
        <table style={{ width: '100%'}}>
        <div className="filter-options container">
        <h3>Evaluation</h3>
        <td className="td1">
            <div className="filters">
                <div className="select-container">
                    <div className="dropdown-column">
                        <div className="td">
                            <div className="eval-info">Attendance</div>
                            <select name="" id="">
                            {attendance.map((skill, i) => (
                                <option value="">{skill}</option>
                            ))}
                            </select>
                        </div>
                        <div>
                            <div className="eval-info">Communication</div>
                            <select name="" id="">
                            {communication.map((skill, i) => (
                                <option value="">{skill}</option>
                            ))}
                            </select>
                        </div>
                    </div>
                </div>
            </div>
        </td>
        <td>
            <div className="filters">
                <div className="select-container">
                    <div className="dropdown-column">
                        <div className="td">
                            <div className="eval-info">Quality of Work</div>
                            <select name="" id="">
                            {qualOfWork.map((skill, i) => (
                                <option value="">{skill}</option>
                            ))}
                            </select>
                        </div>
                        <div>
                            <div className="eval-info">Problem Solving</div>
                            <select name="" id="">
                            {probSolving.map((skill, i) => (
                                <option value="">{skill}</option>
                            ))}
                            </select>
                        </div>
                    </div>
                </div>
            </div>
        </td>
        </div>
        </table>

        <div className="filter-options container">
            <h3>Comment</h3>
            <textarea
                rows={6} 
                cols={40} 
                placeholder="Enter your comment here..." 
                style={{ width: '100%'}}
            ></textarea>
        </div>
        <button>Submit</button>
    </div>
  );
};

export default InternEvalFeedbackForm;
