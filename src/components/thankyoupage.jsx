import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom";


export default function ThankYou() {
    return (
    <>
        <section>
         <div className='thankyou-container'>
           <h1 className='thankyou'>Thank you!</h1>
           <p className="email"><strong>Please check your email</strong> for further instructions on how to contact your helper.</p>            
        </div>
        </section>
    </>
    )
}







