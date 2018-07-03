import React, { Component } from 'react';

class ContactList extends React.Component{
  render(){

  // Get the data from the "contacts" property of the <ContactList />
  const people = this.props.contacts;

  // Create an <ul> and then <li> for every contact
  return (<ul>
    { people.map(
      person => (<li key={person.name}>{person.name}</li>)
     )}
    </ul>);
 }
}

// Here the App component returns the ContactList component
// Check this video: NOTE https://youtu.be/PtospOO4qrs
class App extends Component {
  render() {
    return (
      <div className="App">
        <ContactList contacts={[
          {name: 'Derrick'},
          {name: 'Scott'},
          {name: 'Eve'}
        ]}/>
        <ContactList contacts={[
          {name: 'John'},
          {name: 'Alex'},
          {name: 'Donna'}
        ]}/>
        <ContactList contacts={[
          {name: 'Elvis'},
          {name: 'Jack'},
          {name: 'Adam'}
        ]}/>
      </div>
    )
  }
}

export default App;
