import React, { useState, useEffect } from "react";
import { getAllOJTRecords } from "../model/OJTRecordsModel";
import OJTRecordsView from "../view/OJTRecordsView";
import { useAuth } from "../../../UserManagement/AuthContext";

const OJTRecordsController = () => {
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

  return <OJTRecordsView students={students} />;
};

export default OJTRecordsController;
