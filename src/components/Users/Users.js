import React, { Component } from 'react';
import UserCard from './UserCard';
class Users extends Component {

    render() {
      return (
          <div className = "grid-3">
            {this.props.userList.map(user => {
              return <UserCard key={user.id} user={user} />
            })}
              
          </div>
      )
    }
}

export default Users