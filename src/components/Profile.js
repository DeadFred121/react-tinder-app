import React from 'react';
import PropTypes from 'prop-types';

const Profile = ({ firstName, lastName, imageURL }) => (
  <div className="profile">
    <div>
      <img src={imageURL} alt="User" />
    </div>
    <p>Name: {firstName} {lastName}</p>
  </div>
);

Profile.propTypes = {
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  imageURL: PropTypes.string,
};

export default Profile;
