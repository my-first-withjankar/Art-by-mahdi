import React from 'react';
import SocialLogin from '../SocialLogin/SocialLogin';
import './SignIn.css'

const SignIn = () => {
    return (
        <div>
            <div className='form-container container'>
                <form className='row d-flex flex-column align-items-center '>
                    <input className='shadow-sm border border-white bg-light' type="email" name="email" id="" placeholder='Email' />
                    <input className='shadow-sm border border-white bg-light' type="password" name="password" id="" placeholder='Password' />
                    <input className='shadow-sm border border-white bg-danger text-white' type="submit" value="Sign Up" />
                </form>
                <SocialLogin>   </SocialLogin>
            </div>
        </div>
    );
};

export default SignIn;