import React from 'react';
import Data from './Employees.json';
import Filter from './Filter';
import Table from './Table/Table';

export default class AppContainer extends React.Component {
  state = {
    filter: '',
    results: Data,
  };

//   set the filter in the state to what is entered in the input
  handleInputChange = (event) => {
    const search = event.target.name;
    const value = event.target.value;
    this.setState({ [search]: value });
  }

//   TODO: change the alert to something better...
  handleFormSubmit = (event) => {
    event.preventDefault();
    const filteredResults = this.state.results.filter(employee => employee.role === this.state.filter)
    console.log(filteredResults.length)
    // if there are results that match the filter, set the state.results to the new results
    // if no results, a message appears
    if (filteredResults.length !== 0) {
        this.setState({results: filteredResults});
    } else {
        alert('Oops, look like there was a typo or there are no roles that match your search.')
    }
  }

  handleTableReset = (event) => {
      event.preventDefault()
      this.setState({results: Data});
  }

  render() {
    return (
      <div className='container' >
        <Filter handleFormSubmit={this.handleFormSubmit} handleInputChange={this.handleInputChange} filter={this.state.filter} data={this.state.results} handleTableReset={this.handleTableReset} />
        <Table data={this.state.results} />
      </div>
    );
  }
}
