import React from 'react';
import './App.css';
import FormField from './components/FormField';
import UserProfile from './components/UserProfile';

class App extends React.Component {
  state = {
    firstName: '',
    lastName: '',
    // firstName: 'Bob',
    // lastName: 'Gunderson',
    invalidFields: [],
    userRegistered: false
    // userRegistered: true
  };

  onChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  onFormSubmit = event => {
    event.preventDefault();
    if (this.validateFields()) {
      console.log('✅ save the form');
      this.setState({
        userRegistered: true
      });
    } else {
      console.log('🐙 boo a field is missing');
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
        {this.state.userRegistered ? (
          <UserProfile
            firstName={this.state.firstName}
            lastName={this.state.lastName}
          />
        ) : (
          <div>
            <div className="box">
              <form onSubmit={this.onFormSubmit}>
                <FormField
                  label="First Name"
                  name="firstName"
                  value={this.state.firstName.value}
                  onChange={this.onChange}
                  error={this.state.invalidFields.includes('firstName')}
                />
                <FormField
                  label="Last Name"
                  name="lastName"
                  value={this.state.lastName.value}
                  onChange={this.onChange}
                  error={this.state.invalidFields.includes('lastName')}
                />
                <input type="submit" />
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
