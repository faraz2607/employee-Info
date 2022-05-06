import { httpService } from "../managers/httpService";
import { httpConstants } from "../constants";

export default {
    addEmployee,
    getEmployeeList,
};

function getHeaders() {
  return {
    "Content-Type": httpConstants.CONTENT_TYPE.APPLICATION_JSON,
    "Access-Control-Allow-Origin": "*",
  };
}
async function addEmployee(data) {
    let url = "http://localhost:3005/employee";
    //   process.env.REACT_APP_EMPLOYEE;
    return httpService(httpConstants.METHOD_TYPE.POST, getHeaders(), data, url)
      .then((response) => {
        if (
          !response.success ||
          response.responseCode !== 200 ||
          !response.responseData ||
          response.responseData.length === 0
        )
          return Promise.reject();
        return Promise.resolve(response.responseData);
      })
      .catch(function (err) {
        return Promise.reject(err);
      });
}

async function getEmployeeList() {
    console.log("hii")
  let url = "https://localhost:3005/employee";
//   process.env.REACT_APP_EMPLOYEE;
  return httpService(httpConstants.METHOD_TYPE.GET, getHeaders(), {}, url)
    .then((response) => {
        console.log("res",response);
      if (
        !response.success ||
        response.responseCode !== 200 ||
        !response.responseData ||
        response.responseData.length === 0
      )
        return Promise.reject();
      return Promise.resolve(response.responseData);
    })
    .catch(function (err) {
      return Promise.reject(err);
    });
}
