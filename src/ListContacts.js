// Import react component class tobe able to use it
import React, {Component} from 'react';

class ListContacts extends Component {
  render() {
    // Check the log to see the array that is passed
    console.log(this.props.contacts);

    // map over the data passed from App.js: this.props.contacts
    // for every contact create a <li>
    // https://youtu.be/qkKNrTUvGJU
    return (
      <ol className="contact-list">
        {this.props.contacts.map(
          (contact) => (
            <li key={contact.id}>{contact.name}</li>
          )
        )}
      </ol>
    )
  }
}

// Make the component accessable by other scripts in this case App.js
export default ListContacts;
