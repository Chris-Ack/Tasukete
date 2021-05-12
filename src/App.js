import React, { useState, useEffect } from "react";
import "./styles/App.css";
import axios from "axios";

function App() {
  const [test, setTest] = useState([]);

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
    testCall();
  }, []);

  return (
    <>
      <div className="App">
        <h1>HELLO THIS IS definitely not GAETAN</h1>
        <div className="container">
          {test}
        </div>
      </div>
    </>
  );
}

export default App;
