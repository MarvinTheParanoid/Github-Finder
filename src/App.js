// import logo from './logo.svg';
import React, { Component } from 'react';
import Navbar from './components/layout/Navbar';
import Users from './components/Users/Users';

import { faGithub } from '@fortawesome/free-brands-svg-icons'
import './App.css';

// title="Github Finder" faIcon={faGithub}

class App extends Component {

  state = {
    userList : [
      {id : 1, username : "mojombo", avatar : "https://avatars.githubusercontent.com/u/1?v=4", url : "https://github.com/mojombo"},
      {id : 2, username : "defunkt", avatar : "https://avatars.githubusercontent.com/u/2?v=4", url : "https://github.com/defunkt"},
      {id : 3, username : "pjhyett", avatar : "https://avatars.githubusercontent.com/u/3?v=4", url : "https://github.com/pjhyett"},
      {id : 4, username : "wycats", avatar : "https://avatars.githubusercontent.com/u/4?v=4", url : "https://github.com/wycats"},
    ],
  };

  render () {
    return (
      <div className="App">
        <Navbar title="Github Finder" faIcon={faGithub} />
        <div className='container'>
          <Users userList = {this.state.userList}/>
        </div>
      </div>
    )
  }
}

export default App;
