// import logo from './logo.svg';
import React, { Component } from 'react';
import Navbar from './components/layout/Navbar';
import UserCard from './components/Users/UserCard';

import { faGithub } from '@fortawesome/free-brands-svg-icons'
import './App.css';

// title="Github Finder" faIcon={faGithub}

class App extends Component {
  render () {
    return (
      <div className="App">
        <Navbar title="Github Finder" faIcon={faGithub} />
        <UserCard />
      </div>
    )
  }
}

export default App;
