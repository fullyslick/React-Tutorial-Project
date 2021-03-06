// NOTE install backend server recomnded by udacity:
// https://github.com/udacity/reactnd-contacts-server
// follow the README instructions
// run both app and backend server:
// app localhost:3000
// backend: localhost:5001

import React, {Component} from 'react';
// import the newly created ListContacts component
import ListContacts from './ListContacts.js';
// import all methods from ContactsAPI.js to be able to use them.
// We use them to fetch data, check componentDidMount()
import * as ContactsAPI from './utils/ContactsAPI.js';
// import the CreateContact component in CreateContact.js
import CreateContact from './CreateContact';
// allow us to use Router component to change components displayed based on url
import { Route } from 'react-router-dom';

class App extends Component {
  state = {
    // The data that will be using,
    // Right now it is an "contacts" object witn an empty array.
    // This array will be filled with data with a fetch to server localhost:5001, it holds json file.
    // This happens in componentDidMount()
    // In order to enable React to update this data below, it should be placed inside "state" variable.
    // By having a component manage its own state, any time there are changes made to that state,
    // React will know and automatically make the necessary updates to the page.
    // Having state outside the constructor() means it is a class field, which is a proposal for a new change to the language.
    // It currently isn't supported by JavaScript, but thanks to Babel's fantastic powers of transpiling, we can use it!
    // Check offical docs for "state": https://reactjs.org/docs/react-without-es6.html#setting-the-initial-state
    // https://youtu.be/RyO7B5KLXVY
    contacts : []
  }

  // This method is executed automatically by React when, the component is displayed on the DOM.
  // This is the place to make AJAX or SQL request to get some data.
  // The request is defined in getAll() method in ContactsAPI.js NOTE check the imports at the top.
  // After response is recieved from request, set new state to merge the data from the response with the empty array "contacts".
  // https://youtu.be/DoDbW-DlwlI
  componentDidMount(){
    ContactsAPI.getAll().then((responseWithContacts) => this.setState({ contacts: responseWithContacts }));
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
    }));


    // Removes "contact" from the server data base.
    // It uses ContactsAPI remove() method.
    // If you delete all "contacts", to populate them back, restart the server : localhost:5000 -> https://github.com/udacity/reactnd-contacts-server
    // https://youtu.be/vHj2BqAW7jA
    ContactsAPI.remove(contact);
  }

  // The data passed from the input fields are stored in the server database thanks to ContactsAPI.create method
  // https://youtu.be/hRTQp9pFr_c
  createContact = (valuesFromInput) => {
    ContactsAPI.create(valuesFromInput).then( insertedContact => {
      // After the contact is inserted to data base, insert it in the "state", to be visible on the page
      this.setState(oldState => ({
        // Merges the existing contacts with the newly inserted contact.
        contacts: oldState.contacts.concat(insertedContact)
      }));
    })
  }

  render() {
    // Render the ListContacts to the Dom
    // Pass the contacts array above to the ListContacts component,
    // using some property like "contacts". Check ListContacts.js
    // Pass the removeContact function to ListContacts.js component so it can use it.
    return (
      <div className="app">
      {/* path - the url which at whoch the component declared in "render" or "component" will be displayed
      exact - Components wrapped in the Router component will only render when it matches (at least some initial part of) the URL.
              If the 'exact' flag is set, the path will only match when it exactly matches the URL
      render - the component that should be displayed, but returned from function.
               Use render when there are properties to be passed to that component.
      component - e component that should be displayed. Use this when THERE NO PROPS to be used.
      https://youtu.be/KsuuFWh1VAg */}
      <Route
          exact path="/" render={ () => (
            <ListContacts
            contacts={this.state.contacts}
            onDeleteContact={this.removeContact}
            />
          )}
        />
      {/* Pass onCreateContact method to CreateContact component */}
      <Route path="/create" render={ ({history}) => (
        <CreateContact
           onCreateContact = {(valuesFormInput) => {
            this.createContact(valuesFormInput)
            history.push('/')
          }}
        />
      )} />
    </div>
    )
  }
}

export default App;
