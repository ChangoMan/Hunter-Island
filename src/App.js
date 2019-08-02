import React from 'react';
import './App.css';
import FormField from './components/FormField';
import UserProfile from './components/UserProfile';

class App extends React.Component {
  state = {
    firstName: '',
    lastName: '',
    invalidFields: [],
    formSubmitted: false
  };

  onChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  onFormSubmitted = event => {
    event.preventDefault();
    if (this.validateFields()) {
      console.log('✅ fields validated, please submit form');
      this.setState({
        formSubmitted: true
      });
    } else {
      console.log('🐙 fields NOT valid');
    }
  };

  validateFields = () => {
    const { firstName, lastName } = this.state;
    const invalidFields = [];

    if (firstName === '') {
      invalidFields.push('firstName');
    }

    if (lastName === '') {
      invalidFields.push('lastName');
    }

    this.setState({
      invalidFields
    });

    if (invalidFields.length > 0) {
      return false;
    } else {
      return true;
    }
  };

  render() {
    return (
      <div className="container">
        {this.state.formSubmitted ? (
          <UserProfile />
        ) : (
          <div>
            <div className="box">
              <form onSubmit={this.onFormSubmitted}>
                <FormField
                  label="First Name"
                  name="firstName"
                  value={this.state.firstName}
                  onChange={this.onChange}
                  error={this.state.invalidFields.includes('firstName')}
                />
                <FormField
                  label="Last Name"
                  name="lastName"
                  value={this.state.lastName}
                  onChange={this.onChange}
                  error={this.state.invalidFields.includes('lastName')}
                />
                <input type="submit" value="Submit" />
              </form>
            </div>
            <div className="box">
              <h3>First Name:</h3>
              <p>{this.state.firstName}</p>
              <h3>Last Name:</h3>
              <p>{this.state.lastName}</p>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default App;
