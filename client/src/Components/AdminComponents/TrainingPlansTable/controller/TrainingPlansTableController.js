import React, { useEffect, useState } from "react";
import { useAuth } from "../../../UserManagement/AuthContext";
import { getTrainingPlans } from "../model/TrainingPlansTableModel";
import TrainingPlansTableView from "../view/TrainingPlansTableView";

const TrainingPlansTableController = () => {
  const { authUser } = useAuth();
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getTrainingPlans(authUser);
        setData(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [authUser]);

  return <TrainingPlansTableView data={data} />;
};

export default TrainingPlansTableController;
