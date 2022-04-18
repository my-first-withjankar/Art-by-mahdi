import React from 'react';
import image from '../../images/404.jpg'
const NotFound = () => {
    return (
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '80px' }}>
            <img src={image} alt="" />
        </div>
    );
};

export default NotFound;