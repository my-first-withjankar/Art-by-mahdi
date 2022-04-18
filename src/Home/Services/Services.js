import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';

const Services = () => {

    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    return (
        <div id='services' className='mt-5 mb-4 container'>
            <div className=' d-flex align-items-center flex-column mb-5'>
                <div className='w-50' style={{ height: '1px', backgroundColor: 'lightgray' }}></div>
                <h2 style={{ color: 'rgb(116, 116, 116)' }}>MAHID'S ART SERVICE </h2>
                <div className='w-50' style={{ height: '1px', backgroundColor: 'lightgray' }}></div>
            </div>
            <div className="row g-5">
                {
                    services.map(service => <Service key={service._id} service={service}></Service>)
                }
            </div>
        </div >
    );
};

export default Services;