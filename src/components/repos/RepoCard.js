import React from 'react';

function RepoCard({ data : { html_url, name }}) {
    return (
        <div className='card'>
            <h5>
                <a href={html_url} target="_blank" rel="noreferrer">{name}</a>
            </h5>
        </div>
    )
}

export default RepoCard