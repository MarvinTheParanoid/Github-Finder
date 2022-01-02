import React from 'react';
import PropTypes from 'prop-types';

function UserCard ({user : {login, avatar_url, html_url}}) {
  return (
    <div className = "card text-center">
        <img src={avatar_url} alt={`Avatar for ${login}`} className = "round-img" style={{width : '60px'}}/>
        <h3>{login}</h3>
        <div>
            <a href={html_url} className='btn btn-dark btn-sm my-1' target='_blank' rel='noreferrer' >View Profile</a>
        </div>
    </div>
  )
};

UserCard.propTypes = {
  user : PropTypes.shape({
    login : PropTypes.string.isRequired,
    avatar_url : PropTypes.string.isRequired,
    html_url : PropTypes.string.isRequired,
  })
}

export default UserCard