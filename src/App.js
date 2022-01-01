// import logo from './logo.svg';
import React, { Component } from 'react';
import axios from 'axios';
import Navbar from './components/layout/Navbar';
import Users from './components/Users/Users';

import { faGithub } from '@fortawesome/free-brands-svg-icons'
import './App.css';

// title="Github Finder" faIcon={faGithub}

class App extends Component {

  // harcoded user details
  state = {
    userList : [],
    loading : false,
  };

  async componentDidMount () {
    this.setState({ loading : true});
    const response = await axios.get('https://api.github.com/users'); //need try catch
    this.setState({userList : response.data, loading : false});
    console.log(response.data[0]);
  };

  render () {
    return (
      <div className="App">
        <Navbar title="Github Finder" faIcon={faGithub} />
        <div className='container'>
          <Users loading={this.state.loading} userList={this.state.userList}/>
        </div>
      </div>
    )
  }
}

export default App;
