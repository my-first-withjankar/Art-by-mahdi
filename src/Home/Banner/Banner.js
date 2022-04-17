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
                        <h3 className=''>First slide label</h3>
                        <p className="">Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={art2}
                        alt="Second slide"
                    />

                    <Carousel.Caption className='second-slide'>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={art3}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div >
    );
};

export default Banner;