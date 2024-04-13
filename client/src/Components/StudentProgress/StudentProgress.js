import React from "react";
import Progress from "./Progress";
import { Link } from "react-router-dom";

const StudentProgress = () => {
  const students = [
    {
      name: "John Doe",
      degreeProgram: "Computer Science",
      company: "CIT-U",
      ojtHrsCompleted: 10,
      logBookProgress: 0,
      frequentlyUtilizedSkill: "Data structures",
      overall: 10,
      status: "Approved",
    },
    {
      name: "John Doe",
      degreeProgram: "Computer Science",
      company: "CIT-U",
      ojtHrsCompleted: 10,
      logBookProgress: 0,
      frequentlyUtilizedSkill: "Data structures",
      overall: 10,
      status: "Pending",
    },
    {
      name: "John Doe",
      degreeProgram: "Computer Science",
      company: "CIT-U",
      ojtHrsCompleted: 10,
      logBookProgress: 0,
      frequentlyUtilizedSkill: "Data structures",
      overall: 10,
      status: "Rejected",
    },
    {
      name: "John Doe",
      degreeProgram: "Computer Science",
      company: "CIT-U",
      ojtHrsCompleted: 10,
      logBookProgress: 0,
      frequentlyUtilizedSkill: "Data structures",
      overall: 10,
      status: "Approved",
    },
    {
      name: "John Doe",
      degreeProgram: "Computer Science",
      company: "CIT-U",
      ojtHrsCompleted: 10,
      logBookProgress: 0,
      frequentlyUtilizedSkill: "Data structures",
      overall: 10,
      status: "Approved",
    },
    {
      name: "John Doe",
      degreeProgram: "Computer Science",
      company: "CIT-U",
      ojtHrsCompleted: 10,
      logBookProgress: 0,
      frequentlyUtilizedSkill: "Data structures",
      overall: 10,
      status: "Pending",
    },
    {
      name: "John Doe",
      degreeProgram: "Computer Science",
      company: "CIT-U",
      ojtHrsCompleted: 10,
      logBookProgress: 0,
      frequentlyUtilizedSkill: "Data structures",
      overall: 10,
      status: "Pending",
    },
    {
      name: "John Doe",
      degreeProgram: "Computer Science",
      company: "CIT-U",
      ojtHrsCompleted: 10,
      logBookProgress: 0,
      frequentlyUtilizedSkill: "Data structures",
      overall: 10,
      status: "Pending",
    },
    {
      name: "John Doe",
      degreeProgram: "Computer Science",
      company: "CIT-U",
      ojtHrsCompleted: 10,
      logBookProgress: 0,
      frequentlyUtilizedSkill: "Data structures",
      overall: 10,
      status: "Pending",
    },
    {
      name: "John Doe",
      degreeProgram: "Computer Science",
      company: "CIT-U",
      ojtHrsCompleted: 10,
      logBookProgress: 0,
      frequentlyUtilizedSkill: "Data structures",
      overall: 10,
      status: "Rejected",
    },
    {
      name: "John Doe",
      degreeProgram: "Computer Science",
      company: "CIT-U",
      ojtHrsCompleted: 10,
      logBookProgress: 0,
      frequentlyUtilizedSkill: "Data structures",
      overall: 10,
      status: "Pending",
    },
    {
      name: "John Doe",
      degreeProgram: "Computer Science",
      company: "CIT-U",
      ojtHrsCompleted: 10,
      logBookProgress: 0,
      frequentlyUtilizedSkill: "Data structures",
      overall: 10,
      status: "Approved",
    },
  ];
  return (
    <div className="StudentProgress">
      <input type="text" className="search" placeholder="Search" />
      <h3>Student Progress Summary</h3>

      <div className="progress-bar-wrapper">
        <Progress name={"Student Logbook Completions"} progress={20} />
        <Progress name={"OJT Completion Hours"} progress={30} />
      </div>

      <h3>Student List</h3>
      <table>
        <thead>
          <th>Student</th>
          <th>Logbook Date</th>
          <th>Division</th>
          <th>Department/Area Assigned</th>
          <th>Designation</th>
          <th>Time In</th>
          <th>Time Out</th>
          <th>Status</th>
          <th></th>
        </thead>
        <tbody>
          {students.map((item, i) => (
            <tr>
              <td>{item.name}</td>
              <td>{item.degreeProgram}</td>
              <td>{item.company}</td>
              <td>{item.ojtHrsCompleted}</td>
              <td>{item.logBookProgress}</td>
              <td>{item.frequentlyUtilizedSkill}</td>
              <td>{item.overall}</td>
              <td>{item.status}</td>
              <td>
                <Link to={"/view-logbook"}>
                  <button>View Log Book</button>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StudentProgress;
