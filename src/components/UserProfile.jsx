import React from "react";

class UserProfile extends React.Component {
  state = {
    loading: true,
    profilePhotos: []
  };
  componentDidMount() {
    fetch("http://www.mocky.io/v2/5d30c029320000b0572046d3")
      .then(res => {
        return res.json();
      })
      .then(data => {
        this.setState({
          loading: false,
          profilePhotos: data.response
        });
      });
  }
  render() {
    return (
      <div>
        <div className="profile">
          {this.state.loading ? (
            <div className="loading" />
          ) : (
            <img src={this.state.profilePhotos[0].image} alt="" />
          )}
        </div>
        <div className="box">
          <h3>
            Welcome, {this.props.firstName} {this.props.firstName}
          </h3>
          <p>asdfsaf</p>
        </div>
      </div>
    );
  }
}

export default UserProfile;
