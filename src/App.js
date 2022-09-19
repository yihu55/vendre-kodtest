import React, { useState, useEffect } from 'react';
import Employees from './components/Employees';
import Pagination from './components/Pagination';
import { Container } from 'react-bootstrap';
import axios from 'axios';
import './App.css';

const App = () => {
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [employeesPerPage] = useState(6);

  useEffect(() => {
    const fetchEmployees = async () => {
      setLoading(true);
      const res = await axios.get('https://reqres.in/api/users');
      const res2 = await axios.get('https://reqres.in/api/users?page=2');
      setEmployees(res.data.data.concat(res2.data.data));
      setLoading(false);
    };
    fetchEmployees();
  }, []);

  //Get current employees
  const indexOfLastEmployee = currentPage * employeesPerPage;
  const indexOfFirstEmployee = indexOfLastEmployee - employeesPerPage;
  const currentEmployees = employees.slice(
    indexOfFirstEmployee,
    indexOfLastEmployee
  );

  //Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <Container>
      <Employees employees={currentEmployees} loading={loading} />
      <Pagination
        employeesPerPage={employeesPerPage}
        totalEmployees={employees.length}
        paginate={paginate}
      />
    </Container>
  );
};

export default App;
