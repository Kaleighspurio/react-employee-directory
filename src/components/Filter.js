import React from 'react';
import Data from './Employees.json';

export default function Filter(props) {

    return (
      <form className="search container mb-4">
        <div className="form-inline ">
          <label className='col-4' htmlFor="filter">Filter by role</label>
          <input name='filter' type='text' onChange={props.handleInputChange} value={props.filter} className='form-control' placeholder='Enter a role to filter by' id='filter'/>
          <button type="submit" className='btn btn-success m-2' onClick={props.handleFormSubmit} >Filter</button>
        </div>
      </form>
    );
  
}
