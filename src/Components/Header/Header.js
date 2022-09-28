import React from 'react';
import './Header.css';
import logo from '../../images/Logo.svg';
const Header = () => {
    return (
        <nav>
            <img src={logo} alt="" />
            <div>
                <a href="/Order">Order</a>
                <a href="/Review">Order Review</a>
                <a href="Inventory">Manage Inventory</a>
                <a href="login">Login</a>
            </div>
        </nav>
    );
};

export default Header;