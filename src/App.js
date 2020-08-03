import React from 'react';
import Header from './components/Header';
import Filter from './components/Filter';
import Table from './components/Table/Table';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Filter />
      <Table />
    </div>
  );
}

export default App;
