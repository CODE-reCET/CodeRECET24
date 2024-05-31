import React, { useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth"; // Import signInWithEmailAndPassword function from Firebase Auth
import { auth } from "../../firebase"; // Import Firebase auth instance
import "./Login.css";
import logoGif from "../../assets/Logo.gif";
import { useNavigate } from "react-router-dom"; // Import useNavigate

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null); // Define error state
  const navigate = useNavigate(); // Get the navigate function

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Inside handleSubmit function
    try {
      // Sign in user with email and password
      await signInWithEmailAndPassword(auth, email, password);

      // Redirect user to the home page
      navigate("/home");
    } catch (error) {
      console.error("Error signing in:", error.message);
      setError(error.message); // Update error state
    }
  };

  return (
    <>
      <div className="login-container">
        <div className="sec1">
          <img src={logoGif} alt="Logo" className="logo" />
        </div>
        <div className="sec2">
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
              {error && <p className="error-message">{error}</p>}
              <button type="submit" className="btnn4">
                Login
              </button>
            </form>
          </div>
          <div className="link-container">
            <a href="/signup" className="link">
              Sign Up
            </a>
            <a href="/forgot-password" className="link">
              Forgot Password?
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
