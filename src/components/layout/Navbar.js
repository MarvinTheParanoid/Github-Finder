import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
/* Resources */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCompass } from '@fortawesome/free-solid-svg-icons';

function Navbar ({title = "Navbar", faIcon = faCompass}) {

  return (
    <nav className="navbar bg-primary">
      <Link to="/">
        <h3>
          <FontAwesomeIcon icon={faIcon} /> {title}
        </h3>
      </Link>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </nav>
  )
};

Navbar.propTypes = {
  title : PropTypes.string.isRequired,
  faIcon : PropTypes.object.isRequired,
};

export default Navbar
