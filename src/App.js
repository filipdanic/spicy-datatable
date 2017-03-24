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
      clickDebugger: 'Try clicking on a row.',
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
              <p>Genral Demo: Default behaviour.</p> : <p>Custom Options: Customized search function, labels, display etc.</p>}
          </div>
        </div>
        <div className="App-intro">
          {clickDebugger ? <p><small>{clickDebugger}</small></p> : null}
          {demo === 1 ?
            <SpicyDatatable tableKey="demo-table-genral" columns={columns} rows={rowsWithCallback} /> :
            <SpicyDatatable tableKey="demo-table-custom-options" columns={columns} rows={rowsWithCallback} config={customOptions} />
          }
        </div>
      </div>
    );
  }

  changeDemo(demo) {
    this.setState({ demo, clickDebugger: 'Try clicking on a row.' });
  }

  onSelectRow(e, row, index) {
    const { id } = row;
    this.setState({ clickDebugger: `Clicked on row with id ${row.id} (${row.name} / ${row.email} / ${row.state}).` })
  }
}

export default App;
