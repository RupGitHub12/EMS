import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Login from './pages/login'
import DashBoard from './pages/dashboard'
import AddUser from './pages/add-user'
import ErrorPage from './pages/error-page'
import EmployeeList from './pages/employee-list'
import FilteredEmployeeList from './pages/search-employee'

const ReactRouterSetup = () => {
  return (
    <Router>
      <Routes>
        <Route path='/login' element={<Login/>} />
        <Route path='/' element={<DashBoard/>} />
        <Route path='/employee-list' element={<EmployeeList/>} />
        <Route path='/add-user' element={<AddUser/>} />
        <Route path='/search-employee' element={<FilteredEmployeeList/>} />

        <Route path='*' element={<ErrorPage/>} />
      </Routes>
    </Router>
  );
};

export default ReactRouterSetup;

