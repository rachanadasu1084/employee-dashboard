import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addEmployee, editEmployee as editEmployeeAction } from '../actions/employeeActions';
 
const EmployeeForm = ({ editMode, editEmployee, onCancelEdit }) => {
const [name, setName] = useState('');
const [employeeId, setEmpId] = useState('');
const [project, setProject] = useState('');
const dispatch = useDispatch();
 
useEffect(() => {
  console.log("Edit Employee Data:", editEmployee);
if (editMode && editEmployee) {
setName(editEmployee.name);
setEmpId(editEmployee.employeeId);
setProject(editEmployee.project);
} else {
setName('');
setEmpId('');
setProject('');
}
}, [editMode, editEmployee]);
 
// const handleCancel = () => {
// onCancelEdit();
// };
 
const handleSubmit = e => {
e.preventDefault();
const employee = { name, employeeId, project };
console.log("Edit Employee Data to save:", employee);
 
if (editMode && editEmployee) {
dispatch(editEmployeeAction(editEmployee.id, employee)); 
} else {
dispatch(addEmployee(employee));
}
//onCancelEdit();
setName('');
setEmpId('');
setProject('');
};
 
return (
<div>
<h2>{editMode ? 'Edit Employee' : 'Add Employee'}</h2>
<form onSubmit={handleSubmit}>
<input type="text" placeholder="Name" value={name} onChange={e => setName(e.target.value)} />
<input type="text" placeholder="Employee ID" value={employeeId} onChange={e => setEmpId(e.target.value)} />
<input type="text" placeholder="Project" value={project} onChange={e => setProject(e.target.value)} />
<button type="submit" style={{ cursor: 'pointer' }}>{editMode ? 'Save Changes' : 'Add Employee'}</button>
{editMode && <button onClick={onCancelEdit} style={{ cursor: 'pointer' }}>Cancel</button>}
</form>
</div>
);
};
 
export default EmployeeForm;




// import React, { useState, useEffect } from 'react';
// import { useDispatch } from 'react-redux';
// import { addEmployee, editEmployee } from '../actions/employeeActions';
 
// const EmployeeForm = ({ editMode, editEmployeeData, onCancelEdit }) => {
// const [name, setName] = useState('');
// const [employeeId, setEmpId] = useState('');
// const [project, setProject] = useState('');
// const dispatch = useDispatch();
// useEffect(() => {
// if (editMode && editEmployeeData) {
// setName(editEmployeeData.name);
// setEmpId(editEmployeeData.employeeId);
// setProject(editEmployeeData.project);
// }
// }, [editMode, editEmployee]);
 
// const handleCancel=()=>{
//   setName('');
//   setEmpId('');
//   setProject('');
//   onCancelEdit();
// };
// const handleSubmit = e => {
// e.preventDefault();
// const employee = { name, employeeId, project };
// if (editMode && typeof editEmployeeData === 'function') {
// dispatch(editEmployee(editEmployeeData.id, employee));
// onCancelEdit();
// } else {
// dispatch(addEmployee(employee));
// setName(employee.name);
// setEmpId(employee.employeeId);
// setProject(employee.project);
// }
// };
 
// return (
// <div>
// <h2>{editMode ? 'Edit Employee' : 'Add Employee'}</h2>
// <form onSubmit={handleSubmit}>
// <input type="text" placeholder="Name" value={name} onChange={e => setName(e.target.value)} />
// <input type="text" placeholder="Employee ID" value={employeeId} onChange={e => setEmpId(e.target.value)} />
// <input type="text" placeholder="Project" value={project} onChange={e => setProject(e.target.value)} />
// <button type="submit" style={{cursor:'pointer'}}>{editMode ? 'Save Changes' : 'Add Employee'}</button>
// {editMode && <button onClick={handleCancel} style={{cursor:'pointer'}}>Cancel</button>}
// </form>
// </div>
// );
// };
 
// export default EmployeeForm;