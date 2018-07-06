import React, {Component} from 'react';
import { Link } from 'react-router-dom';
// This is compnent is provided by Udacity
// and it allows to choose image file from local computer
// and render it on the screen.
// https://youtu.be/8JjYl5r3wLk?t=58
import ImageInput from './ImageInput.js';
// Allows to convert form input fields to object. Installed with: npm install --save form-serialize
import serializeForm from 'form-serialize';

// This component inserts new contact.
// https://youtu.be/5ySqH5Uag2M
class CreateContact extends Component{

  // On submit of form data will be grabbed from inputs and converted to an object
  // https://youtu.be/nf17fXAaRVs
  handleSubmit = (e) => {
    // Prevent default behaviour of form
    e.preventDefault();
    // Grab the input fields and convert them to object
    const values = serializeForm(e.target, { hash:true });
    // Log the values to see the serializer in action
    console.log(values);
  }

  render(){
    return (
      <div>
      <Link to="/" className="close-create-contact">Back</Link>
      <form onSubmit={this.handleSubmit} className="create-contact-form">
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
