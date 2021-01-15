import React from 'react';
import './MessageBox.css';

const MessageBox = (props) => {
    return (
        <div className={`alert alert-${props.variant || 'danger'}`}>
            {props.children}
        </div>
    )
}

export default MessageBox;