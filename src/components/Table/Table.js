import React from 'react';
import TableHeaders from './TableHeaders';
import TableData from './TableData';

export default function Table(props) {
    return (
      <div className="table-div">
        <table className="table">
          <TableHeaders />
          <TableData data={props.data} />
        </table>
      </div>
    );

}
