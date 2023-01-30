import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

function Login() {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const response = await fetch(
        "http://13.232.128.66:8080/gj-erp/auth/login",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ username, password }),
        }
      );
      const storeData = await response.json();
      console.log(storeData);
      if (storeData.data.access_token) {
        localStorage.setItem("access_token", storeData.data.access_token);
        navigate("/dashboard");
      } else {
        setError(data.error);
      }
    } catch (err) {
      setError(err.message);
    }
  }

  return (
    <div className="login">
      <div className="container">
        <h2>Sign in</h2>
        <p>sign in to continue</p>
        <form onSubmit={handleSubmit}>
          <label> User Name</label>
          <br />
          <input
            type="text"
            placeholder="Enter your username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <br />
          <br />
          <label>Password</label>
          <br />
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <br /><br />
          <label className="label">Remember me</label> 
          <input type="checkbox" className="check"/><br />
          <a href="/home">Forgot Password</a>
          <button type="submit"><b>Sign in</b></button>
        </form>
      </div>
    </div>
  );
}

export default Login;
