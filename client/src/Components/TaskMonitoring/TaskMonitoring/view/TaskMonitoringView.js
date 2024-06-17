import React from "react";
import TaskCardController from "../../TaskCard/controller/TaskCardController";
import Modal from "react-modal";

const TaskMonitoringView = ({
  tp,
  students,
  handleAssignClick,
  handleCreateTrainingPlan,
  handleInputChange,
  formData,
  setIsModalOpen,
  isModalOpen,
}) => {
  return (
    <div className="TaskMonitoring">
      <h3 className="title">Task Status Overview</h3>
      <div className="TaskCard-container">
        {tp.map((plan) => (
          <TaskCardController
            key={plan.trainingplanid}
            thumbnail={
              "https://images.squarespace-cdn.com/content/v1/6446dadb329c922b5cfe60b1/1683679509314-RFMGQXEGRYC69825E0XK/Daring_Creative_A_computer_screen_displaying_various_eye-catchi_84329a55-d780-43ab-b6ed-5ce2ed3d02c9.png"
            }
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
        <button onClick={() => setIsModalOpen(true)}>
          Create Training Plan
        </button>
      </div>

      <ul className="training-plan">
        {students.map((item, i) => (
          <li key={i}>
            <p>
              {item.studentid} - {item.user.firstname} {item.user.lastname}
            </p>
            <div className="btn-container">
              <button onClick={() => handleAssignClick(item.user.email)}>
                Assign Training Plan
              </button>
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
            width: "75%", // Adjust the width as needed
            height: "75%", // Adjust the height as needed
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
          <button style={{ marginBottom: "10px" }} type="submit">
            Create
          </button>
        </form>
        <button onClick={() => setIsModalOpen(false)}>Close</button>
      </Modal>
    </div>
  );
};

export default TaskMonitoringView;
