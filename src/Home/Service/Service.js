import React from 'react';
import { Button, Card } from 'react-bootstrap';

const Service = ({ service }) => {
    const { name, picture } = service;
    return (
        <>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={picture} />

            </Card>
        </>
    );
};

export default Service;