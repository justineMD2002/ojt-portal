  import React, { useState, useEffect } from "react";
  import Modal from "react-modal";
  import TaskCard from "./TaskCard";
  import { useAuth } from "../UserManagement/AuthContext";
  import axios from "axios";

  const TaskMonitoring = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [formData, setFormData] = useState({
      title: "",
      description: "",
      startDate: "",
      endDate: "",
    });
    const [tp, setTp] = useState([]);
    const {authUser} = useAuth();
    const [students, setStudents] = useState([]);
    
    const fetchTrainingPlans = async (studentEmail) => {
      try {
        const response = await axios.get(
          "https://ojt-portal-backend2.azurewebsites.net/get-training-plans",
          {
            params: {
              studentEmail: studentEmail,
            },
            headers: {
              Authorization: `Bearer ${authUser.accessToken}`,
            },
          }
        );
        return response.data;
      } catch (error) {
        console.error(`Error fetching training plans for ${studentEmail}:`, error);
        return null;
      }
    };

    useEffect(() => {
      const fetchData = async () => {
        try {
          const allTrainingPlans = await fetchTrainingPlans("all"); 
          setTp(allTrainingPlans);
        } catch (error) {
          console.error("Error fetching training plans:", error);
        }
      };
    
      fetchData();
    }, [authUser]);
    

    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get(
            "https://ojt-portal-backend2.azurewebsites.net/company/get-all-students",
            {
              params: {
                companyName: authUser.company_name,
              },
              headers: {
                Authorization: `Bearer ${authUser.accessToken}`,
              },
            }
          );
          setStudents(response.data);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      };

      fetchData();
    }, [authUser]);



    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setFormData({
        ...formData,
        [name]: value,
      });
    };

    const handleCreateTrainingPlan = async() => {
      try {
        const response = await axios.post(
          'https://ojt-portal-backend2.azurewebsites.net/supervisor/add-training-plan',
          formData,
          {
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded',
              Authorization: `Bearer ${authUser.accessToken}`
            }
          }
        );
        alert(response.data);
        window.location.reload();
        setIsModalOpen(false);
      }catch(error) {
        console.error("Error fetching data:", error);
      }
    };

    const handleAssignClick = async (studentEmail) => { 
      const selectedTrainingPlanId = document.getElementById('trainingPlanDropdown').value;
      assignTrainingPlan(studentEmail, selectedTrainingPlanId);
    };
    
    const assignTrainingPlan = async(studentEmail, trainingPlanID) => {
      try {
        const requestBody = {
          trainingPlanID: trainingPlanID,
          internEmails: [studentEmail]
        };
      
        const response = await axios.post(
          'https://ojt-portal-backend2.azurewebsites.net/supervisor/assign-training-plan',
          JSON.stringify(requestBody),
          {
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${authUser.accessToken}`
            }
          }
        );
        alert(response.data);
      } catch(error) {
        console.error("Error assigning training plan:", error);
      }
    };

    return (
      <div className="TaskMonitoring">
        <h3 className="title">Task Status Overview</h3>
        <div className="TaskCard-container">
          {tp.map((plan) => (
            <TaskCard
              key={plan.trainingplanid}
              thumbnail={"https://images.squarespace-cdn.com/content/v1/6446dadb329c922b5cfe60b1/1683679509314-RFMGQXEGRYC69825E0XK/Daring_Creative_A_computer_screen_displaying_various_eye-catchi_84329a55-d780-43ab-b6ed-5ce2ed3d02c9.png"}
              title={plan.title}
              description={plan.description}
              startDate={plan.startDate}
              endDate={plan.endDate}
              tasks={plan.tasks}
              trainingPlanID={plan.trainingplanid}
            />
          ))}
        </div>

        <div className="training-plan-title">
          <h3 className="title">Assign Training Plan</h3>
          <button onClick={() => setIsModalOpen(true)}>Create Training Plan</button>
        </div>

        <ul className="training-plan">
          {students.map((item, i) => (
            <li key={i}>
              <p>
                {item.studentid} - {item.user.firstname} {item.user.lastname}
              </p>
              <div className="btn-container">
                <button onClick={() => handleAssignClick(item.user.email)}>Assign Training Plan</button>        
                <select id="trainingPlanDropdown">
                  {tp.map((plan) => (
                    <option key={plan.trainingplanid} value={plan.trainingplanid}>
                      {plan.trainingplanid} - {plan.title}
                    </option>
                  ))}
                </select>
              </div>
            </li>
          ))}
        </ul>


        <Modal
          isOpen={isModalOpen}
          onRequestClose={() => setIsModalOpen(false)}
          style={{
            content: {
              width: "50%", // Adjust the width as needed
              height: "60%", // Adjust the height as needed
              margin: "auto",
              padding: "20px",
              background: "#fff",
              borderRadius: "8px",
              outline: "none",
            },
            overlay: {
              backgroundColor: "rgba(0, 0, 0, 0.5)",
            },
          }}
        >
          <h2>Create Training Plan</h2>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleCreateTrainingPlan();
            }}
          >
            <label>
              Title:
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleInputChange}
                required
              />
            </label>
            <label>
              Description:
              <textarea
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                required
              />
            </label>
            <label>
              Start Date:
              <input
                type="date"
                name="startDate"
                value={formData.startDate}
                onChange={handleInputChange}
                required
              />
            </label>
            <label>
              End Date:
              <input
                type="date"
                name="endDate"
                value={formData.endDate}
                onChange={handleInputChange}
                required
              />
            </label>
            <button type="submit">Create</button>
          </form>
          <button onClick={() => setIsModalOpen(false)}>Close</button>
        </Modal>
      </div>
    );
  };

  export default TaskMonitoring;