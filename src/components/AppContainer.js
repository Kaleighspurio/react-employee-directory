import React from 'react';
import Data from './Employees.json';
import Filter from './Filter';
import Table from './Table/Table';

export default class AppContainer extends React.Component {
  state = {
    filter: '',
    results: Data,
    noResults: false,
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
    const filteredResults = Data.filter(employee => employee.role === this.state.filter)
    // if there are results that match the filter, set the state.results to the new results
    // if no results, noResults is set to true, which is used for conditional rendering
    if (filteredResults.length !== 0) {
        this.setState({results: filteredResults, noResults: false});
    } else {
        this.setState({noResults: true})
        // alert('Oops, look like there was a typo or there are no roles that match your search.')
    }
    // clear the input
    this.setState({filter: ''});
  }

//   this resets the table by setting the state.results back to the original data from the Employee.json
  handleTableReset = (event) => {
      event.preventDefault()
      this.setState({results: Data});
  }

  handleSort = (event) => {
    event.preventDefault();
  }

//   Conditional rendering if there are no results that match the filtered search
  renderTable = () => {
      if (this.state.noResults === false) {
          return <Table handleSort={this.handleSort} data={this.state.results} />
      } else if (this.state.noResults === true) {
          return <p>Oops, looks like there were no results...</p>
      }
  }

  render() {
    return (
      <div className='container' >
        <Filter 
        handleFormSubmit={this.handleFormSubmit} 
        handleInputChange={this.handleInputChange} 
        filter={this.state.filter} 
        data={this.state.results} 
        handleTableReset={this.handleTableReset} />
        {this.renderTable()}
        {/* <Table handleSort={this.handleSort} data={this.state.results} /> */}
      </div>
    );
  }
}
