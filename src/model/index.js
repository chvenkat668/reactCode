/** Copyright (c) 2019 T. Rowe Price. All rights reserved. */

import './Model.css';

import React from 'react';

//const CustomAccountGroups = () => {
class Model extends React.Component {
  state={
    isOpen:false,
  }
  toggleModal=(e)=>{
    this.setState({
      isOpen:e
    })
  }
  constructor(props){
    super(props);
    console.log("close");
    console.log(this.props);
  }
  render() {
    return (
      <div className="group-grid">
        <div className="group-filters">
          <div className="group-texbox">
            <label>
              Group Name 
            </label>
            <input type="text"/>
          </div>
          <div className="group-f">
            <ul>
              <li><b>Select Accounts</b></li>             
              <li className="right"><button>Clear All</button></li>
              <li  className="right"><button>Select All</button></li>
            </ul>
          </div>
        </div>
        <div className="grid-panel">
          <div className="grid-header">
              <p className="g-h1">Non-Retirement</p>
              <div className="g-h-b">
                  <div className="g-h-b-checkbox">
                    <input type="checkbox"/>
                  </div>
                  <div className="g-h-b-title">
                    <b>Rollover IRA </b>
                    <p>Agent Smith </p>
                  </div>
              </div>
          </div>
          <div className="grid-body">
            <table>
              <tbody>
              <tr>
                  <td>
                    <input type="checkbox"/>
                  </td>
                  <td>
                     Asia opportunities
                  </td>
                  <td>
                    132423423423423
                  </td>
                </tr>
                <tr>
                  <td>
                    <input type="checkbox"/>
                  </td>
                  <td>
                     Asia opportunities
                  </td>
                  <td>
                    132423423423423
                  </td>
                </tr>
                <tr>
                  <td>
                    <input type="checkbox"/>
                  </td>
                  <td>
                     Asia opportunities
                  </td>
                  <td>
                    132423423423423
                  </td>
                </tr>
                <tr>
                  <td>
                    <input type="checkbox"/>
                  </td>
                  <td>
                     Asia opportunities
                  </td>
                  <td>
                    132423423423423
                  </td>
                </tr>
                <tr>
                  <td>
                    <input type="checkbox"/>
                  </td>
                  <td>
                     Asia opportunities
                  </td>
                  <td>
                    132423423423423
                  </td>
                </tr>
                <tr>
                  <td>
                    <input type="checkbox"/>
                  </td>
                  <td>
                     Asia opportunities
                  </td>
                  <td>
                    132423423423423
                  </td>
                </tr>
                </tbody>
            </table>

        </div>
        </div>


        <div className="grid-panel">
          <div className="grid-header">
              <p className="g-h1">Non-Retirement</p>
              <div className="g-h-b">
                  <div className="g-h-b-checkbox">
                    <input type="checkbox"/>
                  </div>
                  <div className="g-h-b-title">
                    <b>Rollover IRA </b>
                    <p>Agent Smith </p>
                  </div>
              </div>
          </div>
          <div className="grid-body">
            <table>
              <tbody>
              <tr>
                  <td>
                    <input type="checkbox"/>
                  </td>
                  <td>
                     Asia opportunities
                  </td>
                  <td>
                    132423423423423
                  </td>
                </tr>
                <tr>
                  <td>
                    <input type="checkbox"/>
                  </td>
                  <td>
                     Asia opportunities
                  </td>
                  <td>
                    132423423423423
                  </td>
                </tr>
                <tr>
                  <td>
                    <input type="checkbox"/>
                  </td>
                  <td>
                     Asia opportunities
                  </td>
                  <td>
                    132423423423423
                  </td>
                </tr>
                <tr>
                  <td>
                    <input type="checkbox"/>
                  </td>
                  <td>
                     Asia opportunities
                  </td>
                  <td>
                    132423423423423
                  </td>
                </tr>
                <tr>
                  <td>
                    <input type="checkbox"/>
                  </td>
                  <td>
                     Asia opportunities
                  </td>
                  <td>
                    132423423423423
                  </td>
                </tr>
                <tr>
                  <td>
                    <input type="checkbox"/>
                  </td>
                  <td>
                     Asia opportunities
                  </td>
                  <td>
                    132423423423423
                  </td>
                </tr>
                </tbody>
            </table>

        </div>
        </div>

        
      </div>
    );
  }
}

export default Model;