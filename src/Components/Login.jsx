import React, { useState } from 'react';
import { Link } from "react-router-dom";


const Login = () => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className="login-container">
      <h1 className="login-title">Login</h1>
      <label htmlFor="name" className="signup-label">Username:
        <input type="text" id="name" className="signup-input" value={name} placeholder='Enter Username' onChange={(e) => setName(e.target.value)} />
      </label>
      <label htmlFor="password" className="login-label">Password:
        <input type="password" id="password" className="login-input" value={password} placeholder='Enter Password' onChange={(e) => setPassword(e.target.value)}/>
      </label>
      <div className="login-link">
        <Link to="/" className='link'>Login</Link>
      </div>
    </div>
  );
};

export default Login;
