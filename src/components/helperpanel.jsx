import axios from 'axios';
import React, { useState, useEffect } from 'react';
import CheckoutButton from './checkout'

export default function HelperPanel() {
    //TODO fetch information from database: image, name, location, id, dob, description, {services: price}

    const [information, setInformation] = useState([])
    // const [orderInfo, setOrderInfo] = useState([])

    const getHelper = async() => {
        //TODO check the route
        const res = await axios.get('/api/helper/:name');
        setInformation(res.data);
    }

    // const getOrderInfo = async() => {
    //     //TODO check the route for service database
    //     const res = await axios.get('/api/orderinfo/:orderid');
    //     setOrderInfo(res.data);
    // }

    // function orderInfo() {
    //     return (
    //         <div>
    //             <h1></h1>
    //         </div>
    //     )
    // }

    useEffect(() => {
        getHelper();
        // getOrderInfo();
    }, []);


    return (
        <>
            <div className="helper-panel">
                <img src="./asset/banner.png" id="banner-photo" alt="banner-photo"/>
                <div className="helper-information">
                    {/* TODO check what info database holds */}
                    <h3>{information.name} is ready to help...</h3>
                    <img src={information.picture} id="helper-picture" alt="helper-picture"/>
                </div>
                <div id="button-container">
                <button>Next</button>
                <CheckoutButton /> 
                </div>


            </div>
        </>
    )
}