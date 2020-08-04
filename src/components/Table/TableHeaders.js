import React from 'react';

export default function TableHeaders(props) {
  return (
    <thead>
      <tr>
        <th scope="col"># <button className='btn btn-success btn-sm' onClick={props.handleIdSort} >Sort</button></th>
        <th scope="col">First Name</th>
        <th scope="col">Last Name <button className='btn btn-success btn-sm' onClick={props.handleNameSort} >Sort</button></th>
        <th scope="col">Role</th>
        <th scope="col">Email</th>
      </tr>
    </thead>
  );
}
