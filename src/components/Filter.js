import React from 'react';
import Data from './Employees.json';

export default function Filter(props) {

    return (
      <form className="search container mb-4">
        <div className="form-inline ">
          <label className='col-4' htmlFor="filter">Filter by role</label>
          <select className="form-control col-4" id="filter" name="filter">
            <option value={Data[0].role} key={Data[0].id}>
              {Data[0].role}
            </option>
            <option value={Data[1].role} key={Data[1].id}>
              {Data[1].role}
            </option>
            <option value={Data[3].role} key={Data[3].id}>
              {Data[3].role}
            </option>
          </select>
          <button type="submit" className='btn btn-success m-2'>Filter</button>
        </div>
      </form>
    );
  
}
