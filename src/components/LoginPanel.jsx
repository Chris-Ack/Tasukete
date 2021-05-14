import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom";

export default function LoginPanel({ users, currentUser, setCurrentUser, username, setUsername, password, setPassword }) {

    const [userField, setUserField] = useState("")
    const [passField, setPassField] = useState("")
    const [passedCheck, setPassedCheck] = useState(false)

    async function loginSubmitButton() {
        const correctUser = users.filter(user => user.username === username && user.password === password)
        console.log(correctUser)
        if (correctUser.length === 0) { console.log("WRONG"); return alert("Error, please select matching username and password.") }
        else {
            setCurrentUser(correctUser)
            setPassedCheck(true)
        }
    }
    /*
        useEffect(() => {
            currentUser.length !== 0;
            console.log("trigger")
        }, [currentUser])
    */
    return passedCheck ? (
        <section>
            <Redirect to="/formpage" />
        </section>
    ) : (
            <section>
                <div id="login-container">
                    <form>
                        <h1>Login</h1>
                    <div>
                        <label htmlFor="userField">Username </label>
                        <br/>
                        <input type="text" id="userField" name="userField" placeholder="Enter Username" maxLength="16" onChange={(e) => setUsername(e.target.value)} />
                        <br />
                        <label htmlFor="passField">Password</label>
                        <br/>
                        <input type="password" placeholder="Enter Password" id="passField" name="passField" maxLength="16" onChange={(e) => setPassword(e.target.value)} />
                        <br />
                   </div>
                    </form>
                    <button onClick={() => loginSubmitButton()}>Submit</button>
                </div>
            </section>
        )
}