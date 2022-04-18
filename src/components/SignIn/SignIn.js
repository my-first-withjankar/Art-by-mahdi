import React, { useState } from 'react';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../Home/firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';
import './SignIn.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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

    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

    const handleEmail = (e) => {
        setEmail(e.target.value)
    }

    const handlePassword = (e) => {
        setPassword(e.target.value)
    }
    if (user) {
        navigate(from, { replace: true })
    }
    if (error) {
        emailError = <p className='text-danger'>Error: {error?.message}</p>
    }

    const handleSignIn = (e) => {
        e.preventDefault();

        signInWithEmailAndPassword(email, password)

    }

    const handleResetPassword = async () => {
        await sendPasswordResetEmail(email)
        toast('Send A mail to your Gmail')
    }



    return (
        <div>
            <div className='form-container container mt-5'>
                <h2 className='text-center'><em>WELCOME BACK</em></h2>
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
                        style={{ backgroundColor: 'rgba(89, 134, 173, 0.6)' }}
                        className='shadow-sm border border-white text-white'
                        type="submit"
                        value="Sign Up" />
                </form>
                <p className='text-center'>New to Mahdi's Art Gallery? <Link className='text-decoration-none' to='/register'>Register Now</Link> </p>
                <p className='text-center pr-5'>Forget Password?<button onClick={handleResetPassword} className='btn btn-link text-decoration-none' to='/register'>Reset Here</button> </p>
                <SocialLogin>   </SocialLogin>
                <ToastContainer />
            </div>
        </div>
    );
};

export default SignIn;