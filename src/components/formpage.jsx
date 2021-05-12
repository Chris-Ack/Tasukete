import React, { useEffect, useState } from 'react';
import wards from './data/tokyowards.json'


const services = [{ name: 'Administration', price: 2500 }, { name: 'Banking', price: 2500 },
{ name: 'Phone', price: 1500 }, { name: 'Postal', price: 800 }, { name: 'Apartments', price: 2000 },
{ name: 'Immigration', price: 2000 }]


export default function FormPage() {
    const [serviceSelected, setServiceSelected] = useState({});

    const handleClick = (e) => {
        console.log(e);
    }

    return (
        <>
            <div id="form-container">
                <h1>Give us some more information?</h1>
                <p>These information shall be used to select the right person to help you</p>
                <form id="info-form">
                    <label for="user-name">Name: </label>
                    <input type="text" id="user-name" /><br />
                    <label for="user-contact">Contact: </label>
                    <input type="text" id="user-contact" />
                    <div id="form-calendar">
                        <label for="calendar-form-dropdowm">When do you need help: </label>
                        <input type="date" id="calendar-form-dropdown" data-data-inline-picker="true" />
                    </div>
                    <div id="services-container">
                        <label for="services-list">You need help with: </label>
                        <select name="services list" id="services-list">
                            {services.map((service) => {
                                return <option value={service.name.toLowerCase()}>{service.name}: {service.price}</option>
                            })}
                        </select>
                    </div>
                    <div id="location-container">
                        <label for="location-list">Where: </label>
                        <select name="location list" id="location-list">
                            {wards.map((ward) => {
                                return <option value={ward.name.toLowerCase()}>{ward.name}</option>
                            })}
                        </select>
                    </div>
                    <div id="description-container">
                        <label for="problem-description">
                            <textarea name="problem description" id="problem-description" cols="30" rows="5"></textarea>
                        </label>
                    </div>      
                <input type="submit" form="info-form" id='info-form-button' onClick={handleClick} value="Submit"/>
                </form>
            </div>
        </>
    )
}