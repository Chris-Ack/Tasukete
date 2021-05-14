import axios from 'axios';
import React, { useState, useEffect } from 'react';
import CheckoutButton from './checkout'



export default function HelperPanel({ helperInfo, setHelperInfo, userInfo, setUserInfo, matchingHelpers, setMatchingHelpers }) {
    let i = 0

    // useEffect(() => {
        
    //     if (rightHelper.length !== 0) {
    //     getCorrectHelpers(); }
    // }, []);

    function nextHelper() {
        if (i < matchingHelpers.length) {i++}
        else if (i = matchingHelpers.length) {i = 0}
    }

    

    return (
        <>
            <div className="helper-panel">
                <div className="helper-information">
                    {/* TODO check what info database holds */}
                    <h3>{matchingHelpers[i].first_name} is ready to help...</h3>
                    <img src={matchingHelpers[i].image} id="helper-picture" alt="helper-picture" />
                </div>
                <div id="button-container">
                    <button id="next-btn" onClick={nextHelper}></button>
                    <CheckoutButton />
                </div>


            </div>
        </>
    )
}