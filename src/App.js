import React, { useState, useEffect } from "react";
import "./styles/App.css";
import axios from "axios";
import HelperPanel from './components/helperpanel';
import Formpage from "./components/formpage";

function App() {
  const [test, setTest] = useState([]);

  async function testCall() {
    try {
      const res = await axios.get("/api/tasukete");
      setTest(res.data);
      console.log(test);
    } catch (e) {
      console.error("Error test", e);
    }
  }

  useEffect(() => {
    testCall();
  }, []);

  return (
    <>
      <div className="App">
        <h1>HELLO THIS IS definitely not GAETAN</h1>
        <div className="container">
          {test.map((element, index) => (
            <p className="test" key={index}>
              {element.name}
            </p>
          ))}
        </div>
        <HelperPanel />

        {/* {component inserted only for testing purposes, to remove} */}
        <Formpage />
      </div>
    </>
  );
}

export default App;
