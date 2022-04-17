import React from 'react';
import { useParams } from 'react-router-dom';

const CheckOut = () => {
    const { checkoutId } = useParams()
    return (
        <div>
            <p>this is checkout</p>
        </div>
    );
};

export default CheckOut;