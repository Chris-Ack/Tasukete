import React, { useEffect, useState } from 'react';
import wards from './data/tokyowards.json'
import { BrowserRouter as Router, Switch, Route, Link, Redirect, useHistory } from "react-router-dom";


const services = [{ name: 'Administration', price: 2500 }, { name: 'Banking', price: 2000 },
{ name: 'Phone', price: 1500 }, { name: 'Postal', price: 800 }, { name: 'Apartments', price: 2000 },
{ name: 'Immigration', price: 2000 }]


export default function FormPage() {
    const [userInfo, setUserInfo] = useState({});
    let history = useHistory();

    const redirect = () => {   
    history.push('/helperPanel');
  }

  const passInformation = () => {
      // gets the form entries
    let name = document.getElementById('user-name').value;
    let contact = document.getElementById('user-contact').value;
    let date = document.getElementById('calendar-form-dropdown').value;
    let location = document.getElementById('location-list').value;
    let description = document.getElementById('problem-description').value;

    // assign form entries to new object and update the state
    let newInfo = Object.assign({}, userInfo);
    newInfo.name = name;
    newInfo.contact = contact;
    newInfo.date = date;
    newInfo.location = location;
    newInfo.description = description;

    setUserInfo(newInfo);
  }
    return (
        <>
            <div className="form-container">
                <h1>Please enter the following info:</h1>
                <p>This information will be used to select the right person to help you.</p>
                <form>
                    <label for="user-name">Name: </label>
                    <input type="text" id="user-name" /><br />
                    <label for="user-contact">Contact: </label>
                    <input type="text" id="user-contact" value="079-7865-9876"/>
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
                        <label htmlFor="">
                            <textarea name="problem description" id="problem-description" cols="30" rows="5" value="I would like to open an account at Jp PostBank. Thank you very much for your help!"></textarea>
                        </label>
                    </div>
                    <button className="submitFormButton" onClick={() => {redirect(); passInformation()}}>Submit Information</button>
                </form>
            </div>
        </>
    )
}