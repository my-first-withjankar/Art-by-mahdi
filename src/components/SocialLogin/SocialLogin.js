import React from 'react';
import google from '../../images/social/google.png'
import facebook from '../../images/social/facebook.png'
import github from '../../images/social/github.png'
import auth from '../../Home/firebase.init';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate, useLocation } from 'react-router-dom';

const SocialLogin = () => {
    const navigate = useNavigate()
    const location = useLocation()
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    let from = location.state?.from?.pathname || "/";

    const handleSignInWithGoogle = () => {
        signInWithGoogle()
    }
    if (user) {
        navigate(from)
    }
    return (
        <>
            <div className='d-flex align-items-center justify-content-center w-25 mx-auto'>
                <div style={{ height: '1px' }} className='bg-info w-25'></div>
                <p className='mt-2 px-3'>or</p>
                <div style={{ height: '1px' }} className='bg-info w-25'></div>
            </div>
            <div className='d-flex align-items-center justify-content-center mt-0 w-25 mx-auto'>
                <button
                    onClick={handleSignInWithGoogle}
                    className='border-0 rounded-circle d-block bg-white'>
                    <img
                        style={{ height: '35px' }}
                        src={google} alt="" />
                </button>
                <button
                    className='border-0 rounded-circle d-block bg-white'>
                    <img
                        style={{ height: '45px' }}
                        src={facebook} alt="" />
                </button>
                <button
                    className='border-0 rounded-circle d-block bg-white'>
                    <img
                        style={{ height: '45px' }}
                        src={github} alt="" />
                </button>
            </div>
        </>
    );
};

export default SocialLogin;