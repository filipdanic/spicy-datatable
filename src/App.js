import React, { Component } from 'react';
import SpicyDatatable from './spicy-datatable/SpicyDatatable.js';
import logo from './logo.svg';
import './App.css';

import data from './demo-data.js';
const { columns, rows } = data;

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <div className="App-intro" style={{ width: 450 }}>
          <SpicyDatatable columns={columns} rows={rows} />
        </div>
      </div>
    );
  }
}

export default App;
