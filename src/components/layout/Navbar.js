import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCompass } from '@fortawesome/free-solid-svg-icons';
function Navbar ({title = "Navbar", faIcon = faCompass}) {

  return (
    <nav className="navbar bg-primary">
      <span>
        <FontAwesomeIcon icon={faIcon} /> {title}
      </span>
    </nav>
  )
};

Navbar.propTypes = {
  title : PropTypes.string.isRequired,
  faIcon : PropTypes.object.isRequired,
}

export default Navbar
