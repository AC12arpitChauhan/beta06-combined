import React, { useState } from 'react';
import './Auth.css'; // Make sure to create this CSS file based on your styles

const Login = () => {
  const [role, setRole] = useState('');
  const [showForm, setShowForm] = useState(false);

  const handleRoleChange = (event) => {
    const selectedRole = event.target.value;
    setRole(selectedRole);
    if (selectedRole) {
      setShowForm(true);
      // Change background based on the selected role
      document.body.style.background = `url(${
        selectedRole === 'Artist'
          ? 'try.jpg'
          : selectedRole === 'Musician'
          ? 'images.jpeg'
          : 'blue-abstract-background_698452-966.avif'
      }) no-repeat center center fixed`;
      document.body.style.backgroundSize = 'cover';
    }
  };

  return (
    <div className="login-container">
      {/* <div className="welcome-section">
        <h2>Welcome</h2>
        <p>Sign in to your account</p>
      </div> */}

      <div className="form-section">
        <h1>Login as {role || 'Your Account'}</h1>

        {!showForm && (
          <div className="role-selection">
            <select onChange={handleRoleChange}>
              <option value="">Select your role</option>
              <option value="Artist">Artist</option>
              <option value="Musician">Musician</option>
              <option value="Writer">Writer</option>
            </select>
          </div>
        )}

        {showForm && (
          <form className="login-form">
            <input type="text" placeholder="Email Address" required />
            <input type="password" placeholder="Password" required />
            <input type="hidden" value={role} />
            <button className='sub-button' type="submit">SUBMIT</button>
          </form>
        )}

        <a href="/signup" className="register-link">
          Don't have an account? Register
        </a>
      </div>
    </div>
  );
};

export default Login;
