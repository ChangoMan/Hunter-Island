import React from "react";
import "./App.css";

class App extends React.Component {
  state = {
    firstName: "",
    lastName: ""
  };

  changeFirstName = e => {
    this.setState({
      firstName: e.target.value
    });
  };

  render() {
    return (
      <div className="container">
        <form>
          <div className="form-field">
            <label>First Name:</label>
            <input
              type="text"
              value={this.state.firstName}
              onChange={this.changeFirstName}
            />
          </div>
          <div className="form-field">
            <label>Last Name:</label>
            <input type="text" />
          </div>
        </form>
        <hr />
        {this.state.firstName} {this.state.lastName}
      </div>
    );
  }
}

export default App;
