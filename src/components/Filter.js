import React from 'react';

export default function Filter(props) {
    // lets give options of possible filters on the input...
    const roleArray = []
    props.data.forEach(entry => {
        roleArray.push(entry.role)
    })
    // This makes an array of only unique roles
    // credit for this small code snippet: https://stackoverflow.com/questions/1960473/get-all-unique-values-in-a-javascript-array-remove-duplicates
    const uniqueRoles = Array.from(new Set(roleArray))

    return (
      <form className="search container mb-4 col-8">
        <div className="form-inline ">
          <label className='mr-2' htmlFor="filter">Filter by role</label>
          <input 
          name='filter' 
          list='roles' 
          type='text' 
          onChange={props.handleInputChange} 
          value={props.filter} 
          className='form-control col-6' 
          placeholder='Enter a role to filter by' 
          id='filter'/>
          <datalist id='roles'>
              {uniqueRoles.map(role => (
                  <option value={role} key={role} />
              ))}
            </datalist>
          <button type="submit" className='btn btn-success m-2' onClick={props.handleFormSubmit} >Filter</button>
          <button className='btn btn-secondary' onClick={props.handleTableReset} >Reset</button>
        </div>
      </form>
    );
  
}
