import React, { useContext } from 'react';
import { AuthContext } from '../../contexts/UserContext';

const Inventory = () => {
    
    const {user} = useContext(AuthContext);

    return (
        <div>
            <h2>this is Inventory</h2>
            <p>{user?.email}</p>
        </div>
    );
};

export default Inventory;