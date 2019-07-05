import React from "react";
import "./App.css";
import FormField from "./components/FormField";

class App extends React.Component {
  state = {
    firstName: "",
    lastName: "",
    email: ""
  };

  changeFirstName = event => {
    // console.log(event.target.value);
    this.setState({
      firstName: event.target.value
    });
  };

  changeLastName = event => {
    this.setState({
      lastName: event.target.value
    });
  };

  changeInput = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  render() {
    return (
      <div className="container">
        <form>
          <FormField
            label="First Name"
            name="firstName"
            type="text"
            value={this.state.firstName}
            onChange={this.changeInput}
          />
          <FormField
            label="Last Name"
            name="lastName"
            type="text"
            value={this.state.lastName}
            onChange={this.changeInput}
          />
          <FormField
            label="Email:"
            name="email"
            type="email"
            value={this.state.email}
            onChange={this.changeInput}
          />
        </form>
        <hr />
        <h3>First Name: {this.state.firstName}</h3>
        <h3>Last Name: {this.state.lastName}</h3>
        <h3>Email: {this.state.email}</h3>
      </div>
    );
  }
}

export default App;
