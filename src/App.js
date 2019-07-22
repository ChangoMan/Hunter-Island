import React from "react";
import "./App.css";
import FormField from "./components/FormField";

class App extends React.Component {
  state = {
    firstName: "",
    lastName: ""
  };
  onChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };
  render() {
    return (
      <div className="container">
        <div className="box">
          <FormField
            label="First Name"
            name="firstName"
            value={this.state.firstName}
            onChange={this.onChange}
          />
          <div className="form-field">
            <label>Last Name</label>
            <input
              type="text"
              name="lastName"
              value={this.state.lastName}
              onChange={this.onChange}
            />
          </div>
        </div>
        <div className="box">
          <h3>First Name:</h3>
          <p>{this.state.firstName}</p>
          <h3>Last Name:</h3>
          <p>{this.state.lastName}</p>
        </div>
      </div>
    );
  }
}

export default App;
