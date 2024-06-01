import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  TableRow,
  TableCell,
  IconButton,
  Collapse,
  Box,
  Typography,
  Table,
  TableHead,
  TableBody,
  Button,
} from '@mui/material';
import { KeyboardArrowUp, KeyboardArrowDown } from '@mui/icons-material';
import axios from 'axios';
import { useAuth } from '../UserManagement/AuthContext';
import TableContainer from '@mui/material/TableContainer';
import InternEvalFeedbackForm from "../InternEvalFeedbackForm/InternEvalFeedbackForm";

function Row({ row }) {
  const [open, setOpen] = useState(false);
  const [entries, setEntries] = useState([]);
  const { authUser } = useAuth();
  const [formOpen, setFormOpen] = useState(false);

  useEffect(() => {
    const fetchRow = async () => {
      if (open) {
        try {
          const response = await axios.get(
            "https://ojt-backend.azurewebsites.net/student/get-all-entries",
            {
              params: {
                email: row.student.user.email,
              },
              headers: {
                Authorization: `Bearer ${authUser.accessToken}`,
              },
            }
          );
          console.log(response.data);
          setEntries(response.data);
        } catch (error) {
          console.error('Error fetching data:', error.response ? error.response.data : error.message);
        }
      }
    };
    fetchRow();
  }, [open, row.student.user.email, authUser.accessToken]);

  return (
    <React.Fragment>
      {!formOpen ? (
        <TableRow>
          <TableCell>
            <IconButton
              aria-label="expand row"
              size="small"
              onClick={() => setOpen(!open)}
            >
              {open ? <KeyboardArrowUp /> : <KeyboardArrowDown />}
            </IconButton>
          </TableCell>
          <TableCell>{row.student.studentid}</TableCell>
          <TableCell align="right">{`${row.student.user.firstname} ${row.student.user.lastname}`}</TableCell>
          <TableCell align="right">{row.student.degreeProgram}</TableCell>
          <TableCell align="right">{row.company.companyName}</TableCell>
          <TableCell align="right">{row.department}</TableCell>
          <TableCell align="right">{row.designation}</TableCell>
          <TableCell align="right">{row.renderedHours.toFixed(2)}</TableCell>
          <TableCell align="right">
            <Button variant="outlined" onClick={() => setFormOpen(true)}>Evaluate Student</Button>
          </TableCell>
        </TableRow>
      ) : null}
      {!formOpen && (
        <TableRow>
          <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={8}>
            <Collapse in={open} timeout="auto" unmountOnExit>
              <Box sx={{ margin: 1 }}>
                <Typography variant="h6" gutterBottom component="div">
                  Details
                </Typography>
                <Table size="small" aria-label="details">
                  <TableHead>
                    <TableRow>
                      <TableCell>Time In</TableCell>
                      <TableCell>Time Out</TableCell>
                      <TableCell>Total Hours</TableCell>
                      <TableCell align="right">Activities</TableCell>
                      <TableCell align="right">Tasks (Task Description Concatenated) </TableCell>
                      <TableCell align="right">Skills (Task Description Concatenated (SkillName: domain)) </TableCell>
                      <TableCell align="right">Status</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {entries.map((entry, index) => (
                      <TableRow key={index}>
                        <TableCell>{entry.timeIn}</TableCell>
                        <TableCell>{entry.timeOut}</TableCell>
                        <TableCell>{entry.totalHrs.toFixed(2)}</TableCell>
                        <TableCell align="right">{entry.activities}</TableCell>
                        <TableCell align="right">{entry.tasks.map(task => task.description).join(', ')}</TableCell>
                        <TableCell align="right">{entry.tasks.flatMap(task => task.skills.map(skill => `${skill.skillName}: ${skill.domain}`)).join(', ')}</TableCell>
                        <TableCell align="right">{entry.status}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </Box>
            </Collapse>
          </TableCell>
        </TableRow>
      )}
      {formOpen && <InternEvalFeedbackForm student={row.student} type="student" />}
    </React.Fragment>
  );
}

Row.propTypes = {
  row: PropTypes.object.isRequired,
};

export default function StudentData() {
  const { authUser } = useAuth();
  const [students, setStudents] = useState([]);

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const response = await axios.get(
          "https://ojt-backend.azurewebsites.net/get-ojt-records",
          {
            params: {
              studentEmail: "all",
            },
            headers: {
              Authorization: `Bearer ${authUser.accessToken}`,
            },
          }
        );
        setStudents(response.data);
        console.log(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchStudents();
  }, [authUser]);

  return (
    <div>
      <TableContainer>
        <Table aria-label="collapsible table">
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
            </TableRow>
          </TableHead>
          <TableBody>
            {students.map((student, index) => (
              <Row key={index} row={student} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
