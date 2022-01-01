import React, { Component } from 'react';

class UserCard extends Component {

    render() {
        const {username, avatar, url} = this.props.user;
        return (
            <div className = "card text-center">
                <img src={avatar} alt={`Avatar for ${username}`} className = "round-img" style={{width : '60px'}}/>
                <h3>{username}</h3>
                <div>
                    <a href={url} className='btn btn-dark btn-sm my-1'>View Profile</a>
                </div>
            </div>
        )
    }
}

export default UserCard
