import React from 'react';
import './ContactPage.css'

class ContactPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fields: {
        first_name: "",
        last_name: "",
        email: "",
        avatar: "",
      },
      errors: {
        first_name: "",
        last_name: "",
        email: "",
        avatar: "",
      }
    };
  }

  validate = (name, value) => {
    const { fields } = this.state;
    switch (name) {
      case "first_name":
        if (!value || value.trim() === "") {
          return "First name is Required";
        } else {
          return "";
        }
      case "last_name":
        if (!value || value.trim() === "") {
          return "Last name is Required";
        } else {
          return "";
        }
      case "email":
        if (!value) {
          return "Email is Required";
        } else if (
          !value.match(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/)
        ) {
          return "Enter a valid email address";
        } else {
          return "";
        }
      case "avatar":
        if(!value){
          return "Picture is Required";
        }
        else{
          return "";
        }
      default: {
        return "";
      }
    }
  };

  handleUserInput = e => {
    this.setState({
      errors: {
        ...this.state.errors,
        [e.target.name]: this.validate(e.target.name, e.target.value)
      },
      fields: {
        ...this.state.fields,
        [e.target.name]: e.target.value
      }
    });
  };

  handleSubmit = e => {
    const { fields } = this.state;
    e.preventDefault();
    let validationErrors = {};
    Object.keys(fields).forEach(name => {
      const error = this.validate(name, fields[name]);
      if (error && error.length > 0) {
        validationErrors[name] = error;
      }
    });
    if (Object.keys(validationErrors).length > 0) {
      this.setState({ errors: validationErrors });
      return;
    }
    if (fields.first_name && fields.email && fields.last_name && fields.avatar) {
      const data = {
        first_name: fields.first_name,
        last_name:fields.last_name,
        email: fields.email,
      };
      window.alert("submit success", JSON.stringify(data));
    }
  };

  render() {
    const { fields, errors } = this.state;
    return (
      <div className='contact_container'>
        <div className="border">
        <p className='contact_header'><b>Add Contacts</b></p>
          <div>
            <div>
              <label className='label'>First name: </label>
              <input
                type="text"
                name="first_name"
                value={fields.first_name}
                onChange={event => this.handleUserInput(event)}
                placeholder="First Name"
              />
            </div>
            <div>
              <span className="text-danger">{errors.first_name}</span>
            </div>
          </div>

          <div>
            <div>
              <label className='label'>Last name: </label>
              <input
                type="text"
                name="last_name"
                value={fields.last_name}
                onChange={event => this.handleUserInput(event)}
                placeholder="Last Name"
              />
            </div>
            <div>
              <span className="text-danger">{errors.last_name}</span>
            </div>
          </div>
          <div>
            <label className='label'>Email: </label>
            <input
              type="email"
              name="email"
              value={fields.email}
              onChange={event => this.handleUserInput(event)}
              placeholder="Email Address"
            />
            <div>
              <span className="text-danger">{errors.email}</span>
            </div>
          </div>
          <div>
            <label className='label'>Picture: </label>
            <input
              type="file"
              name="avatar"
              value={fields.avatar}
              onChange={event => this.handleUserInput(event)}
            />
            <div>
              <span className="text-danger">{errors.avatar}</span>
            </div>
          </div>
        </div>
        <br />
        <button
          type="button"
          className="button"
          onClick={this.handleSubmit}
        >
          Submit
        </button>
      </div>
    );
  }
}
export default ContactPage;