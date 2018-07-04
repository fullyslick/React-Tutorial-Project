// Import react component class tobe able to use it
import React from 'react';
import PropTypes from 'prop-types';

// PropTypes is external npm package that allow us to
// validate data passed to this component are of type that the component is expecting.
// if the props.contacts is "string" instead of "array" the component will not work.
// 1. Install PropTypes: npm install --save prop-types
// 2. Restart server if it is running.
// 3. Import PropTypes - see above:: import PropTypes from 'prop-types';
// 4. Replace import React, {Component} from 'react'; WITH import React, from 'react';
// 5. Define what the props passed to the component type should be. Check at the bottom.

// If the component has only render method,
// we can use simple function. a.k.a (Stateless Function)
// The function will have only one argument - the property passed from App.js (customers)
// https://youtu.be/tTxLxl_Bk3Y
function ListContacts(props){
    // Check the log to see the array that is passed
    console.log(props.contacts);

    // map over the data passed from App.js: this.props.contacts
    // for every contact create a <li>
    // https://youtu.be/qkKNrTUvGJU
    // When using statless func instead of class, just return the JSX template
    return (
      // Replace this.props.contacts with props.contacts,
      // there is no longer need to use "this"
      <ol className="contact-list">
        {props.contacts.map(
          (contact) => (
          // For details: https://youtu.be/mnIuUk9cexA
            <li key={contact.id} className="contact-list-item">
              <div className="contact-avatar" style={{ backgroundImage:`url(${contact.avatarURL})`}}></div>
              <div className="contact-details">
                <p>{contact.name}</p>
                <p>{contact.email}</p>
              </div>
              {/* Invoke removeContact function from App component passing the "conatct" that is clicked*/}
              <button onClick={() => (props.onDeleteContact(contact))} className="contact-remove">
                Remove
              </button>
            </li>
          )
        )}
      </ol>
    )
}

// Here you define what the props passed to the component type should be,
// and wheter the property is required in order to work the ListContacts component.
// If these props are not passed a message will be logged in console.
// Now you know that the app brakes because of incorrect props passed to the component.
ListContacts.propTypes = {
  contacts: PropTypes.array.isRequired,
  onDeleteContact: PropTypes.func.isRequired
}

// Make the component accessable by other scripts in this case App.js
export default ListContacts;
