import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCompass } from '@fortawesome/free-solid-svg-icons';

class Navbar extends Component {

  static defaultProps = {
    title : 'NavBar',
    faIcon : faCompass,
  };

  static propTypes = {
    title : PropTypes.string.isRequired,
    faIcon : PropTypes.object.isRequired,
  };

  render() {
      return (
          <nav className="navbar bg-primary">
            <span>
              <FontAwesomeIcon icon={this.props.faIcon} /> {this.props.title}
            </span>
          </nav>
      )
  }
}

export default Navbar
