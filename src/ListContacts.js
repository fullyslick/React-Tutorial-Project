// Import react component class to be able to use it
import React, {Component} from 'react';
import PropTypes from 'prop-types';
// These are packages installed with npm that helps filtering the results.
// 'escape-string-regexp' - escape/ignores strings that contain some charactars like $ ""
import escapeRegExp from 'escape-string-regexp';
// "sort-by" - sorts the result alphabeticlly
import sortBy from 'sort-by';
// The link component will allow to update browsers URL on click of link
import { Link } from 'react-router-dom';


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

    // 1. The user enters text into the input field.
    // 2. An event listener invokes the updateQuery() function on every onChange event.
    // 3. updateQuery() then calls setState(), merging in the new state to update the component's internal state.
    // 4. Because its state has changed, the ListContacts component re-renders.
    // https://youtu.be/1Tkb9SGkOgI
    state = {
      query : ''
    }

    // Updates the "state".
    // (queryFromInput) is passed from JSX template below, this is the value from the input field.
    // The method sets new "query" value in the "state".
    // Then the input is re-rendered with the new "state" as input value.
    // .trim() - removes white spaces.
    updateQuery = (queryFromInput) => {
      this.setState({query: queryFromInput.trim()})
    }

    // Resets the state { query:  } to an empty string.
    // https://youtu.be/ykZMChM_Uu8
    clearQuery = () => {
      this.setState({ query: ''})
    }

    render(){
    // This var holds only those props that match the "query"
    let showingContacts;

    // If the user has typed inside input field, then this.state,query becomes true.
    // So assign to showingContacts only those props that match the query.
    // Else - the input is empty and display all the results
    // https://youtu.be/xIlkBGmRq0g
    if (this.state.query) {
      // Object the match specific text in a pattern
      const match = new RegExp(escapeRegExp(this.state.query), 'i');
      // Assign to showingContacts only those props that match the query
      showingContacts = this.props.contacts.filter((contact) => match.test(contact.name));
    } else {
      showingContacts = this.props.contacts;
    }

    // Reorganise showingContacts array,
    // by putting objects in alphabetical order of the "name" property
    showingContacts.sort(sortBy('name'));

    // map over the data passed from App.js: this.props.contacts
    // for every contact create a <li>
    // https://youtu.be/qkKNrTUvGJU
    // When using statless func instead of class, just return the JSX template
    return (
      <div className="list-contacts">
       <div className="list-contacts-top">
        <input
          className="search-contacts"
          type="text"
          placeholder="Search"
          // Note that the value attribute is set on the <input> element.
          // Our displayed value will always be the value in the component's state, making our state the "single source of truth."
          value={this.state.query}
          // onChange invokes function that invokes updateQuery with the value of the input as argument
          onChange={(event) => this.updateQuery(event.target.value)}
        />
        <Link
          // Link componet will render <a href="/create">Add Contact</a>
          // use to="link-location" inbstead href="link-location"
          // By passing a "to" property to the Link component, you tell your app which path to route to.
          to="/create"
          className="add-contact"
          >Add Contact</Link>
       </div>

       {/* Display a message <div> only if the showingContacts.lenght is different from this.props.contats.length
         Here ternary opeartors are used instead of "if"
         https://youtu.be/ykZMChM_Uu8  */}
       {showingContacts.length !== this.props.contacts.length && (
         <div className="showing-contacts">
           <span>Now showing {showingContacts.length} of {this.props.contacts.length} results total.</span>
           {/* When Show all is clicked executed clearQuery method defined above */}
           <button onClick={ () => (this.clearQuery())}>Show all</button>
         </div>
       )}

       <ol className="contact-list">
        {showingContacts.map(
          (contact) => (
          // For details: https://youtu.be/mnIuUk9cexA
            <li key={contact.id} className="contact-list-item">
              <div className="contact-avatar" style={{ backgroundImage:`url(${contact.avatarURL})`}}></div>
              <div className="contact-details">
                <p>{contact.name}</p>
                <p>{contact.email}</p>
              </div>
              {/* Invoke removeContact function from App component passing the "conatct" that is clicked*/}
              <button onClick={() => {this.props.onDeleteContact(contact)}} className="contact-remove">
                Remove
              </button>
            </li>
          )
        )}
       </ol>
      </div>
    )
  }
}

// Make the component accessable by other scripts in this case App.js
export default ListContacts;
