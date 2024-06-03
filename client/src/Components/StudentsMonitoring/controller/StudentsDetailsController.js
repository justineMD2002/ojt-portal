import React, { useEffect, useState } from "react";
import { StudentsDetailsModel } from "../model/StudentsDetailsModel";
import StudentsDetailsView from "../view/StudentsDetailsView";
import { useAuth } from "../../UserManagement/AuthContext";

const StudentsDetailsController = () => {
  const { authUser } = useAuth();
  const [students, setStudents] = useState([]);

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const data = await StudentsDetailsModel(authUser);
        setStudents(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchStudents();
  }, [authUser]);

  return <StudentsDetailsView students={students} />;
};

export default StudentsDetailsController;
