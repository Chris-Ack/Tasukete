import axios from 'axios';
import React, { useState, useEffect } from 'react';
import CheckoutButton from './checkout'

export default function HelperPanel() {
    //TODO fetch information from database: image, name, location, id, dob, description, {services: price}

    const [information, setInformation] = useState([])
    const [orderInfo, setOrderInfo] = useState([])

    const getHelper = async() => {
        //TODO check the route
        const res = await axios.get('/api/helper/:name');
        setInformation(res.data);
    }

    const getOrderInfo = async() => {
        //TODO check the route for service database
        const res = await axios.get('/api/orderinfo/:orderid');
        setOrderInfo(res.data);
    }

    useEffect(() => {
        getHelper();
        getOrderInfo();
    }, []);


    return (
        <>
            <div className="helper-panel">

                <img src="./asset/owl.jpeg" id="helper-photo" alt="helper-photo"/>
                <div className="helper-information">
                    <h1>{information.name} is ready to help you! 🎃</h1>
                    <h2>description</h2>
                    {information.description}
                    <h2>Service</h2>
                    <ul>
                        {/* TODO check what info database holds */}
                        <li>{orderInfo}</li>
                    </ul>
                </div>
                <CheckoutButton />

            </div>
        </>
    )
}