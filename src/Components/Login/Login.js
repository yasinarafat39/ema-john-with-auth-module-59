import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css';


const Login = () => {
    return (
        <div className='form-container'>
            <h1 className='form-title'>Login</h1>

            <form>
                <div className="form-control">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="email" placeholder='example@gmail.com' required/>
                </div>
                <div className="form-control">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="password" placeholder='password' required/>
                </div>
                
                <input className='btn-submit' type="submit" value="Login" />
                <p>New To Ema John?<Link to='/signup'>Create New Account</Link></p>
            </form>
        </div>
    );
};

export default Login;