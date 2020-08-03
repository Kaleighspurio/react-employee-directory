import React from 'react';
import Data from './Employees.json';

export default class Filter extends React.Component {
  state = {
    filter: '',
  };

  render() {
    return (
      <form className="search container">
        <div className="form-group">
          <label htmlFor="filter">Filter by role</label>
          <select className="form-control" id="filter" name="filter">
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
          <button type="submit" className='btn btn-success'>Filter</button>
        </div>
      </form>
    );
  }
}
