import React, { useContext } from 'react';
import './Header.css';
import logo from '../../images/Logo.svg';
import { Link } from 'react-router-dom'
import { AuthContext } from '../../contexts/UserContext';
import { toast } from 'react-toastify';
const Header = () => {

    const { user, logOut } = useContext(AuthContext);

    const handleUserLogOut = () => {
        logOut()
            .then(() => toast.success('Log Out Success!'))
            .catch(error => toast.error(error.message))
    }

    return (
        <nav>
            <img src={logo} alt="" />
            <div>
                <Link to="/shop">Shop</Link>
                <Link to="/orders">Orders</Link>
                <Link to="/inventory">Manage Inventory</Link>
                <span>{user?.email}</span>
                {
                    user?.uid ?
                        <button onClick={handleUserLogOut}>Logout</button>
                        :
                        <>
                            <Link to="/login">Login</Link>
                            <Link to="/signup">Sign up</Link>
                        </>
                }
            </div>
        </nav>
    );
};

export default Header;