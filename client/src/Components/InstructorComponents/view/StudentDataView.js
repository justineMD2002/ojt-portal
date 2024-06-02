import React from "react";
import PropTypes from "prop-types";
import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  TableContainer,
  Paper,
} from "@mui/material";
import Row from "./Row";

const StudentDataView = ({ students, formOpen, handleFormOpen, handleFormClose }) => {
  return (
    <div className="student-data">
      <h2>Instructor Dashboard</h2>
      <TableContainer component={Paper} className="table-container">
        <Table className="responsive-table" aria-label="collapsible table">
          <TableHead>
            <TableRow>
              <TableCell />
              <TableCell>Student ID</TableCell>
              <TableCell align="right">Student Name</TableCell>
              <TableCell align="right">Degree Program</TableCell>
              <TableCell align="right">Company Name</TableCell>
              <TableCell align="right">Department</TableCell>
              <TableCell align="right">Designation</TableCell>
              <TableCell align="right">Total Rendered Hours</TableCell>
              <TableCell />
            </TableRow>
          </TableHead>
          <TableBody>
            {students.map((student, index) => (
              <Row
                key={index}
                row={student}
                formOpen={formOpen}
                handleFormOpen={handleFormOpen}
                handleFormClose={handleFormClose}
              />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

StudentDataView.propTypes = {
  students: PropTypes.array.isRequired,
};

export default StudentDataView;
