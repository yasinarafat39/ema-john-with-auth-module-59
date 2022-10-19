import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../../contexts/UserContext';
import './SignUp.css'

const SignUp = () => {

    const { createNewUser, emailVerification, signInWithGoogle } = useContext(AuthContext);

    const [error, setError,] = useState(null)

    const googleProvider = new GoogleAuthProvider();



    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const confirm = form.confirm.value;

        console.log(email, password, confirm);

        if (password.length < 6) {
            setError('Password should be 6 character or more');
            return;
        }

        if (password !== confirm) {
            setError('Your password did not match');
            return;
        }

        createNewUser(email, password)
            .then(userCredential => {
                toast.success('User Create Successfully!');
                emailVerification()
                    .then(() => toast.success('Verification Email send. Please it out.'))

                const user = userCredential.user;
                console.log(user);
            })
            .catch(error => {
                toast.error(error.message)
                console.error(error);
            })
    }


    const handleGoogleLogin = () => {
        signInWithGoogle(googleProvider)
            .then(result => {
                toast.success('Google Sign In Successful.')
                const user = result.user;
                console.log(user);
            })
            .catch(error => toast.error(error))
    }

    return (

        <div className='form-container'>
            <h1 className='form-title'>Sign Up</h1>

            <form onSubmit={handleSubmit}>
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
                    <input type="password" name="confirm" id="confirm" placeholder='confirm password' required />
                </div>
                <p className='text-error'>{error}</p>
                <input className='btn-submit' type="submit" value="Sign Up" />
                <p className='text-Login'>Already Have A Account? <Link to='/login'>Log in</Link></p>


                <hr />

                <div className="login-with-google">
                    <button onClick={handleGoogleLogin}>Sign Up With Google</button>
                </div>
            </form>
        </div>
    );
};

export default SignUp;