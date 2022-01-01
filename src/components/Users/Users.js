import React from 'react';
import PropTypes from 'prop-types';
import UserCard from './UserCard';
function Users ({userList, loading}) {
  return (
    <div className = "grid-3">
      {userList.map(user => {
        return <UserCard key={user.id} user={user} />
      })}    
    </div>
  )
}

Users.protoTypes = {
  userList : PropTypes.object,
}

export default Users