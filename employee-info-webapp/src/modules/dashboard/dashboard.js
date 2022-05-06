import React, { useState } from 'react';
import { makeStyles } from "@material-ui/styles";
import SelectDropdown from '../../common/selectDropdown';
import AddEmployeeDialog from '../dialog/addEmployeeDialog';

const useStyles = makeStyles((theme) => ({
    mainContainer: {
        margin: "0 auto 0 auto",
        padding: "24px",
    },
    topSection: {
        display: "flex",
    },
    addEmployeeButton: {
        width: "174px",
        borderRadius: "8px",
        background: "#24c4fd",
        textAlign: "center",
        paddingTop: "15px",
        color: "#ffffff",
        fontSize: "20px",
        margin: "8px 20px 8px 0",
        cursor: "pointer"
    },
    borderBottom: {
        width: "100%",
        borderBottom: "2px solid #e3e7ef",
        margin: "27px 0 35px"
    },
    tableHeading: {
        fontSize: "28px",
        paddingBottom: "20px"
    }
}))


export default function Dashboard(props) {
    const {getEmployeeList} = props;
    const classes = useStyles();
    const [isAddEmployeeDialog, setAddEmployeeDialog] = useState(false)
    const handleOpenAddEmployeeDialog = () => {
        setAddEmployeeDialog(true)
    }
    const handleCloseAddEmployee = () => {
        setAddEmployeeDialog(false)
    }
  return (
    <div>
        <div className={classes.mainContainer}>
            <div className={classes.topSection}>
                <AddEmployeeDialog 
                    open={isAddEmployeeDialog} 
                    close={handleCloseAddEmployee}
                    getEmployeeList={getEmployeeList}
                />
                <div className={classes.addEmployeeButton} onClick={handleOpenAddEmployeeDialog}>
                    Add Employee
                </div>
                <SelectDropdown label="Status" option1="Active" option2="Inactive"/>
            </div>
            <div className={classes.borderBottom}></div>
        </div>
    </div>
  )
}
