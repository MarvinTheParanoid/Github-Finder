import React from 'react';
import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationCircle } from '@fortawesome/free-solid-svg-icons';
import { faTimes } from '@fortawesome/free-solid-svg-icons';


function Alert ({alert, clearFunc}) {
    return (
        alert !== null &&
        <div className={`alert alert-${alert.type}`}>
            <div>
                <FontAwesomeIcon icon={faExclamationCircle} className={`icon-${alert.type}`}/> {alert.msg}
            </div>
            <button className='btn-clear' onClick={clearFunc}>
                <FontAwesomeIcon icon={faTimes} className={`icon-${alert.type}`}/>
            </button>
        </div>    
    )
}

Error.protoTypes = {
  alert : PropTypes.object.isRequired,  //add shape and check for two strings?, can the object still be required?
};

export default Alert

// clear button color needs thought
