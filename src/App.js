import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { connectClient } from './services/thrift';

function App() {
  const [userId, setUserId] = useState(1);
  const [response, setResponse] = useState({});

  const handleChange = e => {
    setUserId(e.target.value);
  };

  const onSubmit = async () => {
    try{
      setResponse(await connectClient(userId));
    }
    catch (err) {
      setResponse(err);
    }
  }

  const userDetail = () => {
    if (Object.keys(response).length > 0) {
      return (
        <div>
          Name: {response.name}
          <br />
          Email: {response.email}
        </div>
      );
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <label>
          Enter User ID (1 to 5):&nbsp;
          <input type="text" value={userId} onChange={e => handleChange(e)} />
        </label>
        <br />
        <button onClick={onSubmit}>Submit</button>
        <br />
        <h2>{response.message || userDetail() }</h2>
      </header>
    </div>
  );
}

export default App;
