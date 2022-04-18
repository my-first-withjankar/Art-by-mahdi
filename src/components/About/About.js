import React from 'react';
import self from '../../images/self/self.jpg'

const About = () => {
    return (
        <>
            <div
                className='mt-5'
                style=
                {{
                    backgroundImage: `url(${self})`,
                    height: '80vh',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                }}
            >
                <div style={{ paddingTop: '140px', paddingLeft: '200px' }}>
                    <p className='fs-3'><em>Hey, I'm</em></p>
                    <h1
                        style={{ fontFamily: ' poppins', color: 'rgba(100, 107, 109, 0.824)' }}
                        className='display-5 font-weight-bold'>
                        <strong>TAREK RAHMAN</strong>
                    </h1>
                </div>
            </div>
            <div className='d-flex align-items-center justify-content-center mt-5 w-25 mx-auto'>
                <div style={{ height: '2px', backgroundColor: 'rgba(100, 107, 109, 0.824)' }} className='w-25'></div>
                <h2 className='mt-2 px-3'>MY GOAL</h2>
                <div style={{ height: '2px', backgroundColor: 'rgba(100, 107, 109, 0.824)' }} className='w-25'></div>
            </div>
            <div
                className='mt-3'
                style={{ paddingLeft: '560px', paddingRight: '550px', textAlign: 'justify' }}>
                <p>In October 2021, I quit what I thought was once my dream job.</p>
                <p>why?</p>
                <p>cause day by day dream is being big after big , at a time it was physical business or job . but then it's gone for digital.
                    in the mean time i got jhankar the hero . and took his instruction as a guidelile . then started a new life with jhankar's heroes.
                    and it's going as good as could be.   </p>
            </div>
        </>
    );
};

export default About;