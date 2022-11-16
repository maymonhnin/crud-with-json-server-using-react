import axios from 'axios';

const EMPLOYEE_API_BASE_URL = "http://localhost:3006/users";

class EmployeeService {

    getEmployees(){
        return axios.get(EMPLOYEE_API_BASE_URL); //read/ get all employees
    }

    createEmployee(employee){
        return axios.post(EMPLOYEE_API_BASE_URL, employee); //create
    }

    getEmployeeById(employeeId){
        return axios.get(EMPLOYEE_API_BASE_URL + '/' + employeeId); //read/ get one employee by id
    }

    updateEmployee(employee, employeeId){
        return axios.put(EMPLOYEE_API_BASE_URL + '/' + employeeId, employee); // update employee data
    }

    deleteEmployee(employeeId){
        return axios.delete(EMPLOYEE_API_BASE_URL + '/' + employeeId); // delete employee record
    }
}

export default new EmployeeService();