// Import react component class tobe able to use it
import React, {Component} from 'react';

class ListContacts extends Component{
  render(){
    // Check the log to see the array that is passed
    console.log(this.props.contacts);
    return (
      <ol className="contact-list">Order List</ol>
    )
  }
}

// Make the component accessable by other scripts in this case App.js
export default ListContacts;
