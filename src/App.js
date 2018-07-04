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

  render() {
    // Render the ListContacts to the Dom
    // Pass the contacts array above to the ListContacts component,
    // using some property like "contacts". Check ListContacts.js
    return (
      <ListContacts contacts={this.state.contacts} />
    )
  }
}

export default App;
