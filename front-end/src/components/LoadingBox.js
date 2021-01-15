import React from 'react';
import './LoadingBox.css';

const LoadingBox = () => {
    return (
        <main className='row center'>
            <i className="fa fa-spinner fa-spin"></i>
            <span className='loading'>Loading...</span>
        </main>
    )
}

export default LoadingBox;
