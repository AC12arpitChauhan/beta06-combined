import React from 'react';
import './Auth.css'; // Make sure to create this CSS file based on your styles

const Signup = () => {
  return (
    <div className="signup-container">
      <h1>Create an Account</h1>
      <form className="signup-form">
        <input type="text" placeholder="Name" required />
        <input type="email" placeholder="Email Address" required />
        <input type="text" placeholder="Country" required />
        <input type="tel" placeholder="Phone" required />
        <input type="password" placeholder="Password" required />
        <div className="terms">
          <input type="checkbox" required />
          <label>
            I agree to the <a href="#">Terms & Conditions</a>
          </label>
        </div>
        <button type="submit">CREATE ACCOUNT</button>
      </form>
      <a href="/login" className="login-link">
        Already have an account? Sign in
      </a>
    </div>
  );
};

export default Signup;
