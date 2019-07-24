import React from 'react';

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}

class UserProfile extends React.Component {
  state = {
    loading: true,
    profilePhotos: []
  };

  componentDidMount() {
    fetch('http://www.mocky.io/v2/5d30c029320000b0572046d3')
      .then(response => response.json())
      .then(data =>
        this.setState({
          loading: false,
          profilePhotos: data.response
        })
      );
  }

  render() {
    const photoId = getRandomInt(0, 5);
    return (
      <div>
        <div className="profile">
          {this.state.loading ? (
            <div className="loader" />
          ) : (
            <img src={this.state.profilePhotos[photoId].image} />
          )}
        </div>
        <div className="box">
          <h3>
            Welcome, {this.props.firstName} {this.props.lastName} to Hunter
            Island!
          </h3>
          <p>Your unique, automatically assigned avatar will appear above.</p>
          <p>It will keep you safe, so please don't forget it.</p>
        </div>
      </div>
    );
  }
}

export default UserProfile;
