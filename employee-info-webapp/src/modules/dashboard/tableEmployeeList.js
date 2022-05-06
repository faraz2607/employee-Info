import React from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { makeStyles } from "@material-ui/styles";
import { useNavigate } from "react-router-dom";
import NoRecordExists from '../../common/noRecordExists';

const useStyles = makeStyles((theme) => ({
  employeeListMainContainer: {
    padding: "0 24px"
  },
  tableHeading: {
      fontSize: "28px",
      paddingBottom: "20px"
  }
}))

export default function CustomTable(props) {
  const {employeeListResponse} = props;
  const classes = useStyles();
  let navigate = useNavigate();

  const handleOpenEmployeeCompleteDetails = (uniqueId) => {
    navigate('/employee-details', {state: { "uniqueId": uniqueId }});
  }
  return (
    <div className={classes.employeeListMainContainer}>
        <div className={classes.tableHeading}>Employee List</div>
        <TableContainer component={Paper} style={{borderRadius: "12px", boxShadow: "rgba(0, 0, 0, 0.1) 0px 10px 50px"}}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow style={{background: "#d3f0fb"}}>
              <TableCell style={{fontWeight: "bold"}}>S.No</TableCell>
              <TableCell style={{fontWeight: "bold"}}>Name</TableCell>
              <TableCell style={{fontWeight: "bold"}}>Email</TableCell>
              <TableCell style={{fontWeight: "bold"}}>Mobile</TableCell>
              <TableCell style={{fontWeight: "bold"}}>Address</TableCell>
              <TableCell style={{fontWeight: "bold"}}>Unique ID</TableCell>
              <TableCell style={{fontWeight: "bold"}}>Status</TableCell>
              <TableCell style={{fontWeight: "bold"}}>Date</TableCell>
            </TableRow>
        </TableHead>
        <TableBody>
          {employeeListResponse && employeeListResponse.map((row, index) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              style={index % 2 !== 0 ? {background: "#f1fbff", cursor: "pointer"} : {background: "#ffffff", cursor: "pointer"}}
              onClick={() => handleOpenEmployeeCompleteDetails(row._id)}
            >
              <TableCell>{index+1}</TableCell>
              <TableCell style={{fontWeight: "bold"}}>{row.name}</TableCell>
              <TableCell>{row.email}</TableCell>
              <TableCell>{row.mobile}</TableCell>
              <TableCell>{row.address}</TableCell>
              <TableCell>{row._id}</TableCell>
              <TableCell>{row.status}</TableCell>
              <TableCell>{row.addedOn}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      {employeeListResponse.length === 0 && <NoRecordExists />}
    </TableContainer>
    </div>
  )
}
