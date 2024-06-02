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
  TableContainer,
  Paper,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle
} from '@mui/material';
import { KeyboardArrowUp, KeyboardArrowDown } from '@mui/icons-material';
import axios from 'axios';
import { useAuth } from '../UserManagement/AuthContext';
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

  const handleFormOpen = () => {
    setFormOpen(true);
  };

  const handleFormClose = () => {
    setFormOpen(false);
  };

  return (
    <React.Fragment>
      <TableRow className="student-row">
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUp /> : <KeyboardArrowDown />}
          </IconButton>
        </TableCell>
        <TableCell data-label="Student ID">{row.student.studentid}</TableCell>
        <TableCell data-label="Student Name" align="right">{`${row.student.user.firstname} ${row.student.user.lastname}`}</TableCell>
        <TableCell data-label="Degree Program" align="right">{row.student.degreeProgram}</TableCell>
        <TableCell data-label="Company Name" align="right">{row.company.companyName}</TableCell>
        <TableCell data-label="Department" align="right">{row.department}</TableCell>
        <TableCell data-label="Designation" align="right">{row.designation}</TableCell>
        <TableCell data-label="Total Rendered Hours" align="right">{row.renderedHours.toFixed(2)}</TableCell>
      </TableRow>

      <TableRow>
        <TableCell style={{ paddingLeft: '20px' ,paddingBottom: 0, paddingTop: 0 }} colSpan={9}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" style={{textAlign: 'left'}} gutterBottom component="div">
                Details
              </Typography>
              <Table size="small" aria-label="details">
                <TableHead style={{marginLeft: '-10px'}}>
                  <TableRow className='student-row'>
                    <TableCell>Time In</TableCell>
                    <TableCell>Time Out</TableCell>
                    <TableCell>Total Hours</TableCell>
                    <TableCell align="right">Activities</TableCell>
                    <TableCell align="right">Tasks (Task Description Concatenated)</TableCell>
                    <TableCell align="right">Skills (Task Description Concatenated (SkillName: domain))</TableCell>
                    <TableCell align="right">Status</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {entries.map((entry, index) => (
                    <TableRow key={index}>
                      <TableCell data-label="Time In">{entry.timeIn}</TableCell>
                      <TableCell data-label="Time Out">{entry.timeOut}</TableCell>
                      <TableCell data-label="Total Hours">{entry.totalHrs.toFixed(2)}</TableCell>
                      <TableCell data-label="Activities" align="right">{entry.activities}</TableCell>
                      <TableCell data-label="Tasks" align="right">{entry.tasks.map(task => task.description).join(', ')}</TableCell>
                      <TableCell data-label="Skills" align="right">{entry.tasks.flatMap(task => task.skills.map(skill => `${skill.skillName}: ${skill.domain}`)).join(', ')}</TableCell>
                      <TableCell data-label="Status" align="right">{entry.status}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

Row.propTypes = {
  row: PropTypes.object.isRequired,
};

export default function OJTRecords() {
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
    <div className="student-data">
      <h2>
        OJT Records 
      </h2>
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
