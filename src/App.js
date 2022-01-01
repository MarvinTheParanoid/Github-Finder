// import logo from './logo.svg';
import React, { Component } from 'react';
import Navbar from './components/layout/Navbar';
import Users from './components/Users/Users';

import { faGithub } from '@fortawesome/free-brands-svg-icons'
import './App.css';

// title="Github Finder" faIcon={faGithub}

class App extends Component {
  userDetails = {
    username : "mojombo",
    avatar : "https://avatars.githubusercontent.com/u/1?v=4",
    url : "https://github.com/mojombo",
  };
  render () {
    return (
      <div className="App">
        <Navbar title="Github Finder" faIcon={faGithub} />
        <div className='container'>
          <Users />
        </div>
      </div>
    )
  }
}

export default App;
