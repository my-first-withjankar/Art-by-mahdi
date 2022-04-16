import React, { useEffect, useState } from 'react';
import './Gallery.css'

const Gallery = () => {
    const [images, setImages] = useState({})
    console.log(images);
    useEffect(() => {
        fetch('images.json')
            .then(res => res.json())
            .then(data => setImages(data))
    }, [])
    return (
        <div
            id='gallery'
            className='container mt-5'>
            <h1>GALLERY'S ALL FRAME WILL BE SOLD</h1>
            <div>
                {/* {
                    images.map(image => console.log(image))
                } */}
            </div>
        </div>
    );
};

export default Gallery;