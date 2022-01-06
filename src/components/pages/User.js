import React from 'react';
import { Link } from 'react-router-dom';
import {useParams} from 'react-router-dom';
import axios from 'axios';
import Spinner from '../layout/Spinner';
import Repos from '../repos/Repos';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';

function User() {
  const params = useParams();
  const [details, setDetails] = React.useState(() => null);

  const getUser = async (login) => {
    const url = `https://api.github.com/users/${login}`;
    const auth = `client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secrect=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    const response = await axios.get(`${url}?${auth}`);
    setDetails(response.data);
  };

  React.useEffect( () => {
    getUser(params.login);
  });
  
  if (details === null) {
    return <Spinner />
  } else {
    return (
      <>
          <Link to="/" className='btn btn-light'>
            <FontAwesomeIcon icon={faArrowLeft} /> Back
          </Link>
          <div className='card grid-2'>
            <div className='all-center'>
              <img src={details.avatar_url} alt="avatar" className='round-img' style={{width : '150px'}} />
              <h1>{details.name}</h1>
              <p>{details.location}</p>
            </div>
            <div>
              {details.bio && <p>{details.bio}</p>}
              {details.company && <p><strong>Company:</strong> {details.company}</p>}
              {details.blog && <p><strong>Website:</strong> <a href={details.blog}>{details.blog}</a></p>}
              <a href={details.html_url} className='btn btn-dark my-1'>Go to Github</a>
            </div>
          </div>
          <div className='card text-center'>
            <ul>
              <li className='badge'>
                Hireable: {' '}
                {(details.hireable !== null)
                  ? <FontAwesomeIcon icon={faCheck} className='text-success'/>
                  : <FontAwesomeIcon icon={faTimes} className='text-danger'/>
                }
              </li>
              <li className='badge badge-primary'>
                  Followers: {details.followers}
              </li>
              <li className='badge badge-success'>
                  Following: {details.following}
              </li>
              <li className='badge badge-light'>
                  Public Repos: {details.public_repos}
              </li>
              <li className='badge badge-dark'>
                  Public Gists: {details.public_gists}
              </li>
            </ul>
          </div>
          <Repos login={params.login}/>
      </>
    )
  }
}

export default User


