import React, { useEffect, useState } from "react";
import { getTrainingPlans } from "../model/TrainingPlanModel";
import { useAuth } from "../../UserManagement/AuthContext";
import TrainingPlanView from "../view/TrainingPlanView";

const TrainingPlanController = () => {
  const [plans, setPlans] = useState([]);
  const { authUser } = useAuth();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getTrainingPlans(authUser);
        console.log(data);
        setPlans(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [authUser]);

  return <TrainingPlanView plans={plans} />;
};

export default TrainingPlanController;
