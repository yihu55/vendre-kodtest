import React from 'react';

const Pagination = ({ employeesPerPage, totalEmployees, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalEmployees / employeesPerPage); i++) {
    pageNumbers.push(i);
  }


  return (
    <nav >
      <ul className='pagination' style={{alignItems:'center',justifyContent:'center'}}>
        {pageNumbers.map(number => (
          <li style={{listStyleType:'none' ,display:'inline', margin:'5px'}}key={number} className='page-item'>
            <a onClick={() => paginate(number)} href='!#' className='page-link'>
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;