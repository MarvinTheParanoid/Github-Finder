import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function UserCard ({user : {login, avatar_url}}) {
  return (
    <div className = "card text-center">
        <img src={avatar_url} alt={`Avatar for ${login}`} className = "round-img" style={{width : '60px'}}/>
        <h3>{login}</h3>
        <Link to={`/users/${login}`} className='btn btn-dark btn-sm my-1'>
          More
        </Link>
    </div>
  )
};

UserCard.propTypes = {
  user : PropTypes.shape({
    login : PropTypes.string.isRequired,
    avatar_url : PropTypes.string.isRequired,
  })
}

export default UserCard