import React, { useEffect, useState } from "react";
import {
  trainingFormData,
  fetchTrainingPlans,
  getAllStudents,
} from "../model/TaskMonitoringModel";
import { useAuth } from "../../../UserManagement/AuthContext";
import axios from "axios";
import TaskMonitoringView from "../view/TaskMonitoringView";

const TaskMonitoringController = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState(trainingFormData);
  const [selectedTrainingPlanId, setSelectedTrainingPlanId] = useState(null);
  const [tp, setTp] = useState([]);
  const { authUser } = useAuth();
  const [students, setStudents] = useState([]);

  useEffect(() => {
    const fetchTrainingPlansData = async () => {
      try {
        const allTrainingPlans = await fetchTrainingPlans("all", authUser);
        setTp(allTrainingPlans);
      } catch (error) {
        console.error("Error fetching training plans:", error);
      }
    };

    const fetchAllStudentsData = async () => {
      try {
        const studentsData = await getAllStudents(authUser);
        setStudents(studentsData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchTrainingPlansData();
    fetchAllStudentsData();
  }, [authUser]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleCreateTrainingPlan = async () => {
    try {
      const response = await axios.post(
        "https://ojt-backend.azurewebsites.net/supervisor/add-training-plan",
        formData,
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            Authorization: `Bearer ${authUser.accessToken}`,
          },
        }
      );
      alert(response.data);
      window.location.reload();
      setIsModalOpen(false);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleAssignClick = async (studentEmail) => {
    assignTrainingPlan(studentEmail, selectedTrainingPlanId);
  };

  const handleDropdownChange = (e) => {
    setSelectedTrainingPlanId(e.target.value);
  };

  const assignTrainingPlan = async (studentEmail, trainingPlanID) => {
    try {
      const requestBody = {
        trainingPlanID: trainingPlanID,
        internEmails: [studentEmail],
      };

      const response = await axios.post(
        "https://ojt-backend.azurewebsites.net/supervisor/assign-training-plan",
        JSON.stringify(requestBody),
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${authUser.accessToken}`,
          },
        }
      );

      console.log(response.data);
      alert(response.data);
    } catch (error) {
      console.error("Error assigning training plan:", error);
    }
  };

  return (
    <TaskMonitoringView
      tp={tp}
      students={students}
      handleAssignClick={handleAssignClick}
      handleCreateTrainingPlan={handleCreateTrainingPlan}
      handleInputChange={handleInputChange}
      formData={formData}
      setIsModalOpen={setIsModalOpen}
      isModalOpen={isModalOpen}
      handleDropdownChange={handleDropdownChange}
    />
  );
};

export default TaskMonitoringController;
