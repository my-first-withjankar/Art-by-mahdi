import React, { useState } from 'react';
import SocialLogin from '../SocialLogin/SocialLogin';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import './Register.css'
import auth from '../../Home/firebase.init';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Register = () => {
    const navigate = useNavigate()
    const location = useLocation()

    const [userInfo, setUserInfo] = useState({
        email: "",
        password: "",
        confirmPassword: "",
    });
    const [errors, setErrors] = useState({
        emailError: "",
        passwordError: "",
        confirmPasswordError: "",
        general: "",
    });
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

    let from = location.state?.from?.pathname || "/";

    const handleEmailChange = (e) => {
        const validEmail = /\S+@\S+\.\S+/.test(e.target.value)
        setUserInfo({ ...userInfo, email: e.target.value })
        console.log(userInfo);
        if (validEmail) {
            setUserInfo({ ...userInfo, email: e.target.value })
            setErrors({ ...errors, emailError: '' })
        }
        else {
            setErrors({ ...errors, emailError: 'invalid email' })
            setUserInfo({ ...userInfo, email: '' })
        }
    }


    const handlePasswordChange = (e) => {
        const validPassword = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(e.target.value)

        if (validPassword) {
            setUserInfo({ ...userInfo, password: e.target.value })
            setErrors({ ...errors, passwordError: '' })
        }
        else {
            setErrors({ ...errors, passwordError: 'Minimum eight characters, at least one letter and one number' })
            setUserInfo({ ...userInfo, password: '' })
        }
    }

    const handleConfirmPasswordChange = (e) => {
        if (e.target.value === userInfo.password) {
            setUserInfo({ ...userInfo, confirmPassword: e.target.value });
            setErrors({ ...errors, passwordError: '' });
        } else {
            setErrors({ ...errors, passwordError: "Password's don't match" });
            setUserInfo({ ...userInfo, confirmPassword: "" });
        }
    };



    const handleCreateUser = (e) => {
        e.preventDefault();

        createUserWithEmailAndPassword(userInfo.email, userInfo.password)
        console.log(userInfo.email, userInfo.password);
    }
    if (user) {
        navigate(from, { replace: true })
    }
    if (error) {
        toast(error.message)
    }
    return (
        <div>
            <div className='form-container container mt-5'>
                <h2 className='text-center'><em>Hello There,</em></h2>
                <p className='text-center'>Register Now to explore more</p>
                <form onSubmit={handleCreateUser} className='row d-flex flex-column align-items-center '>
                    <input className='shadow-sm border border-white bg-light' type="text" placeholder='Name' required />
                    <input
                        onChange={handleEmailChange}
                        className='shadow-sm border border-white bg-light'
                        type="email"
                        name="email" id=""
                        placeholder='Email'
                        required />
                    {
                        errors?.emailError && <p className='error-message'>{errors?.emailError}</p>
                    }

                    <input
                        onChange={handlePasswordChange}
                        className='shadow-sm border border-white bg-light'
                        type="password"
                        name="password" id=""
                        placeholder='Password'
                        required />
                    {
                        errors?.passwordError && <p className='error-message'>{errors?.passwordError}</p>
                    }

                    <input
                        onChange={handleConfirmPasswordChange}
                        className='shadow-sm border border-white bg-light'
                        type="password"
                        name="confirmPassword" id=""
                        placeholder='Confirm Password'
                        required />

                    <input
                        style={{ backgroundColor: 'rgba(89, 134, 173, 0.6)' }}
                        className='shadow-sm border border-white text-white'
                        type="submit" value="Sign Up" />
                </form>
                <p
                    className='text-center'>Already have an account?
                    <Link
                        className='text-decoration-none'
                        to='/login'>Sign In
                    </Link>
                </p>
                <SocialLogin></SocialLogin>
                <ToastContainer />
            </div>
        </div>
    );
};

export default Register;