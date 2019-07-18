import React from "react";
import "./App.css";
import FormField from "./components/FormField";
import Box from "./components/Box";

class App extends React.Component {
  state = {
    firstName: "",
    lastName: "",
    email: "",
    images: []
  };

  componentDidMount() {
    this.getData();
  }

  getData = async () => {
    // API made with https://www.mocky.io
    const res = await fetch("http://www.mocky.io/v2/5d30c029320000b0572046d3");
    const data = await res.json();
    this.setState({
      images: data.response
    });
  };

  changeInput = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  onFormSubmit = e => {
    e.preventDefault();
    console.log(this.state);
  };

  render() {
    return (
      <div className="container">
        <Box>
          <form onSubmit={this.onFormSubmit}>
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
            <button type="submit">Submit</button>
          </form>
        </Box>
        <Box>
          <h3>First Name:</h3>
          <p>{this.state.firstName}</p>
          <h3>Last Name:</h3>
          <p>{this.state.lastName}</p>
          <h3>Email:</h3>
          <p>{this.state.email}</p>
        </Box>
        {this.state.images.map(dino => (
          <img
            key={dino.id}
            className="dino"
            src={dino.image}
            alt={dino.name}
          />
        ))}
      </div>
    );
  }
}

export default App;
