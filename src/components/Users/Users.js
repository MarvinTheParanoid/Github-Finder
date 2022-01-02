import React from 'react';
import PropTypes from 'prop-types';

import UserCard from './UserCard';
import Spinner from '../layout/Spinner';



function Users ({userList, loading}) {

  if (loading) {
    return <Spinner />
  } else {
  return (
      <div className = "grid-3">
        {userList.map(user => {
          return <UserCard key={user.id} user={user} />
        })}    
      </div>
    )
  }
}

Users.protoTypes = {
  userList : PropTypes.object,
  loading : PropTypes.bool.isRequired,
}

export default Users