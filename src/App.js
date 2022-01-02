import React, { Component } from 'react';
import axios from 'axios';

import Navbar from './components/layout/Navbar';
import Users from './components/Users/Users';
import Search from './components/Users/Search';

import { faGithub } from '@fortawesome/free-brands-svg-icons'
import './App.css';

class App extends Component {

  state = {
    userList : [],
    loading : false,
  };

  async searchUsers (text) {
    this.setState({ loading : true});
    const url = `https://api.github.com/search/users?q=${text}`;
    const auth = `client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secrect=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    const response = await axios.get(`${url}&${auth}`);
    this.setState({userList : response.data.items, loading : false});
  };

  clearUsers () {
    this.setState({userList : [], loading : false});
  };

  render () {
    const { userList, loading } = this.state;
    return (
      <div className="App">
        <Navbar title="Github Finder" faIcon={faGithub} />
        <div className='container'>
          <Search
            searchFunc={this.searchUsers.bind(this)}
            clearFunc={this.clearUsers.bind(this)}
            showClear={userList.length > 0 ? true : false}
          />
          <Users loading={loading} userList={userList}/>
        </div>
      </div>
    )
  }
}

export default App;
