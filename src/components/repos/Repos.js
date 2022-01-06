import React from 'react';
import Spinner from '../layout/Spinner';
import RepoCard from './RepoCard';

import {requester} from '../../helper';

function Repos({login}) {
    const [repos, setRepos] = React.useState(() => null);

    React.useEffect(() => {
        const tempUrl = `https://api.github.com/users/${login}/repos?sort=created&per_page=5`;
        requester(tempUrl).then(r => setRepos(r));
    }, [login]);

    if (repos === null) {
        return <Spinner />
    } else {
        return (
            <div>
                <h3 style={{marginTop : '1em'}} >Repositories:</h3>
                {repos.map(repo => {
                    return <RepoCard data={repo} key={repo.id}/>
                })}
            </div>
        )
    }
}

export default Repos
