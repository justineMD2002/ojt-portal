import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
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
} from "@mui/material";
import { KeyboardArrowUp, KeyboardArrowDown } from "@mui/icons-material";
import { getStudentOJTRecords } from "../model/OJTRecordsModel";
import { useAuth } from "../../../UserManagement/AuthContext";

const Row = ({ row }) => {
  const [open, setOpen] = useState(false);
  const [entries, setEntries] = useState([]);
  const { authUser } = useAuth();

  useEffect(() => {
    const fetchEntries = async () => {
      if (open) {
        try {
          const data = await getStudentOJTRecords(
            authUser.accessToken,
            row.student.user.email
          );
          setEntries(data);
        } catch (error) {
          console.error("Error fetching student entries:", error);
        }
      }
    };
    fetchEntries();
  }, [open, row.student.user.email, authUser.accessToken]);

  return (
    <>
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
        <TableCell
          data-label="Student Name"
          align="right"
        >{`${row.student.user.firstname} ${row.student.user.lastname}`}</TableCell>
        <TableCell data-label="Degree Program" align="right">
          {row.student.degreeProgram}
        </TableCell>
        <TableCell data-label="Company Name" align="right">
          {row.company.companyName}
        </TableCell>
        <TableCell data-label="Department" align="right">
          {row.department}
        </TableCell>
        <TableCell data-label="Designation" align="right">
          {row.designation}
        </TableCell>
        <TableCell data-label="Total Rendered Hours" align="right">
          {row.renderedHours.toFixed(2)}
        </TableCell>
      </TableRow>

      <TableRow>
        <TableCell
          style={{ paddingLeft: "20px", paddingBottom: 0, paddingTop: 0 }}
          colSpan={9}
        >
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography
                variant="h6"
                style={{ textAlign: "left" }}
                gutterBottom
                component="div"
              >
                Details
              </Typography>
              <Table size="small" aria-label="details">
                <TableHead style={{ marginLeft: "-10px" }}>
                  <TableRow className="student-row">
                    <TableCell>Time In</TableCell>
                    <TableCell>Time Out</TableCell>
                    <TableCell>Total Hours</TableCell>
                    <TableCell align="right">Activities</TableCell>
                    <TableCell align="right">
                      Tasks (Task Description Concatenated)
                    </TableCell>
                    <TableCell align="right">
                      Skills (Task Description Concatenated (SkillName: domain))
                    </TableCell>
                    <TableCell align="right">Status</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {entries.map((entry, index) => (
                    <TableRow key={index}>
                      <TableCell data-label="Time In">{entry.timeIn}</TableCell>
                      <TableCell data-label="Time Out">
                        {entry.timeOut}
                      </TableCell>
                      <TableCell data-label="Total Hours">
                        {entry.totalHrs.toFixed(2)}
                      </TableCell>
                      <TableCell data-label="Activities" align="right">
                        {entry.activities}
                      </TableCell>
                      <TableCell data-label="Tasks" align="right">
                        {entry.tasks.map((task) => task.description).join(", ")}
                      </TableCell>
                      <TableCell data-label="Skills" align="right">
                        {entry.tasks
                          .flatMap((task) =>
                            task.skills.map(
                              (skill) => `${skill.skillName}: ${skill.domain}`
                            )
                          )
                          .join(", ")}
                      </TableCell>
                      <TableCell data-label="Status" align="right">
                        {entry.status}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  );
};

Row.propTypes = {
  row: PropTypes.object.isRequired,
};

export default Row;
