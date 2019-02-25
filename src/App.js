/* eslint-disable */
import React, { Component } from 'react';
import SpicyDatatable from './spicy-datatable/SpicyDatatable.js';
import logo from './logo.svg';
import style from './App.css';
import data from './demo-data.js';
const { columns, rows, customOptions } = data;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      demo: 1,
      clickDebugger: <p>Try clicking on a row.</p>,
    };
    this.onSelectRow = this.onSelectRow.bind(this);
  }

  render() {
    const { demo, clickDebugger } = this.state;
    const rowsWithCallback = rows.map((r) => (Object.assign({}, r, { onClickHandler: this.onSelectRow })));

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>spicy-datatable</h2>
          <p>A React.js based library for smart datatables.</p>
          <p>🛠  <a href="https://github.com/filipdanic/spicy-datatable">Get started on Github!</a></p>
          <div>
            <button className="demoBtn" disabled={demo === 1} onClick={this.changeDemo.bind(this, 1)}>
              General demo
            </button>
            <button className="demoBtn" style={{ marginLeft: 10 }} disabled={demo === 2} onClick={this.changeDemo.bind(this, 2)}>
              Custom options demo
            </button>
          </div>
          <div style={{fontSize: 10}}>
            {demo === 1 ?
              <p>Genral Demo: Default behaviour. Try clicking on the name and state columns to sort the table.</p> : <p>Custom Options: Customized search function, labels, display etc.</p>}
          </div>
        </div>
        <div className="App-intro">
          {clickDebugger ? clickDebugger : null}
          {demo === 1 ?
            <SpicyDatatable tableKey="demo-table-genral" columns={columns} rows={rowsWithCallback} config={{ showDownloadCSVButton: true }}/> :
            <SpicyDatatable tableKey="demo-table-custom-options" columns={columns} rows={rowsWithCallback} config={customOptions} />
          }
        </div>
      </div>
    );
  }

  changeDemo(demo) {
    this.setState({ demo, clickDebugger: <p>Try clicking on a row.</p> });
  }

  onSelectRow(e, row, index) {
    this.setState({ clickDebugger: <p>Clicked on row with <code>id: {row.id}</code> and data <code>{row.name} / {row.email} / {row.state}</code></p> })
  }
}

export default App;
