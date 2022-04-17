import React from 'react';

const Footer = () => {
    let time = new Date()
    let year = time.getFullYear()
    return (
        <div className='mt-5 py-5 bg-dark text-white text-center sticky-bottom  '>

            <p> copyright : &copy; {year} Artist:Mahdi ki - All Rights Reserved</p>
        </div>
    );
};

export default Footer;