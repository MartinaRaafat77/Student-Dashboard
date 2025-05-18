import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './home.css';

const Home = () => {
  const [name, setName] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (name.trim()) {
      localStorage.setItem("loggedIn", "true");
      localStorage.setItem("username", name);
      navigate("/dashboard");
    } else {
      alert("Please enter your name.");
    }
  };

  return (
    <div className="content-home">
      <h1>Coligo</h1>
      <h4>Start Learning New Skills Today.</h4>
      <input
        type="text"
        placeholder="Please enter your name."
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Home;
