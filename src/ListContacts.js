// Import react component class tobe able to use it
import React, {Component} from 'react';

class ListContacts extends Component{
  render(){
    return (
      <ol>Order List</ol>
    )
  }
}

// Make the component accessable by other scripts in this case App.js
export default ListContacts;
