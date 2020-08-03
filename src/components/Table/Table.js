import React from 'react';
import './Table.css';

function Table() {
  return (
    <div className="Table">
      <table className="table">
        <TableHeader />
        <TableData />
      </table>
    </div>
  );
}

export default Table;
