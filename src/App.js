import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom";
import "./styles/App.css";
import axios from "axios";
import HelperPanel from './components/helperpanel';
import Formpage from "./components/formpage";
import LoginPanel from "./components/LoginPanel.jsx"
import ThankYou from "./components/thankyoupage"
import Checkout from "./components/checkout"


function App() {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [users, setUsers] = useState([]);
  const [currentUser, setCurrentUser] = useState([]);
  const [userInfo, setUserInfo] = useState([]);
  const [helperInfo, setHelperInfo] = useState([]);
  const [matchingHelpers, setMatchingHelpers] = useState([]);

  async function userCall() {
    try {
      const res = await axios.get('/api/tasukete/users');
      setUsers(res.data);
      } catch (e) {
      console.error("Error test", e);
    }
  }

  async function helperCall() {
    try {
      const res = await axios.get('/api/tasukete/helpers');
      setHelperInfo(res.data);
      } catch (e) {
      console.error("Error test", e);
    }
  }


  useEffect(() => {
    userCall();
    helperCall();
  }, []);

  return (
    <div className="App">
    <img src="./asset/banner.png" id="banner-photo" alt="banner-photo"/>
      <Router>
         
      <Route exact path={["/login", "/"]}>
        <LoginPanel
          users = {users}
          currentUser = {currentUser}
          setCurrentUser = {setCurrentUser}
          username = {username}
          setUsername = {setUsername}
          password = {password}
          setPassword = {setPassword}
          />
      </Route>
      <Route path="/formpage">
        <Formpage
          userInfo={userInfo}
          setUserInfo={setUserInfo}
          helperInfo={helperInfo}
          setHelperInfo={setHelperInfo}
          matchingHelpers={matchingHelpers}
          setMatchingHelpers={setMatchingHelpers}
          />
      </Route>
       <Route path="/helperpanel">
         <HelperPanel 
         helperInfo={helperInfo}
         setHelperInfo={setHelperInfo}
         userInfo={userInfo}
         setUserInfo={setUserInfo}
         matchingHelpers={matchingHelpers}
         setMatchingHelpers={setMatchingHelpers}
         />
       </Route>
       <Route path="/checkout">
         <Checkout />
       </Route>

       <Route path="/thankyou">
         <ThankYou />
       </Route>
      
      </Router>
    </div>
  )
}


export default App;






/*

<>
      <div className="App">
        <HelperPanel />

        {/* {component inserted only for testing purposes, to remove} }
        <Formpage />

        <div>
          <LoginPanel
          users = {users}
          currentUser = {currentUser}
          setCurrentUser = {setCurrentUser}
          username = {username}
          setUsername = {setUsername}
          password = {password}
          setPassword = {setPassword}
          />
        </div>
      </div>
    </>
*/