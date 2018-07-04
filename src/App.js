// NOTE install backend server recomnded by udacity:
// https://github.com/udacity/reactnd-contacts-server
// follow the README instructions
// run both app and backend server:
// app localhost:3000
// backend: localhost:5001

import React, {Component} from 'react';
// import the newly created ListContacts component
import ListContacts from './ListContacts.js'

class App extends Component {
  state = {
    // The data that will be using,
    // later it will be replaced by fetch to server localhost:5001
    // In order to enable React to update this data below, it should be placed inside "state" variable.
    // By having a component manage its own state, any time there are changes made to that state,
    // React will know and automatically make the necessary updates to the page.
    // Having state outside the constructor() means it is a class field, which is a proposal for a new change to the language.
    // It currently isn't supported by JavaScript, but thanks to Babel's fantastic powers of transpiling, we can use it!
    // Check offical docs for "state": https://reactjs.org/docs/react-without-es6.html#setting-the-initial-state
    // https://youtu.be/RyO7B5KLXVY
    contacts : [
      {
        "id": "ryan",
        "name": "Ryan Florence",
        "email": "ryan@reacttraining.com",
        "avatarURL": "http://localhost:5001/ryan.jpg"
      },
      {
        "id": "michael",
        "name": "Michael Jackso",
        "email": "michael@reacttraining.com",
        "avatarURL": "http://localhost:5001/michael.jpg"
      },
      {
        "id": "tyler",
        "name": "Tyler McGinnis",
        "email": "tyler@reacttraining.com",
        "avatarURL": "http://localhost:5001/tyler.jpg"
      }
    ]
  }

  // Removes contact from state.contact when "x" btn us clicked in ListContacts
  // This method will be passed as new property "onDeleteContact" to <ListContacts /> below.
  // Then then ListContacts.js will be able to access it and invoke that function using onClick={ (contact) => props.onDeleteContact}
  // The argument of this function is the "contact" object passed from ListContacts.js
  // https://youtu.be/d3UNPA863f4
  removeContact = (contact) => {
    // Whenever setState() is called, the component also calls render() with the new state
    // The argument of this method can be a new state object like this: { contacts: [...somedata]} OR
    // A function that (ES6 in this case) that takes as argument the "oldState" and
    // returns a new object with the new state filtered without "contact" passed.
    // NOTE the brackets after => ({ the new state object })
    this.setState((oldState) => ({
      // Here we update with a new state. It will also have "contacts" object
      // But the new "contacts" object will be an array that does not include the passed in removeContact "contact" object
      // So it will include the old State without the passed "contact" object.
      // We use "id" property to filter the contact that should be deleted.
      contacts: oldState.contacts.filter( (singleOldContact) => singleOldContact.id !== contact.id)
    }))
  }

  render() {
    // Render the ListContacts to the Dom
    // Pass the contacts array above to the ListContacts component,
    // using some property like "contacts". Check ListContacts.js
    // Pass the removeContact function to ListContacts.js component so it can use it.
    return (
      <ListContacts onDeleteContact={this.removeContact} contacts={this.state.contacts} />
    )
  }
}

export default App;
