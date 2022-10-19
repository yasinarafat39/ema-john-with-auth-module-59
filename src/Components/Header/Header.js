import React, { useContext } from 'react';
import './Header.css';
import logo from '../../images/Logo.svg';
import { Link } from 'react-router-dom'
import { AuthContext } from '../../contexts/UserContext';
const Header = () => {

    const {user} = useContext(AuthContext);
    return (
        <nav>
            <img src={logo} alt="" />
            <div>
                <Link to="/shop">Shop</Link>
                <Link to="/orders">Orders</Link>
                <Link to="/inventory">Manage Inventory</Link>
                <Link to="/login">Login</Link>
                <Link to="/signup">Sign up</Link>
                <p>Welcome, {user?.email}</p>
            </div>
        </nav>
    );
};

export default Header;