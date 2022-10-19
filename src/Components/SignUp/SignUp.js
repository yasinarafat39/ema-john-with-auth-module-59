import React from 'react';
import { Link } from 'react-router-dom';

const SignUp = () => {
    return (
        <div className='form-container'>
            <h1 className='form-title'>Sign Up</h1>

            <form>
                <div className="form-control">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="email" placeholder='example@gmail.com' required />
                </div>
                <div className="form-control">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="password" placeholder='password' required />
                </div>
                <div className="form-control">
                    <label htmlFor="confirm">Confirm Password</label>
                    <input type="password" name="Confirm" id="confirm" placeholder='confirm password' required />
                </div>
                <input className='btn-submit' type="submit" value="Login" />
                <p>Already Have A Account?<Link to='/login'>Log in</Link></p>
            </form>
        </div>
    );
};

export default SignUp;