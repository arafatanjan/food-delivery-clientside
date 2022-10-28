import React, { useEffect, useState } from 'react';
import Servicing from './Servicing';
import './Services.css'


const Services = () => {
    const [services, setServices] = useState([])


    useEffect(() => {
        // fetch('http://localhost:5000/services')
        fetch('https://cryptic-tor-20048.herokuapp.com/services')
            // fetch('services.json')
            .then(res => res.json())
            .then(data => setServices(data));
    }, []);



    return (
        <div className='service-container' id="services">

            {
                services.map((service, index) => <Servicing
                    key={service._id}
                    service={service}>
                </Servicing>)

            }
        </div>
    );
};

export default Services;