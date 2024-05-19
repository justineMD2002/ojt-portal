import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";

const TraineeEvaluation = () => {
  const trainees = [
    {
      name: "John Doe",
      position: "UI/UX Intern",
      degreeProgram: "Computer Science",
      ojtHrsCompleted: "340 OJT Hours Renderred",
    },
    {
      name: "John Doe",
      position: "UI/UX Intern",
      degreeProgram: "Computer Science",
      ojtHrsCompleted: "340 OJT Hours Renderred",
    },
    {
      name: "John Doe",
      position: "UI/UX Intern",
      degreeProgram: "Computer Science",
      ojtHrsCompleted: "340 OJT Hours Renderred",
    },
    {
      name: "John Doe",
      position: "UI/UX Intern",
      degreeProgram: "Computer Science",
      ojtHrsCompleted: "340 OJT Hours Renderred",
    },
    {
      name: "John Doe",
      position: "UI/UX Intern",
      degreeProgram: "Computer Science",
      ojtHrsCompleted: "340 OJT Hours Renderred",
    },
    {
      name: "John Doe",
      position: "UI/UX Intern",
      degreeProgram: "Computer Science",
      ojtHrsCompleted: "340 OJT Hours Renderred",
    },
    {
      name: "John Doe",
      position: "UI/UX Intern",
      degreeProgram: "Computer Science",
      ojtHrsCompleted: "340 OJT Hours Renderred",
    },
    
  ];
  return (
    <div className="TraineeEvaluation">
      <h1>Trainee Evaluation</h1>

      <table>
      <thead>
          <td className="trainees-count">9 Trainees</td>
          <td></td>
          <td></td>
          <td className="filter-department">Filter by Department</td>
        </thead>
        <tbody>
          {trainees.map((item) => (
            <tr>
              <td>
                <FontAwesomeIcon icon={faUserCircle} style={{ fontSize: "30px", marginRight: '-100px' }} />
              </td>
              <td>
                <div>
                  <div className="item-name">{item.name}</div>
                  <div className="item-position">{item.position}</div>
                </div>
              </td>
              <td>
                <div>
                  <div>{item.degreeProgram}</div>
                  <div className="item-ojtHrs">{item.ojtHrsCompleted}</div>
                </div>
              </td>
              <td>
                <Link to={"/interneval-feedbackform"}>
                  <button>Evaluate Trainee</button>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TraineeEvaluation;
