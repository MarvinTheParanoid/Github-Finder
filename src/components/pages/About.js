import React from 'react';

function About({text}) {
    return (
        <div>
            <h1>About</h1>
            <p>This is the about page</p>
            <p>The text passed in was "{text}"</p>
        </div>
    )
}

export default About
