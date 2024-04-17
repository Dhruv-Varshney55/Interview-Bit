import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  return (
    <div className="signup-container">
      <h2 className="signup-title">Signup</h2>
      <label htmlFor="email" className="signup-label">Email:
        <input type="text" id="email" className="signup-input" value={email} placeholder='Enter Email' onChange={(e) => setEmail(e.target.value)} />
      </label>
      <label htmlFor="name" className="signup-label">Username:
        <input type="text" id="name" className="signup-input" value={name} placeholder='Enter Username' onChange={(e) => setName(e.target.value)} />
      </label>
      <label htmlFor="password" className="signup-label">Password:
        <input type="password" id="password" className="signup-input" value={password} placeholder='Enter Password' onChange={(e) => setPassword(e.target.value)} />
      </label>
      <label htmlFor="confirmPassword" className="signup-label">Confirm Password:
        <input type="password" id="confirmPassword" className="signup-input" value={confirmPassword} placeholder='Enter Confirm Password' onChange={(e) => setConfirmPassword(e.target.value)} />
      </label>
      <div className='signup'>
        <Link to="/" className="submit">Signup</Link>
      </div>
      <div className="signup-link">
        <p>Already have an account? <Link to="/login" className="submit-link">Login</Link></p>
      </div>
    </div>
  );
};

export default Signup;
