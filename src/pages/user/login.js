import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./user.css";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (localStorage.getItem("token") !== null) {
      window.location.replace("http://localhost:3000/");
    } else {
      setLoading(false);
    }
  }, []);

  const onSubmit = (e) => {
    e.preventDefault();

    const user = {
      username: username,
      password: password,
    };

    fetch("http://127.0.0.1:8000/api/v1/users/auth/login/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.key) {
          localStorage.clear();
          localStorage.setItem("token", data.key);
          window.location.replace("http://localhost:3000/");
        } else {
          setUsername("");
          setPassword("");
          localStorage.clear();
          setErrors(true);
        }
      });
  };

  return (
    <div className="background">
      <div className="form-container">
        {loading === false && <h1>Login</h1>}
        {errors === true && <h2>Cannot log in with provided credentials</h2>}
        {loading === false && (
          <form className="form" onSubmit={onSubmit}>
            <input
              placeholder="Username"
              name="username"
              type="text"
              value={username}
              required
              onChange={(e) => setUsername(e.target.value)}
            />{" "}
            <input
              placeholder="Password"
              name="password"
              type="password"
              value={password}
              required
              onChange={(e) => setPassword(e.target.value)}
              pattern=".{8,}"
            />{" "}
            <input type="submit" value="Log in" className="submit" />
            <Link className="new" to="/signup">
              Create New Account
            </Link>
          </form>
        )}
      </div>
    </div>
  );
};

export default Login;
