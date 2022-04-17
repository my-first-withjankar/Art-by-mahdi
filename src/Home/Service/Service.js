import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../firebase.init';
import './Service.css'

const Service = ({ service }) => {
    const navigate = useNavigate()
    const [user] = useAuthState(auth)
    const { name, img, description, price } = service;

    const handleBooking = () => {
        if (user) {
            navigate('/checkout ')
        }
        else {
            navigate('/login')
        }
    }

    return (
        <>
            <Card className='col-md-3 col-sm-12 mx-md-5 shadow' >
                <Card.Img variant="top" className=' pt-3 service-img border-none' height={'400px'} src={img} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text className='mb-1'>
                        {description.slice(0, 70)}
                    </Card.Text>
                    <p className='text-align-center mt-0'>${price}</p>
                    <Button onClick={handleBooking} className='service-btn w-100 '>BOOK</Button>
                </Card.Body>
            </Card>
        </>
    );
};

export default Service;