import React from 'react';

export default function TableHeaders(props) {
  return (
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Employee <button className='btn btn-success btn-sm' onClick={props.handleSort} >Sort</button></th>
        <th scope="col">Role</th>
        <th scope="col">Email</th>
      </tr>
    </thead>
  );
}
