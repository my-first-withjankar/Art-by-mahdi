import React, { useState, useEffect } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../Home/firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';
import './SignIn.css'

const SignIn = () => {
    const navigate = useNavigate()
    const location = useLocation();
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    let from = location.state?.from?.pathname || "/";

    let emailError;

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);


    const handleEmail = (e) => {
        setEmail(e.target.value)
    }

    const handlePassword = (e) => {
        setPassword(e.target.value)
    }

    if (error) {
        emailError = <p className='text-danger'>Error: {error?.message}</p>
    }

    const handleSignIn = (e) => {
        e.preventDefault();

        signInWithEmailAndPassword(email, password)

    }




    useEffect(() => {
        if (user) {
            navigate(from);
        }
    }, [user]);


    return (
        <div>
            <div className='form-container container'>
                <form
                    onSubmit={handleSignIn}
                    className='row d-flex flex-column align-items-center '>
                    <input
                        onChange={handleEmail}
                        className='shadow-sm border border-white bg-light'
                        type="email"
                        name="email" id=""
                        placeholder='Email'
                        required />
                    <input
                        onChange={handlePassword}
                        className='shadow-sm border border-white bg-light'
                        type="password"
                        name="password" id=""
                        placeholder='Password'
                        required />
                    {
                        error?.message && <p>{error?.message}</p>
                    }
                    <input
                        className='shadow-sm border border-white bg-danger text-white'
                        type="submit"
                        value="Sign Up" />
                </form>
                <p className='text-center'>New to Mahdi's Art Gallery? <Link className='text-decoration-none' to='/register'>Register Now</Link> </p>
                <SocialLogin>   </SocialLogin>
            </div>
        </div>
    );
};

export default SignIn;