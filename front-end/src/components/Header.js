import React from 'react';
import {NavLink} from 'react-router-dom';

import './Header.css';

const Header = () => {
    return (
        <header className="row end">

        <NavLink to='/' className='link-margin'><i className="far fa-home"></i><span className='hide'>Home</span></NavLink>
        

    </header>
    )
}

export default Header;
