import React, { Component } from 'react';
import axios from 'axios';

import Navbar from './components/layout/Navbar';
import Users from './components/Users/Users';
import Search from './components/Users/Search';
import Alert from './components/layout/Alert';

import { faGithub } from '@fortawesome/free-brands-svg-icons'
import './App.css';

class App extends Component {

  state = {
    userList : [],
    loading : false,
    alert : null,
  };

  async searchUsers (text) {
    this.setState({ loading : true, alert : null});
    try {
      const url = `https://api.github.com/search/users?q=${text}`;
      const auth = `client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secrect=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
      const response = await axios.get(`${url}&${auth}`);
      this.setState({userList : response.data.items, loading : false});
    } catch (error) {
      console.error(error);
      this.clearUsers()
    }
  };

  clearUsers () {
    this.setState({userList : [], loading : false});
  };

  setAlert (msg, type) {
    this.setState({alert : {msg, type} });
  };

  clearAlert () {
    this.setState({alert : null})
  };

  render () {
    const { userList, loading } = this.state;
    return (
      <div className="App">
        <Navbar title="Github Finder" faIcon={faGithub} />
        <div className='container'>
          <Alert alert={this.state.alert} clearFunc={this.clearAlert.bind(this)}/>
          <Search
            searchFunc={this.searchUsers.bind(this)}
            clearFunc={this.clearUsers.bind(this)}
            showClear={userList.length > 0 ? true : false}
            alertFunc={this.setAlert.bind(this)}
          />
          <Users loading={loading} userList={userList}/>
        </div>
      </div>
    )
  }
}

export default App;

// add more alert icon colours based on alert type
// change to disable the search button when text is empty