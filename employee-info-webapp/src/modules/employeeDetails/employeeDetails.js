import React, { useState } from 'react';
import { makeStyles } from "@material-ui/styles";
import { padding } from '@mui/system';

const useStyles = makeStyles((theme) => ({
    mainContainer: {
        margin: "0 auto 0 auto",
        padding: "24px 0",
    },
    userInfoSection: {
        display: "flex",
        background: "#d3f0fb",
        padding: "24px",
        justifyContent: "space-between"
    },
    leftContainer: {
        display: "flex",
        flexDirection: "column",
    },
    nameContainer: {
        display: "flex",
    },
    userName: {
        fontSize: "30px",
        fontWeight: "bold",
        paddingTop: "4px",
        marginRight: "10px"
    },
    statusImage: {
        width: "40px",
    },
    basicDetails: {
        display: "flex",
        flexDirection: "column",
    },
    uniqueID: {
        padding: "6px",
        borderRadius: "12px",
        fontSize: "18px",
        background: "#aae7fc",
        width: "fit-content",
        marginTop: "6px",
        cursor: "pointer",
    },
    contactInfo: {
        display: "flex",
        margin: "11px 0"
    },
    mobile: {
        padding: "6px",
        borderRadius: "12px",
        fontSize: "18px",
        background: "#aae7fc",
    },
    email: {
        padding: "6px",
        borderRadius: "12px",
        fontSize: "18px",
        background: "#aae7fc",
        marginLeft: "20px"
    },
    address: {
        padding: "6px",
        borderRadius: "12px",
        fontSize: "18px",
        background: "#aae7fc",
        textAlign: "center"
    },
    rightContainer: {
        display: "flex",
    },
    weaklyEarningContainer: {
        display: "flex",
        flexDirection: "column",
        alignItems: "self-end",
        // padding: "10px",
        boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
        borderRadius: "6px"
    },
    weaklyEarning: {
        padding: "10px",
        display: "flex"
    },
    clickHereBox: {
        width: "60px",
        padding: "10px",
        boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
        borderRadius: "6px",
        marginLeft: "20px",
        textAlign: "center",
        lineHeight: "29px",
        fontSize: "20px",
        background: "#aae7fc",
        cursor: "pointer"
    },
    hiddenEarningContainer: {
        display: "flex",
        flexDirection: "column",
        alignItems: "self-end",
        marginLeft: "20px",
        padding: "10px",
        boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
        borderRadius: "6px"
    },
    showTotal: {
        display: "flex",
        margin: "5px 0"
    },
    showTotalDeposit: {
        display: "flex",
        margin: "5px 0",
        padding: "0 5px",
        borderRadius: "6px",
        background: "#aae7fc"
    },
    closeTotalLungiContainer: {
        display: "flex",
        justifyContent: "space-between",
        alignSelf: "normal"
    },
    closeIcon: {
        width: "20px",
        height: "20px",
        margin: "9px 0 0 6px",
        cursor: "pointer"
    },
    textheading: {
        fontSize: "24px",
    },
    text: {
        fontSize: "24px",
        marginLeft: "15px",
        fontWeight: "bold"
    },
    textSubheading: {
        fontSize: "18px",
    },
    textValue: {
        fontSize: "18px",
        marginLeft: "5px",
        fontWeight: "bold",
    },
    weeklyLungiContainer: {
        alignSelf: "normal",
        background: "#ffffff",
        padding: "7px 10px 5px",
    },
    weeklyLungi: {
        display: "flex"
    },
    contentheading: {
        fontSize: "18px",
        fontWeight: "bold",
    },
    rateContainer: {
        alignSelf: "normal",
        background: "#f1fbff",
        padding: "7px 10px"
    },
    rateSubContainer: {
        display: "flex",
        justifyContent: "space-between"
    },
    tableContainer: {
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

export default function EmployeeDetails(props) {
    const classes = useStyles();
    const {employeeDetailsResponse, fabricListResponse} = props;

    const [isUniqieIdVisible, setUniqueIdVisible] = useState(false);
    const [isTotalEarningRevealed, setTotalEarningRevealed] = useState(false);
    
    const handleRevealUniqueID = () => {
        if(isUniqieIdVisible)
            setUniqueIdVisible(false)
        else
            setUniqueIdVisible(true)
    }
    const handleRevealTotalEarning = () => {
        setTotalEarningRevealed(true)
    }
    const handleCloseRevealTotalEarning = () => {
        setTotalEarningRevealed(false)
    }

    let weeklyEarning = 0;
    let weeklyLungi = 0;
    let weeklyCottonLungi = 0;
    let weeklyTerrycotLungi = 0;
    fabricListResponse && fabricListResponse.map((row) => {
        weeklyEarning+=row?.totalLungiPricePerDay;
        weeklyLungi+=row?.totalLungiPerDay;
        weeklyCottonLungi+=row?.cottonLungi;
        weeklyTerrycotLungi+=row?.terrycotLungi;
    })
    
    let cottonWeavingRate = props.state.lungiWeavingRate?.currentLungiWeavingRate?.cotton;
    let terrycotWeavingRate = props.state.lungiWeavingRate?.currentLungiWeavingRate?.terrycot;

  return (
    <div className={classes.mainContainer}>
        <div className={classes.userInfoSection}>
            <div className={classes.leftContainer}>
                <div className={classes.nameContainer}>
                    <div className={classes.userName}>{employeeDetailsResponse[0]?.name}</div>
                    {employeeDetailsResponse[0]?.status === "Active" ? 
                        <img className={classes.statusImage} src="/images/tick-bg-green.svg" alt="status"/>
                        : <img className={classes.statusImage} src="/images/tick-bg-green.svg" alt="status"/> }
                </div>
                <div className={classes.basicDetails}>
                    <div className={classes.uniqueID} onClick={handleRevealUniqueID}>{isUniqieIdVisible ? employeeDetailsResponse[0]?._id :"Reveal Unique ID"}</div>
                    <div className={classes.contactInfo}>
                        <div className={classes.mobile}>{employeeDetailsResponse[0]?.mobile}</div>
                        <div className={classes.email}>{employeeDetailsResponse[0]?.email}</div>
                    </div>
                    <div className={classes.address}>{employeeDetailsResponse[0]?.address}</div>
                </div>
            </div>
            <div className={classes.rightContainer}>
                <div className={classes.weaklyEarningContainer}>
                    <div className={classes.weaklyEarning}>
                        <div className={classes.textheading}>Weakly Earning:</div>
                        <div className={classes.text}>{weeklyEarning}&nbsp;₹</div>
                    </div>
                    <div className={classes.weeklyLungiContainer}>
                        <div className={classes.weeklyLungi}>
                            <div className={classes.contentheading}>Weakly Lungi Total:</div>
                            <div className={classes.textValue}>{weeklyLungi}</div>
                        </div>
                        <div className={classes.rateSubContainer}>
                            <div className={classes.showTotal}>
                                <div className={classes.textSubheading}>Cotton:</div>
                                <div className={classes.textValue}>{weeklyCottonLungi}</div>
                            </div>
                            <div className={classes.showTotal}>
                                <div className={classes.textSubheading}>Terrycot:</div>
                                <div className={classes.textValue}>{weeklyTerrycotLungi}</div>
                            </div>
                        </div>
                    </div>
                    <div className={classes.rateContainer}>
                        <div className={classes.contentheading}>Current Rate</div>
                        <div className={classes.rateSubContainer}>
                            <div className={classes.showTotal}>
                                <div className={classes.textSubheading}>Cotton:</div>
                                <div className={classes.textValue}>{cottonWeavingRate}</div>
                            </div>
                            <div className={classes.showTotal}>
                                <div className={classes.textSubheading}>Terrycot:</div>
                                <div className={classes.textValue}>{terrycotWeavingRate}</div>
                            </div>
                        </div>
                    </div>
                </div>
                {!isTotalEarningRevealed ?
                <div className={classes.clickHereBox} onClick={handleRevealTotalEarning}>
                    Click here to reveal total earning
                </div>:
                <div className={classes.hiddenEarningContainer}>
                    <div className={classes.closeTotalLungiContainer}>
                        <img className={classes.closeIcon} onClick={handleCloseRevealTotalEarning} src="/images/close-black.svg" alt='close'/>
                        <div className={classes.showTotal}>
                            <div className={classes.textheading}>Total Lungi:</div>
                            <div className={classes.text}>1500</div>
                        </div>
                    </div>
                    <div className={classes.showTotal}>
                        <div className={classes.textheading}>Total Earning:</div>
                        <div className={classes.text}>75000</div>
                    </div>
                    <div className={classes.showTotal}>
                        <div className={classes.textheading}>Total Paid Amount:</div>
                        <div className={classes.text}>67000</div>
                    </div>
                    <div className={classes.showTotalDeposit}>
                        <div className={classes.textheading}>Total Deposit Amount:</div>
                        <div className={classes.text}>8000</div>
                    </div>
                </div>}
            </div>
        </div>
        
    </div>
  )
}