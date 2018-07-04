// Import react component class tobe able to use it
import React, {Component} from 'react';
import PropTypes from 'prop-types';

// PropTypes is external npm package that allow us to
// validate data passed to this component are of type that the component is expecting.
// if the props.contacts is "string" instead of "array" the component will not work.
// 1. Install PropTypes: npm install --save prop-types
// 2. Restart server if it is running.
// 3. Import PropTypes - see above:: import PropTypes from 'prop-types';
// 5. Define what the props passed to the component type should be. Check inside the class ListContacts statis propTypes

// If the component has only render method,
// we can use simple function. a.k.a (Stateless Function)
// The function will have only one argument - the property passed from App.js (customers)
// https://youtu.be/tTxLxl_Bk3Y
class ListContacts extends Component{
    // Here you define what the props passed to the component type should be,
    // and wheter the property is required in order to work the ListContacts component.
    // If these props are not passed a message will be logged in console.
    // Now you know that the app brakes because of incorrect props passed to the component.
    static propTypes = {
      contacts: PropTypes.array.isRequired,
      onDeleteContact: PropTypes.func.isRequired
    }

    render(){
    // Check the log to see the array that is passed
    console.log(this.props.contacts);

    // map over the data passed from App.js: this.props.contacts
    // for every contact create a <li>
    // https://youtu.be/qkKNrTUvGJU
    // When using statless func instead of class, just return the JSX template
    return (
      <ol className="contact-list">
        {this.props.contacts.map(
          (contact) => (
          // For details: https://youtu.be/mnIuUk9cexA
            <li key={contact.id} className="contact-list-item">
              <div className="contact-avatar" style={{ backgroundImage:`url(${contact.avatarURL})`}}></div>
              <div className="contact-details">
                <p>{contact.name}</p>
                <p>{contact.email}</p>
              </div>
              {/* Invoke removeContact function from App component passing the "conatct" that is clicked*/}
              <button onClick={() => (this.props.onDeleteContact(contact))} className="contact-remove">
                Remove
              </button>
            </li>
          )
        )}
      </ol>
    )
  }
}

// Make the component accessable by other scripts in this case App.js
export default ListContacts;
