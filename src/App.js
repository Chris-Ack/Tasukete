import React, { useState, useEffect } from "react";
import "./styles/App.css";
import axios from "axios";
import HelperPanel from './components/helperpanel';
import Formpage from "./components/formpage";
import LoginPanel from "./components/LoginPanel.jsx"

function App() {

  const [test, setTest] = useState([]);
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

  async function testCall() {
    try {
      const res = await axios.get('/v1/payment_intents/:id');
      console.log(res.data)
      setTest(res.data);
      console.log(test);
    } catch (e) {
      console.error("Error test", e);
    }
  }

  useEffect(() => {
    //testCall();
    userCall();
  }, []);

  return (
    <>
      <div className="App">
        <h1>HELLO THIS IS definitely not GAETAN</h1>
        <div className="container">
          {test}
        </div>
        <HelperPanel />

        {/* {component inserted only for testing purposes, to remove} */}
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
  );
}

export default App;
