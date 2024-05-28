import React from "react";
import InternDesignationController from "../controllers/InternDesignationController";
import ClipLoader from "react-spinners/ClipLoader";

const InternMonitoringView = ({
  openModal,
  handleOpenModal,
  accessToken,
  getOJTRecords,
  loading
}) => {
  return (
    <div>
      <h2>Interns</h2>
      <button onClick={handleOpenModal}>Invite an Intern</button>

      {openModal && (
        <InternDesignationController
          handleOpenModal={handleOpenModal}
          accessToken={accessToken}
        />
      )}

      {loading ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "50vh",
          }}
        >
          <ClipLoader loading={loading} size={150} />
        </div>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Intern ID</th>
              <th>Intern Name</th>
              <th>Degree Program</th>
              <th>Designation</th>
              <th>Department</th>
              <th>Total Rendered Hours</th>
            </tr>
          </thead>

          <tbody>
            {getOJTRecords.map((record) => (
              <tr key={record.recordNo}>
                <td>{record.student.studentid}</td>
                <td>
                  {record.student.user.firstname +
                    " " +
                    record.student.user.lastname}
                </td>
                <td>{record.student.degreeProgram}</td>
                <td>{record.designation}</td>
                <td>{record.department}</td>
                <td>{record.renderedHours}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default InternMonitoringView;
