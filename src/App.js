// NOTE install backend server recomnded by udacity:
// https://github.com/udacity/reactnd-contacts-server
// follow the README instructions
// run both app and backend server:
// app localhost:3000
// backend: localhost:5001

import React, {Component} from 'react';
// import the newly created ListContacts component
import ListContacts from './ListContacts.js'

// The data that will be using,
// later it will be replaced by fetch to server localhost:5001
const contacts = [
  {
    "id": "ryan",
    "name": "Ryan Florence",
    "email": "ryan@reacttraining.com",
    "avatarURL": "http://localhost:5001/ryan.jpg"
  },
  {
    "id": "michael",
    "name": "Michael Jackson",
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

class App extends Component {
  render() {
    // Render the ListContacts to the Dom
    // Pass the contacts array above to the ListContacts component,
    // using some property like "contacts". Check ListContacts.js
    return (
      <ListContacts contacts={contacts} />
    )
  }
}

export default App;
