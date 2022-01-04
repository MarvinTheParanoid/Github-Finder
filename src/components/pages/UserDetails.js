import React from 'react';
import {useParams} from 'react-router-dom';
import axios from 'axios';
import Spinner from '../layout/Spinner';

function UserDetails() {
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
    console.log()
  }, [params]);
  
  if (details === null) {
    return <Spinner />
  } else {
    return (
      <div>
          
      </div>
    )
  }
}

export default UserDetails
