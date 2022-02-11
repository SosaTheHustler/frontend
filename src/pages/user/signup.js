import React, { useState, useEffect } from "react";
import "./user.css";
import { Link } from "react-router-dom";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");
  const [errors, setErrors] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (localStorage.getItem("token") !== null) {
    } else {
      setLoading(false);
    }
  }, []);

  const onSubmit = (e) => {
    e.preventDefault();

    const user = {
      username: username,
      password1: password1,
      password2: password2,
    };

    fetch("http://127.0.0.1:8000/api/v1/users/auth/register/", {
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
          window.location.replace("http://localhost:3000/login");
        } else {
          setUsername("");
          setPassword1("");
          setPassword2("");
          localStorage.clear();
          setErrors(true);
        }
      });
  };

  return (
    <div className="background">
      <div className="form-container">
        {loading === false && <h1>Signup</h1>}
        <br></br>
        {errors === true && <h2>Cannot signup with provided credentials</h2>}
        <form className="form" onSubmit={onSubmit}>
          <input
            placeholder="Username"
            name="Username"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />{" "}
          <input
            placeholder="Password"
            name="password1"
            type="password"
            value={password1}
            onChange={(e) => setPassword1(e.target.value)}
            required
            pattern=".{8,}"
          />{" "}
          <input
            placeholder=" Confirm Password"
            name="password2"
            type="password"
            value={password2}
            onChange={(e) => setPassword2(e.target.value)}
            required
            pattern=".{8,}"
          />{" "}
          <input className="submit" type="submit" value="Signup" />
          <Link className="new" to="/login">
            Already have an account?
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Signup;
