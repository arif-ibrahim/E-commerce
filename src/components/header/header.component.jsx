import React from 'react';

import './header.styles.scss';
import { Link } from 'react-router-dom';

React.createElement()
const Header = () => (
    <div className="header">
        <Link to='/' className="logo-container"><img src="https://a.udemycdn.com/2019-06-30_21-01-32-9996f50fd92611c5a1dc2be86a61ae44/original.svg?nva=20200314164659&token=06fe85b6a472f59344022" alt=""/></Link>
        <div className="options">
            <Link to='/shop' className="option">Shop</Link>
            <Link to='#' className="option">Contact</Link>
        </div>
    </div>
)

export default Header;