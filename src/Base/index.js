/** Copyright (c) 2019 T. Rowe Price. All rights reserved. */

import './Base.css';

import React from 'react';
import Modal from '../model'
//const CustomAccountGroups = () => {
class Base extends React.Component {
  state={
    isOpen:true,
  }
  toggleModal=(e)=>{
    this.setState({
      isOpen:e
    })
  }
  render() {
    return (
      <div>
        <h1> Base</h1>    
        <Modal close={this.state.isOpen?this.toggleModal:null}/>    
      </div>
    );
  }
}

export default Base;