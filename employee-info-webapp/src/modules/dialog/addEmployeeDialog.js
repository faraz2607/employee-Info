import React, { useState } from 'react'
import Dialog from '@mui/material/Dialog';
import { makeStyles } from "@material-ui/styles";
import { Tooltip } from '@mui/material';
import moment from 'moment';
import { Toaster, toast } from 'react-hot-toast';
import { toastMessages } from '../../constants';

const useStyles = makeStyles((theme) => ({
    dialog: {
        width: "450px",
        borderRadius: "12px",
    },
    topContainer: {
        background: "#d3f0fb",
        padding: "24px",
    },
    heading: {
        fontSize: "24px",
        textAlign: "center",
        fontWeight: "bold"
    },
    statusActiveTextContainer:{
        display: "flex",
        justifyContent: "space-between",
        marginTop: "24px",
    },
    statusActiveText: {
        fontSize: "18px",
        textAlign: "center"
    },
    rotatedInactiveSwitch: {
        transform: "rotate(180deg)"
    },
    mainContainer: {
        padding: "0 24px 24px"
    },
    subContainer: {
        marginTop: "24px"
    },
    subHeading: {
        fontSize: "18px"
    },
    inputField: {
        width: "-webkit-fill-available",
        height: "38px",
        borderRadius: "6px",
        marginTop: "5px",
        fontSize: "18px",
        padding: "0 10px"
    },
    toggleText: {
        boxShadow: "rgba(0, 0, 0, 0.1) 0px 10px 50px",
        fontSize: "20px",
        textAlign: "center",
        padding: "22px 0",
        borderRadius: "12px",
        marginTop: "24px"
    },
    buttonContainer: {
        display: "flex",
        justifyContent: "space-between",
        marginTop: "24px"
    },
    cancleButton: {
        width: 150,
        height: 40,
        borderRadius: 8,
        background: "#deac6c",
        color: "#ffffff",
        fontSize: "20px",
        textAlign: "center",
        paddingTop: 14,
        cursor: "pointer"
    },
    submitButton: {
        width: 150,
        height: 40,
        borderRadius: 8,
        background: "#2bc4fd",
        color: "#ffffff",
        fontSize: "20px",
        textAlign: "center",
        paddingTop: 14,
        cursor: "pointer"
    },
    disableSubmitButton: {
        width: 150,
        height: 40,
        borderRadius: 8,
        background: "#2bc4fd",
        color: "#ffffff",
        fontSize: "20px",
        textAlign: "center",
        paddingTop: 14,
        pointerEvents: "none"
    }
}))

export default function AddEmployeeDialog(props) {
    const classes = useStyles();
    const {open, close, getEmployeeList} = props;

    const [userNameValue, setUserNameValue] = useState("")
    const [emailValue, setEmailValue] = useState("")
    const [mobileValue, setMobileValue] = useState(0)
    const [addressValue, setAddressValue] = useState("")

    const handleClose = () => {
        close()
    }
    const handleSubmit = () => {
        addEmployee();
    }

    const addEmployee = async () => {
        let currentDate = moment().format('DD MMMM YYYY');

        const response = await fetch("/employee", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            name: userNameValue,
            email: emailValue,
            mobile: mobileValue,
            address: addressValue,
            status: "Active",
            addedOn: currentDate
          })
        })

        if(response.status === 201){
            toast.success(toastMessages.SUCCESS_EMPLOYEE)
            handleClose();
            getEmployeeList();
        } else {
            toast.error(toastMessages.FAILED_EMPLOYEE)
        }  
    }

  return (
    <div>
        <Toaster />
        <Dialog
            open={open}
            onClose={handleClose}
            PaperProps={{className: classes.dialog}}
        >
            <div className={classes.topContainer}>
                <div className={classes.heading}>Add Employee</div>
                <div className={classes.statusActiveTextContainer}>
                    <div className={classes.statusActiveText}>Status is always active while adding employee</div>
                    <Tooltip
                        placement='top'
                        title={'Status can be edited while editing employee details'}
                    >
                        <img className={classes.rotatedInactiveSwitch} src='/images/inactive-switch.svg' alt='active-switch' />
                    </Tooltip>
                </div>
            </div>
            <div className={classes.mainContainer}>
                <div className={classes.subContainer}>
                    <div className={classes.subHeading}>Username</div>
                    <input type="text" className={classes.inputField} value={userNameValue} onChange={(e)=>setUserNameValue(e.target.value)} />
                </div>
                <div className={classes.subContainer}>
                    <div className={classes.subHeading}>Email</div>
                    <input type="text" className={classes.inputField} value={emailValue} onChange={(e)=>setEmailValue(e.target.value)} />
                </div>
                <div className={classes.subContainer}>
                    <div className={classes.subHeading}>Mobile</div>
                    <input type="number" className={classes.inputField} value={mobileValue} onChange={(e)=>setMobileValue(e.target.value)} />
                </div>
                <div className={classes.subContainer}>
                    <div className={classes.subHeading}>Address</div>
                    <input type="text" className={classes.inputField} value={addressValue} onChange={(e)=>setAddressValue(e.target.value)} />
                </div>
                <div className={classes.buttonContainer}>
                    <div className={classes.cancleButton} onClick={handleClose}>Cancle</div>
                    <div className={classes.submitButton} onClick={handleSubmit}>Submit</div>
                </div>
            </div>
        </Dialog>
    </div>
  )
}
