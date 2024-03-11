import axios from 'axios';
 
export const FETCH_EMPLOYEES = 'FETCH_EMPLOYEES';
export const ADD_EMPLOYEE = 'ADD_EMPLOYEE';
export const EDIT_EMPLOYEE = 'EDIT_EMPLOYEE';
export const DELETE_EMPLOYEE = 'DELETE_EMPLOYEE';
 
export const fetchEmployees = () => async dispatch => {
try {
const res = await axios.get('https://localhost:7073/employee');
dispatch({
type: FETCH_EMPLOYEES,
payload: res.data,
});
} catch (err) {
console.error('Error fetching employees: ', err);
}
};
 
export const addEmployee = employee => async dispatch => {
try {
const res = await axios.post('https://localhost:7073/employee/add', employee);
dispatch({
type: ADD_EMPLOYEE,
payload: res.data,
});
} catch (err) {
console.error('Error adding employee: ', err);
}
};
 
export const editEmployee = (id, updatedEmployee) => async dispatch => {
try {
const res = await axios.put(`https://localhost:7073/employee/${id}`, updatedEmployee);
dispatch({
type: EDIT_EMPLOYEE,
payload: res.data,
});
} catch (err) {
console.error('Error editing employee: ', err);
}
};
 
export const deleteEmployee = id => async dispatch => {
try {
await axios.delete(`https://localhost:7073/employee/${id}`);
dispatch({
type: DELETE_EMPLOYEE,
payload: id,
});
} catch (err) {
console.error('Error deleting employee: ', err);
}
};

// import axios from 'axios';
 
// export const FETCH_EMPLOYEES = 'FETCH_EMPLOYEES';
// export const ADD_EMPLOYEE = 'ADD_EMPLOYEE';
// export const EDIT_EMPLOYEE = 'EDIT_EMPLOYEE';
// export const DELETE_EMPLOYEE = 'DELETE_EMPLOYEE';
 
// export const fetchEmployees = () => async dispatch => {
// try {
// const res = await axios.get('https://localhost:7073/employees');
// dispatch({
// type: FETCH_EMPLOYEES,
// payload: res.data,
// });
// } catch (err) {
// console.error('Error fetching employees: ', err);
// }
// };
 
// export const addEmployee = employee => async dispatch => {
// try {
// const res = await axios.post('http://localhost:3001/employees', employee);
// dispatch({
// type: ADD_EMPLOYEE,
// payload: res.data,
// });
// } catch (err) {
// console.error('Error adding employee: ', err);
// }
// };
 
// export const editEmployee = (id, updatedEmployee) => async dispatch => {
// try {
// const res = await axios.put(`http://localhost:3001/employees/${id}`, updatedEmployee);
// dispatch({
// type: EDIT_EMPLOYEE,
// payload: res.data,
// });
// } catch (err) {
// console.error('Error editing employee: ', err);
// }
// };
 
// export const deleteEmployee = id => async dispatch => {
// try {
// await axios.delete(`http://localhost:3001/employees/${id}`);
// dispatch({
// type: DELETE_EMPLOYEE,
// payload: id,
// });
// } catch (err) {
// console.error('Error deleting employee: ', err);
// }
// };