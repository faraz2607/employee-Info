import React, { useState } from 'react'
import Dialog from '@mui/material/Dialog';
import { makeStyles } from "@material-ui/styles";
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
    switchContainer:{
        display: "flex",
        justifyContent: "space-between",
        marginTop: "24px",
    },
    textSwitchContainer: {
        display: "flex",
        cursor: "pointer"
    },
    switchText: {
        fontSize: "18px",
        marginRight: "10px"
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

export default function AddFabricDialog(props) {
    console.log("props-----------",props)
    const {open, close, getFabricList} = props;
    const classes = useStyles();
    const [isTerrycotInput, setTerrycotInput] = useState(false);
    const [isCottonInput, setCottonInput] = useState(false);
    const [terrycotValue, setTerrycotValue] = useState(0);
    const [cottonValue, setCottonValue] = useState(0);

    const handleClose = () => {
        close()
        setTerrycotInput(false)
        setCottonInput(false)
    }
    const handleTerrycotInput = () => {
        if(isTerrycotInput)
            setTerrycotInput(false)
        else
            setTerrycotInput(true)
    }
    const handleCottonInput = () => {
        if(isCottonInput)
            setCottonInput(false)
        else
            setCottonInput(true)
    }
    const handleBothInput = () => {
        if(isTerrycotInput && isCottonInput) {
            setTerrycotInput(false)
            setCottonInput(false)
        }
        else {
            setTerrycotInput(true)
            setCottonInput(true)
        }
    }

    const handleSubmit = () => {
        addFabric()
    }
    let cottonWeavingRate = parseFloat(props.state.lungiWeavingRate?.currentLungiWeavingRate?.cotton).toFixed(2);
    let terrycotWeavingRate = parseFloat(props.state.lungiWeavingRate?.currentLungiWeavingRate?.terrycot).toFixed(2);
    console.log("cottonWeavingRate",cottonWeavingRate);
    console.log("terrycotWeavingRate",terrycotWeavingRate);
    const addFabric = async () => {
        let employeeId = "fz|" + props.uniqueId;
        let status = props.status;
        let cottonLungi = parseFloat(cottonValue);
        let cottonPrice = cottonLungi * cottonWeavingRate;
        let terrycotLungi = parseFloat(terrycotValue);
        let terrycotPrice = terrycotLungi * terrycotWeavingRate;
        let totalLungiPerDay = terrycotLungi + cottonLungi;
        let totalLungiPricePerDay = terrycotPrice + cottonPrice;
        let currentDate = moment().format('DD MMMM YYYY');
        let currentWeekCount = moment().isoWeek();
        
        const response = await fetch("/fabric", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            employeeId: employeeId,
            status: status,
            terrycotLungi: terrycotLungi,
            terrycotLungiPrice: terrycotPrice,
            cottonLungi: cottonLungi,
            cottonLungiPrice: cottonPrice,
            totalLungiPerDay: totalLungiPerDay,
            totalLungiPricePerDay: totalLungiPricePerDay,
            addedOn: currentDate,
            currentWeekCount: currentWeekCount
          })
        })
        if(response.status === 201){
            toast.success(toastMessages.SUCCESS_FABRIC)
            handleClose();
            getFabricList();
        } else {
            toast.error(toastMessages.FAILED_FABRIC)
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
                <div className={classes.heading}>Add Fabric</div>
                <div className={classes.switchContainer}>
                    <div className={classes.textSwitchContainer} onClick={handleTerrycotInput}>
                        <div className={classes.switchText}>Terrycot</div>
                        { isTerrycotInput ?
                            <img src="/images/active-switch.svg" alt="switch"/> :
                            <img src="/images/inactive-switch.svg" alt="switch"/>
                        }    
                    </div>
                    <div className={classes.textSwitchContainer} onClick={handleCottonInput}>
                        <div className={classes.switchText}>Cotton</div>
                        { isCottonInput ?
                            <img src="/images/active-switch.svg" alt="switch"/> :
                            <img src="/images/inactive-switch.svg" alt="switch"/>
                        }
                    </div>
                    <div className={classes.textSwitchContainer} onClick={handleBothInput}>
                        <div className={classes.switchText}>Both</div>
                        { isTerrycotInput && isCottonInput ?
                            <img src="/images/active-switch.svg" alt="switch"/> :
                            <img src="/images/inactive-switch.svg" alt="switch"/>
                        }
                    </div>
                </div>
            </div>
            <div className={classes.mainContainer}>
                {isTerrycotInput && <div className={classes.subContainer}>
                    <div className={classes.subHeading}>Terrycot Lungi</div>
                    <input type="number" value={terrycotValue} onChange={(e)=>setTerrycotValue(e.target.value)} className={classes.inputField} />
                </div>}
                {isCottonInput && <div className={classes.subContainer}>
                    <div className={classes.subHeading}>Cotton Lungi</div>
                    <input type="number" value={cottonValue} onChange={(e)=>setCottonValue(e.target.value)} className={classes.inputField} />
                </div>}
                { !isTerrycotInput && !isCottonInput && <div className={classes.toggleText}>
                    Please enable switch to add Lungi
                </div>}
                <div className={classes.buttonContainer}>
                    <div className={classes.cancleButton} onClick={handleClose}>Cancle</div>
                    <div className={!isTerrycotInput && !isCottonInput ? classes.disableSubmitButton : classes.submitButton} onClick={handleSubmit}>Submit</div>
                </div>
            </div>
        </Dialog>
    </div>
  )
}
