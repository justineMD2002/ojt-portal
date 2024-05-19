import Progress from "./Progress";
import { Link } from "react-router-dom";
import { useAuth } from "../UserManagement/AuthContext";
import { useState, useEffect } from "react";
import axios from "axios";

const StudentProgress = () => {
  const { authUser } = useAuth();
  const [studentID] = useState(authUser.studentID);
  const [recordNo, setRecordNo] = useState(null);
  const [logbookEntries, setLogbookEntries] = useState([]);

  const recordNumber = async () => {
    try {
      console.log("Student ID:", studentID);
      const response = await axios.get(
        "https://ojt-portal-backend2.azurewebsites.net/student/get-ojt-record",
        {
          params: {
            studentNo: studentID,
          },
        }
      );

      console.log("Record Number Response:", response.data);
      return response.data;
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const studentLogbookEntries = async () => {
    try {
      const response = await axios.get(
        "https://ojt-portal-backend2.azurewebsites.net/student/get-all-entries",
        {
          params: {
            recordNo: recordNo,
          },
        }
      );

      return response.data;
    } catch (error) {
      console.error("Error:", error);
    }
  };

  useEffect(() => {
    const fetchLogbookEntries = async () => {
      try {
        const record = await recordNumber();
        console.log("Record Number:", record);
        if (record) {
          setRecordNo(record);

          const entries = await studentLogbookEntries();
          if (entries) {
            setLogbookEntries(entries);
          }
        }
      } catch (error) {}
    };

    fetchLogbookEntries();
  }, []);

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
          {logbookEntries.map((item, i) => (
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
