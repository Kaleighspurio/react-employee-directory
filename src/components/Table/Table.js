import React from 'react';
import TableHeaders from './TableHeaders';
import TableData from './TableData';

export default function Table(props) {
    return (
      <div className="table-div">
        <table className="table">
          <TableHeaders handleNameSort={props.handleNameSort} handleIdSort={props.handleIdSort} />
          <TableData data={props.data} />
        </table>
      </div>
    );

}
