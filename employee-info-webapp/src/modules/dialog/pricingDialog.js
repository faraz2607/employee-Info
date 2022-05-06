import React, { useEffect, useState } from 'react'
import Dialog from '@mui/material/Dialog';
import { makeStyles } from "@material-ui/styles";
import { connect } from "react-redux";
import { dispatchAction } from "../../utility"
import { eventConstants } from '../../constants';

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
        padding: "22px",
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

function PricingDialog(props) {
    console.log("pricing-dialog-props",props)
    const {open, close} = props;
    const classes = useStyles();
    const [isTerrycotInput, setTerrycotInput] = useState(false);
    const [isCottonInput, setCottonInput] = useState(false);
    const [cottonWeavingRate, setCottonWeavingRate] = useState("");
    const [terrycotWeavingRate, setTerrycotWeavingRate] = useState("");

    useEffect(() => {
        setCottonWeavingRate(props.state.lungiWeavingRate?.currentLungiWeavingRate?.cotton)
        setTerrycotWeavingRate(props.state.lungiWeavingRate?.currentLungiWeavingRate?.terrycot)
    }, [])
    

    const handleClose = () => {
        close()
        setTerrycotInput(false)
        setCottonInput(false)
    }
    const handleSubmit = () => {
        props.dispatchAction(eventConstants.CHANGE_LUNGI_WEAVING_RATE, {"cotton":cottonWeavingRate,"terrycot":terrycotWeavingRate})
        handleClose()
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

  return (
    <div>
        <Dialog
            open={open}
            onClose={handleClose}
            PaperProps={{className: classes.dialog}}
        >
            <div className={classes.topContainer}>
                <div className={classes.heading}>Lungi Weaving Rate</div>
                <div className={classes.switchContainer}>
                <   div className={classes.textSwitchContainer} onClick={handleCottonInput}>
                        <div className={classes.switchText}>Cotton</div>
                        { isCottonInput ?
                            <img src="/images/active-switch.svg" alt="switch"/> :
                            <img src="/images/inactive-switch.svg" alt="switch"/>
                        }
                    </div>
                    <div className={classes.textSwitchContainer} onClick={handleTerrycotInput}>
                        <div className={classes.switchText}>Terrycot</div>
                        { isTerrycotInput ?
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
                {isCottonInput && <div className={classes.subContainer}>
                    <div className={classes.subHeading}>Cotton Rate</div>
                    <input type="number" className={classes.inputField} value={cottonWeavingRate} onChange={(e)=>setCottonWeavingRate(e.target.value)}/>
                </div>}
                {isTerrycotInput && <div className={classes.subContainer}>
                    <div className={classes.subHeading}>Terrycot Rate</div>
                    <input type="number" className={classes.inputField} value={terrycotWeavingRate} onChange={(e)=>setTerrycotWeavingRate(e.target.value)}/>
                </div>}
                { !isTerrycotInput && !isCottonInput && <div className={classes.toggleText}>
                    Please enable switch to add/update lungi weaving rate
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
const mapStateToProps = (state) => {
    return { state };
};

export default connect(mapStateToProps, { dispatchAction })(PricingDialog);