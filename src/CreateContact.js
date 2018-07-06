import React, {Component} from 'react';
import { Link } from 'react-router-dom';

// This component inserts new contact.
// https://youtu.be/5ySqH5Uag2M
class CreateContact extends Component{
  render(){
    return (
      <Link to="/" className="close-create-contact">Back</Link>
    )
  }
}

// export the component to make it availbale to other scripts (components)
export default CreateContact;
