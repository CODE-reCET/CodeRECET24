// Login.jsx
import React, { useState } from 'react';
import './Login.css';
import Navbar from '../../components/Navbar';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // handle login logic here
  };

  return (
    <>
    <Navbar />
    <div className="login-container">
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">Login</button>
        </form>
      </div>
      <div className="link-container">
        <a href="/signup" className="link">Sign Up</a>
        <a href="/forgot-password" className="link">Forgot Password?</a>
      </div>
    </div>
    </>
  );
};

export default Login;
