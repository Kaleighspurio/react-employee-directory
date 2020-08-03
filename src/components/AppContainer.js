import React from 'react';
import Data from './Employees.json';
import Filter from './Filter';
import Table from './Table/Table';

export default class AppContainer extends React.Component {
  state = {
    filter: '',
    results: Data,
  };

  handleInputChange = (event) => {
    const search = event.target.name;
    const value = event.target.value;
    this.setState({ [search]: value });
  }

  handleFormSubmit = (event) => {
    event.preventDefault();
    const filteredResults = this.state.results.filter(employee => employee.role === this.state.filter)
    this.setState({results: filteredResults});
  }

  handleTableReset = (event) => {
      event.preventDefault()
      this.setState({results: Data});
  }

  render() {
    return (
      <div className='container' >
        <Filter handleFormSubmit={this.handleFormSubmit} handleInputChange={this.handleInputChange} filter={this.state.filter} />
        <Table data={this.state.results} />
      </div>
    );
  }
}
