import React from 'react';

export default function TableData(props) {
  return (
    //   map through all results and create a row in the table for each employee in the results
    <tbody>
      {props.data.map((employee) => (
        <tr key={employee.id} >
          <td>{employee.id}</td>
          <td>{employee.name}</td>
          <td>{employee.role}</td>
          <td>{employee.email}</td>
        </tr>
      ))}
    </tbody>
  );
}
