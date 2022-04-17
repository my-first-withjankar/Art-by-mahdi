import React from 'react';
import { Carousel } from 'react-bootstrap';
import art1 from '../../images/banner/art1.jpg';
import art2 from '../../images/banner/art2.jpg';
import art3 from '../../images/banner/art3.jpg'
import './Banner.css'

const Banner = () => {
    return (
        <div>
            <Carousel fade>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={art1}
                        alt="First slide"
                    />
                    <Carousel.Caption className='first-slide'>
                        <h3 style={{ color: 'rgba(0, 0, 0, 0.826)' }}>INTRODUCING ART BY</h3>
                        <h1 className="text-dark fs-1">MAHDI KI</h1>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={art2}
                        alt="Second slide"
                    />

                    <Carousel.Caption className='second-slide'>
                        <h1
                            className='bg-dark d-inline-block py-1 px-4'
                            style={{ color: 'white' }}>ART YOU'LL LOVE
                        </h1>
                        <p>
                            <button
                                style={{ backgroundColor: 'lightblue', borderRadius: '5px', }}
                                className='border-0 py-2 px-4 fs-4 '>COLLECT IT
                            </button>
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={art3}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h1
                            className='fs-1 fw-800 d-inline-block py-1 px-5'
                            style={{ color: 'black', backgroundColor: 'rgba(219, 218, 218, 0.944)' }}>
                            DISCOVER ART YOU LOVE
                        </h1>
                        <p
                            style={{ backgroundColor: 'rgba(127, 202, 227, 0.749)' }}
                            className='fs-4 '>
                            Browse Curated Collection Updated Daily
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div >
    );
};

export default Banner;