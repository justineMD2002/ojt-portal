import React, { useState, useEffect } from "react";
import { getAllOJTRecords } from "../model/StudentDataModel";
import { useAuth } from "../../UserManagement/AuthContext";
import StudentDataView from "../view/StudentDataView";

const OJTRecordsController = () => {
  const { authUser } = useAuth();
  const [students, setStudents] = useState([]);
  const [formOpen, setFormOpen] = useState(false);

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

  const handleFormOpen = () => {
    setFormOpen(true);
  };

  const handleFormClose = () => {
    setFormOpen(false);
  };

  return (
    <StudentDataView
      students={students}
      formOpen={formOpen}
      handleFormOpen={handleFormOpen}
      handleFormClose={handleFormClose}
    />
  );
};

export default OJTRecordsController;
