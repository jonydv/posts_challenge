import React from 'react';

import './Title.css';

const Title = (props) => {
    return (
        <div className={`main-title ${props.className}`}>
            <h1>{props.children}</h1>
        </div>
    )
}

export default Title;
