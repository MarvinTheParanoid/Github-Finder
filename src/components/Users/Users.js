import React, { Component } from 'react';
import UserCard from './UserCard';
class Users extends Component {

    // harcoded users list
    found_users = [
        {id : 1, username : "mojombo", avatar : "https://avatars.githubusercontent.com/u/1?v=4", url : "https://github.com/mojombo"},
        {id : 2, username : "defunkt", avatar : "https://avatars.githubusercontent.com/u/2?v=4", url : "https://github.com/defunkt"},
        {id : 3, username : "pjhyett", avatar : "https://avatars.githubusercontent.com/u/3?v=4", url : "https://github.com/pjhyett"},
        {id : 4, username : "wycats", avatar : "https://avatars.githubusercontent.com/u/4?v=4", url : "https://github.com/wycats"},
    ];

    render() {
        return (
            <div className = "grid-3">
              {this.found_users.map(user => {
                return <UserCard key={user.id} user={user} />
              })}
                
            </div>
        )
    }
}

export default Users