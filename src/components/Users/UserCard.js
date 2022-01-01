import React from 'react';
import PropTypes from 'prop-types';

function UserCard ({user : {username, avatar, url}}) {
  // const {username, avatar, url} = user;
  return (
    <div className = "card text-center">
        <img src={avatar} alt={`Avatar for ${username}`} className = "round-img" style={{width : '60px'}}/>
        <h3>{username}</h3>
        <div>
            <a href={url} className='btn btn-dark btn-sm my-1'>View Profile</a>
        </div>
    </div>
  )
};

UserCard.propTypes = {
  user : PropTypes.shape({
    username : PropTypes.string.isRequired,
    avatar : PropTypes.string.isRequired,
    url : PropTypes.string.isRequired,
  })
}

export default UserCard

//add proptypes - don't need default