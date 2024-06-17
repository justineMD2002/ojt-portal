import React, { useState, useEffect } from "react";
import { getAllOJTRecords } from "../model/StudentDataModel";
import { useAuth } from "../../UserManagement/AuthContext";
import StudentDataView from "../view/StudentDataView";

const StudentDataController = () => {
  const { authUser } = useAuth();
  const [students, setStudents] = useState([]);

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const data = await getAllOJTRecords(authUser.accessToken);
        setStudents(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchStudents();
  }, [authUser]);

  return <StudentDataView students={students} />;
};

export default StudentDataController;
