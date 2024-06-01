import React from "react";
import InternDesignationController from "../controllers/InternDesignationController";
import ClipLoader from "react-spinners/ClipLoader";

const InternMonitoringView = ({
  openModal,
  handleOpenModal,
  accessToken,
  getOJTRecords,
  loading,
}) => {
  return (
    <div className="intern-monitoring-view">
      <h2>Interns</h2>
      <button className="invite-button" onClick={handleOpenModal}>
        Invite an Intern
      </button>

      {openModal && (
        <InternDesignationController
          handleOpenModal={handleOpenModal}
          accessToken={accessToken}
        />
      )}

      {loading ? (
        <div className="loader-container">
          <ClipLoader loading={loading} size={150} />
        </div>
      ) : (
        <div className="table-container">
          <table className="responsive-table">
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
                  <td data-label="ID">{record.student.studentid}</td>
                  <td data-label="Name">
                    {record.student.user.firstname +
                      " " +
                      record.student.user.lastname}
                  </td>
                  <td data-label="Degree">{record.student.degreeProgram}</td>
                  <td data-label="Dsgntn">{record.designation}</td>
                  <td data-label="Dprtmnt">{record.department}</td>
                  <td data-label="TRH">{record.renderedHours}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default InternMonitoringView;
