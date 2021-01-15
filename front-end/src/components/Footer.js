import React from 'react';
import './Footer.css';

const Footer = ({children}) => {
    return (
        <footer className='row center'>
            All Right Reserved &copy;
            {children}
        </footer>
    )
}

export default Footer;
