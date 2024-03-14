import React from 'react';
import '../App.css';
import { useDispatch } from 'react-redux';
import { deleteEmployee } from '../actions/employeeActions';
 
const EmployeeList = ({ employees, onEdit }) => {
const dispatch = useDispatch();
console.log("Edit Employee:", employees);
 
const handleDelete = id => {
dispatch(deleteEmployee(id));
};
 
return (
<div>
  <h2>Employee List</h2>
  <table>
    <thead>
      <tr>
        <th>Name</th>
        <th>Employee ID</th>
        <th>Project</th>
        <th>Actions</th>
      </tr>
    </thead>
<tbody>
  {employees.map(employee => (
  <tr key={employee.id}>
    <td>{employee.name}</td>
    <td>{employee.employeeId}</td>
    <td>{employee.project}</td>
    <td>
      <button onClick={() => onEdit(employee)} style={{ cursor: 'pointer' }}>Edit</button>
      <button onClick={() => handleDelete(employee.id)} style={{ cursor: 'pointer' }}>Delete</button>
    </td>
  </tr>
))}
</tbody>
</table>
</div>
);
};
 
export default EmployeeList;

