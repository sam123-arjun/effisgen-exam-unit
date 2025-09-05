import React, { useState } from 'react';
import './Login.css';
import { validateCredentials, demoCredentials } from './demo-credentials';

function Login({ onLogin }) {
  const [userType, setUserType] = useState('Exam Unit');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const userTypes = ['Exam Unit', 'Student', 'Invigilator'];

  const handleSubmit = (e) => {
    e.preventDefault();
    // Basic validation
    if (email && password) {
      // Validate credentials using demo data
      if (validateCredentials(userType, email, password)) {
        onLogin({ userType, email, password });
      } else {
        alert('Invalid credentials. Please check your email and password.');
      }
    } else {
      alert('Please fill in all fields');
    }
  };

  return (
    <div className="login-container">
      {/* Banner with 3D shapes */}
      <div className="login-banner">
        <div className="shape shape-1"></div>
        <div className="shape shape-2"></div>
      </div>

      {/* Main content */}
      <div className="login-content">
        {/* App title */}
        <div className="login-header">
          <h1 className="app-title">EffiESGen</h1>
          <p className="app-tagline">Efficient Exam Scheduling with Collaboration</p>
        </div>

        {/* User type tabs */}
        <div className="user-type-tabs">
          {userTypes.map((type) => (
            <button
              key={type}
              className={`tab-button ${userType === type ? 'active' : ''}`}
              onClick={() => setUserType(type)}
            >
              {type}
            </button>
          ))}
        </div>

        {/* Login form */}
        <form className="login-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              required
            />
          </div>

          <div className="forgot-password">
            <a href="#" className="forgot-link">Forgot Password?</a>
          </div>

          <button type="submit" className="login-button">
            Login
          </button>
        </form>

        {/* Demo credentials helper */}
        <div className="demo-credentials">
          <h4>Demo Credentials for Testing:</h4>
          <div className="credentials-list">
            {demoCredentials[userType].map((cred, index) => (
              <div key={index} className="credential-item">
                <strong>Email:</strong> {cred.email}<br />
                <strong>Password:</strong> {cred.password}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
