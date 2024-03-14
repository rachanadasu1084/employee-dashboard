import React, { useEffect, useState } from 'react';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { fetchEmployees } from './actions/employeeActions';
import EmployeeList from './components/EmployeeList';
import EmployeeForm from './components/EmployeeForm';
 
function App() {
const dispatch = useDispatch();
const employees = useSelector(state => state.employees);
const [editMode, setEditMode] = useState(false);
const [editEmployee, setEditEmployee] = useState(null);

useEffect(() => {
    dispatch(fetchEmployees());
  }, [dispatch]);
 
const handleEdit = (employee) => {
    console.log("Edit Employee Data:", employee);
    setEditMode(true);
    setEditEmployee(employee);
};
 
const handleCancelEdit = () => {
    setEditEmployee(null);
    setEditMode(false);
};
 
return (
<div id="page">
  <EmployeeForm editMode={editMode} editEmployee={editEmployee} onCancelEdit={handleCancelEdit} />
  <EmployeeList employees={employees} onEdit={handleEdit} />
</div>
);}
 
export default App;