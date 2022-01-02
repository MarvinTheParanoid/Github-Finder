// import logo from './logo.svg';
import React, { Component } from 'react';
import axios from 'axios';

import Navbar from './components/layout/Navbar';
import Users from './components/Users/Users';

import { faGithub } from '@fortawesome/free-brands-svg-icons'
import './App.css';

class App extends Component {

  state = {
    userList : [],
    loading : false,
  };

  async componentDidMount () {
    this.setState({ loading : true});
    const url = 'https://api.github.com/users';
    const auth = `client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secrect=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    const response = await axios.get(`${url}?${auth}`); //need try catch
    this.setState({userList : response.data, loading : false});
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
