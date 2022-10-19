import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../../contexts/UserContext';
import './Login.css';


const Login = () => {

    const { Login, signInWithGoogle } = useContext(AuthContext);
    const googleProvider = new GoogleAuthProvider();
    const navigate = useNavigate();

    const handleLogin = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        Login(email, password)
            .then(userCredential => {
                const user = userCredential.user;
                toast.success('LogIn Successful!')
                form.reset()
                navigate('/')
                console.log(user);
            })
            .catch(error => {
                toast.error(error.message);
                console.log('Error:', error);
            })
    }



    const handleGoogleLogin = () => {
        signInWithGoogle(googleProvider)
            .then((result) => {
                navigate('/')
                console.log(result.user);
            })
            .catch(error => console.log(error))
    }

    return (
        <div className='form-container'>
            <h1 className='form-title'>Login</h1>

            <form onSubmit={handleLogin}>
                <div className="form-control">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="email" placeholder='example@gmail.com' required />
                </div>
                <div className="form-control">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="password" placeholder='password' required />
                </div>

                <input className='btn-submit' type="submit" value="Login" />
                <p className='text-SignUp'>New To Ema John? <Link to='/signup'>Create New Account</Link></p>


                <hr />

                <div className="login-with-google">
                    <button onClick={handleGoogleLogin}>Continue with Google</button>
                </div>
            </form>
        </div>
    );
};

export default Login;