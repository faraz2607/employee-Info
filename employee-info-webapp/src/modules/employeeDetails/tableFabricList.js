import React, { useState } from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { makeStyles } from "@material-ui/styles";
import AddFabricDialog from '../dialog/addFabricDialog';
import NoRecordExists from '../../common/noRecordExists'


  const useStyles = makeStyles((theme) => ({
    tableFabricContainer: {
        padding: "24px"
    },
    headingButtonContainer: {
        display: "flex",
        justifyContent: "space-between",
        marginBottom: "24px",
    },
    tableHeading: {
        fontSize: "28px",
        paddingTop: "10px",
    },
    addFabricButton: {
        width: "174px",
        borderRadius: "8px",
        background: "#24c4fd",
        textAlign: "center",
        padding: "13px 0",
        color: "#ffffff",
        fontSize: "20px",
        cursor: "pointer"
    },
}))

export default function CustomTable(props) {
  const classes = useStyles();
  const {employeeDetailsResponse, fabricListResponse, getFabricList} = props;
  const [isDialogAddFabric, setDialogAddFabric] = useState(false);

  const openDialogAddFabric = () => {
    setDialogAddFabric(true)
  }
const closeDialogAddFabric = () => {
    setDialogAddFabric(false)
  }
  
  return (
    <div className={classes.tableFabricContainer}>
            <div className={classes.headingButtonContainer}>
                <div className={classes.tableHeading}>Fabric List</div>
                <AddFabricDialog open={isDialogAddFabric} close={closeDialogAddFabric} uniqueId={employeeDetailsResponse[0]?._id} status={employeeDetailsResponse[0]?.status} getFabricList={getFabricList} state={props.state}/>
                <div className={classes.addFabricButton} onClick={openDialogAddFabric}>Add Fabric</div>
            </div>
        <TableContainer component={Paper} style={{borderRadius: "12px", boxShadow: "rgba(0, 0, 0, 0.1) 0px 10px 50px"}}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
            <TableRow style={{background: "#d3f0fb"}}>
              <TableCell style={{fontWeight: "bold"}}>S.No</TableCell>
              <TableCell style={{fontWeight: "bold"}}>Cotton Lungi</TableCell>
              <TableCell style={{fontWeight: "bold"}}>Cotton price</TableCell>
              <TableCell style={{fontWeight: "bold"}}>Terrycot Lungi</TableCell>
              <TableCell style={{fontWeight: "bold"}}>Terrycot price</TableCell>
              <TableCell style={{fontWeight: "bold"}}>Total Lungi</TableCell>
              <TableCell style={{fontWeight: "bold"}}>Total price</TableCell>
              <TableCell style={{fontWeight: "bold"}}>Date</TableCell>
            </TableRow>
          </TableHead>
        <TableBody>
          {fabricListResponse && fabricListResponse.map((row,index) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              style={index % 2 !== 0 ? {background: "#f1fbff"} : {background: "#ffffff"}}
            >
              
              <TableCell>{index+1}</TableCell>
              <TableCell>{row.cottonLungi}</TableCell>
              <TableCell>{row.cottonLungiPrice}</TableCell>
              <TableCell>{row.terrycotLungi}</TableCell>
              <TableCell>{row.terrycotLungiPrice}</TableCell>
              <TableCell>{row.totalLungiPerDay}</TableCell>
              <TableCell>{row.totalLungiPricePerDay}</TableCell>
              <TableCell>{row.addedOn}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      {fabricListResponse.length === 0 && <NoRecordExists />}
    </TableContainer>
    </div>
  )
}
