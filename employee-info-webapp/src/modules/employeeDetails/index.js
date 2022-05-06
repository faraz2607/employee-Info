import React, {useEffect,useState} from 'react'
import EmployeeDetails from './employeeDetails';
import TableFabricDetails from './tableFabricList';
import { useLocation } from "react-router-dom";
import { connect } from 'react-redux';
import { dispatchAction } from '../../utility';
import moment from 'moment';

function Index(props) {
    const location = useLocation();

    const [employeeDetailsResponse, setEmployeeDetailsResponse] = useState([]);
    const [fabricListResponse, setFabricListResponse] = useState([]);

    let uniqueId = location.state.uniqueId;
    let employeeId = "fz|"+uniqueId;

    useEffect(() => {
      getEmployeeDetails()
      getFabricList()
    }, [])

    const getEmployeeDetails = async () => {
        const response = await fetch("/employee/"+uniqueId, {
            method: "GET",
            headers: {
              "Content-Type": "application/json"
            }, 
          })
          const data = await response.json()
          setEmployeeDetailsResponse(data)
    }

    const getFabricList = async() => {
    let currentWeekCount = moment().isoWeek();
    const response = await fetch("/fabric/"+employeeId+"/"+currentWeekCount, {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }, 
    })
    const data = await response.json()
    setFabricListResponse(data)
    console.log("data",data)

  }

  return (
    <div>
        <EmployeeDetails employeeDetailsResponse={employeeDetailsResponse} fabricListResponse={fabricListResponse} state={props.state}/>
        <TableFabricDetails uniqueId={uniqueId} employeeDetailsResponse={employeeDetailsResponse} fabricListResponse={fabricListResponse} getFabricList={getFabricList} state={props.state}/>
    </div>
  )
}

const mapStateToProps = (state) => {
  return { state };
};

export default connect(mapStateToProps, { dispatchAction })(Index);