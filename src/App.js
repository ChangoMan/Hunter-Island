import React from "react";
import "./App.css";
import FormField from "./components/FormField";

class App extends React.Component {
  state = {
    firstName: "",
    lastName: "",
    email: ""
  };

  changeInput = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  render() {
    return (
      <div className="container">
        <div className="box">
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
        </div>
        <div className="box">
          <h3>First Name:</h3>
          <p>{this.state.firstName}</p>
          <h3>Last Name:</h3>
          <p>{this.state.lastName}</p>
          <h3>Email:</h3>
          <p>{this.state.email}</p>
        </div>
      </div>
    );
  }
}

export default App;
