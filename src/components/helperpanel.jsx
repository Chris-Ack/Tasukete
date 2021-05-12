import axios from 'axios';
import React, { useState, useEffect } from 'react';
import CheckoutButton from './checkout'



export default function HelperPanel() {
    //TODO fetch information from database: image, name, location, id, dob, description, {services: price}

    const [helpers, setHelpers] = useState([])
    // const [orderInfo, setOrderInfo] = useState([])

    const getHelpers = async() => {
        //TODO check the route
        const res = await axios.get('/api/tasukete/helpers');
        setHelpers(res.data);
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
        getHelpers();
        // getOrderInfo();
    }, []);


    return (
        <>
            <img src="./asset/banner.png" id="banner-photo" alt="banner-photo"/>
            <div className="helper-panel">
                {/* helpers.filter(helper => { 

                } ) */}
                <div className="helper-information">
                    {/* TODO check what info database holds */}
                    <h3>{helper.first_name} is ready to help...</h3>
                    <img src={helper.first_name} id="helper-picture" alt="helper-picture"/>
                </div>
                <div>
                <h3>{helper.first_name} can help you with...</h3>
                <p>insert order info here</p>
                </div>
                <div id="button-container">
                <button>Next</button>
                <CheckoutButton /> 
                </div>
            </div>
        </>
    )
}