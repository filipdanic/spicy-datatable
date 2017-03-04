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
    };
  }

  render() {
    const { demo } = this.state;
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>spicy-datatable</h2>
          <p>A React.js based library for smart datatables.</p>
          <p>🛠  <a href="https://github.com/filipdanic/spicy-datatable">Get started on Github!</a></p>
          <div>
            <button className="demoBtn" disabled={demo === 1} onClick={this.changeDemo.bind(this, 1)}>General demo</button>
            <button className="demoBtn" style={{ marginLeft: 10 }} disabled={demo === 2} onClick={this.changeDemo.bind(this, 2)}>Custom options demo</button>
          </div>
          <div style={{fontSize: 10}}>
            {demo === 1 ?
              <p>Demo #1: Default behaviour. Check the console log.</p> : <p>Demo #2: Customized search function, labels, display etc.</p>}
          </div>
        </div>
        <div className="App-intro" style={{ width: 800, padding: 20, marign: 20 }}>
          {demo === 1 ?
            <SpicyDatatable tableKey="demo-table-genral" columns={columns} rows={rows} /> :
            <SpicyDatatable tableKey="demo-table-custom-options" columns={columns} rows={rows} config={customOptions} />
          }
        </div>
      </div>
    );
  }

  changeDemo(demo) {
    this.setState({demo});
  }
}

export default App;
