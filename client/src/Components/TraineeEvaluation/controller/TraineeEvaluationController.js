import React, { useEffect, useState } from "react";
import { useAuth } from "../../UserManagement/AuthContext";
import { getAllStudents } from "../model/TraineeEvaluationModel";
import TraineeEvaluationView from "../view/TraineeEvaluationView";

const TraineeEvaulationController = () => {
  const { authUser } = useAuth();
  const [trainees, setTrainees] = useState([]);
  const [loading, setLoading] = useState(true);
  const [openFeedback, setOpenFeedback] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const studentsData = await getAllStudents(authUser);
        setTrainees(studentsData);
        setOpenFeedback(Array(studentsData.length).fill(false));
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [authUser]);

  const handleChange = (index) => {
    setOpenFeedback((prevState) => {
      const updatedState = Array(prevState.length).fill(false);
      updatedState[index] = true;
      return updatedState;
    });
  };

  const handleCloseFeedback = (index) => {
    setOpenFeedback((prevState) => {
      const updatedState = [...prevState];
      updatedState[index] = false;
      return updatedState;
    });
  };

  return (
    <TraineeEvaluationView
      trainees={trainees}
      loading={loading}
      openFeedback={openFeedback}
      handleChange={handleChange}
      handleCloseFeedback={handleCloseFeedback}
    />
  );
};

export default TraineeEvaulationController;
