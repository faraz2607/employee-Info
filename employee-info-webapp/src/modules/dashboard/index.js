import React, {useEffect, useState} from 'react'
import Dashboard from './dashboard';
import TableEmployeeList from './tableEmployeeList';

export default function Index() {
    const [employeeListResponse, setEmployeeListResponse] = useState([]);
  useEffect(() => {
    getEmployeeList()
  }, [])

  const getEmployeeList = async () => {
    const response = await fetch("/employee", {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }, 
    })
    const data = await response.json()
    setEmployeeListResponse(data)
  }
  return (
    <div>
        <Dashboard getEmployeeList={getEmployeeList} />
        <TableEmployeeList employeeListResponse={employeeListResponse} />
    </div>
  )
}
