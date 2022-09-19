import React from 'react';
import {Row,Col} from 'react-bootstrap';
import Employee from './Employee';

const Employees = ({ employees, loading }) => {
  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
 
        <Row style={{ display: 'flex', flexDirection: 'row' ,flexWrap: 'wrap' }}>
            {employees&&employees.map(employee =>
                    <Col key={employee.id} ><Employee employee={employee}/></Col> 
            
            )}
        </Row>

 
  );
};

export default Employees;