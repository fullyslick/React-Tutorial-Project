import React, {Component} from 'react';
import { Link } from 'react-router-dom';
// This is compnent is provided by Udacity
// and it allows to choose image file from local computer
// and render it on the screen.
// https://youtu.be/8JjYl5r3wLk?t=58
import ImageInput from './ImageInput.js';

// This component inserts new contact.
// https://youtu.be/5ySqH5Uag2M
class CreateContact extends Component{
  render(){
    return (
      <div>
      <Link to="/" className="close-create-contact">Back</Link>
      <form className="create-contact-form">
        <ImageInput
          className="create-contact-avatar-input"
          name="avatrURL"
          maxHeight={64}
        />
        <div className="create-contact-details">
          <input type="text" name="name" placeholder="Name"/>
          <input type="text" name="email" placeholder="Email"/>
          <button>Add Contact</button>
        </div>
      </form>
      </div>
    )
  }
}

// export the component to make it availbale to other scripts (components)
export default CreateContact;
