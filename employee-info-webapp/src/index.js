import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Header from './modules/header/header'
import Dashboard from './modules/dashboard/index';
import EmployeeDetails from './modules/employeeDetails/index';
import { Provider } from 'react-redux';
import store from './store';

const Routing = () => {
  return(
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Dashboard/>} />
        <Route path="/employee-details" element={<EmployeeDetails />} />
      </Routes>
      {/* <Footer/> */}
    </Router>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Routing />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
