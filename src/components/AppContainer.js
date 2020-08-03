import React from 'react';
import Data from './Employees.json';
import Filter from './Filter';
import Table from './Table/Table';

export default class AppContainer extends React.Component {
  state = {
    filter: '',
    results: Data,
  };

  render() {
    return (
      <div>
        <Filter />
        <Table />
      </div>
    );
  }
}
