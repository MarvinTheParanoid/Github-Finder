import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleNotch } from '@fortawesome/free-solid-svg-icons';

function Spinner () {

  return (
    <div className='all-center'>
      <FontAwesomeIcon icon={faCircleNotch} size='2x' color='grey' className='spinner my-3'/>
    </div>
  )
};

export default Spinner

// maybe center this vertically too