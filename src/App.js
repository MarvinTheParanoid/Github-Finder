import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import axios from 'axios';
/* Pages */
import About from './components/pages/About';
import User from './components/pages/User';
/* Layout */
import Navbar from './components/layout/Navbar';
import Users from './components/Users/Users';
import Search from './components/Users/Search';
import Alert from './components/layout/Alert';
/* Resources */
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import './App.css';

class App extends Component {

  state = {
    user : null,
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
      <Router>
        <div className="App">
          <Navbar title="Github Finder" faIcon={faGithub} />
          <div className='container'>
            <Routes>
              <Route path="/" element={
                <>
                  <Alert alert={this.state.alert} clearFunc={this.clearAlert.bind(this)}/>
                  <Search
                    searchFunc={this.searchUsers.bind(this)}
                    clearFunc={this.clearUsers.bind(this)}
                    showClear={userList.length > 0 ? true : false}
                    alertFunc={this.setAlert.bind(this)}
                  />
                  <Users loading={loading} userList={userList} />  
                </>
              } />
              <Route path ="/about" element={<About text="test"/>} />
              <Route path ="/users/:login" element={<User />} />
            </Routes>
          </div>
        </div>
      </Router>
    )
  }
}

export default App;

// alert box not currently used
// add more alert icon colours based on alert type
// change to /user/:login and rename to User to User
// catch errors
  // show error component with back/home button
// move home to file
// move layout to file
