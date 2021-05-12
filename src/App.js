import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom";
import "./styles/App.css";
import axios from "axios";
import HelperPanel from './components/helperpanel';
import Formpage from "./components/formpage";
import LoginPanel from "./components/LoginPanel.jsx"


function App() {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [users, setUsers] = useState([]);
  const [currentUser, setCurrentUser] = useState([])

  async function userCall() {
    try {
      const res = await axios.get('/api/tasukete/users');
      setUsers(res.data);
      } catch (e) {
      console.error("Error test", e);
    }
  }


  useEffect(() => {
    userCall();
  }, []);

  return (
    <div className="App">
      <Router>
         
      <Route path="/login">
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
          />
      </Route>
       <Route path="/HelperPanel">
         <HelperPanel />
       </Route>
       <Route path="/HelperPanel">
         <HelperPanel />
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