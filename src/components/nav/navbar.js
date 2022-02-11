import React, { useState, useEffect, Fragment } from "react";
import { Link } from "react-router-dom";
import "./nav.css";
import data from "../../data";

function menuToggle() {
  const toggleMenu = document.querySelector(".sidebar");
  toggleMenu.classList.toggle("show-sidebar");
}

const Navbar = () => {
  const [username, setUsername] = useState("");
  const [isAuth, setIsAuth] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (localStorage.getItem("token") !== null) {
      setIsAuth(true);
    }
  }, []);

  useEffect(() => {
    if (localStorage.getItem("token") === null) {
    } else {
      fetch("http://127.0.0.1:8000/api/v1/users/auth/user/", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Token ${localStorage.getItem("token")}`,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          setUsername(data.username);
          setLoading(false);
        });
    }
  }, []);

  return (
    <div>
      <nav>
        <div className="nav-end">
          <img
            className="burger"
            src="/img/menu.png"
            id="menu"
            onClick={menuToggle}
          ></img>
          <Link to="/">
            <h2>HowTo</h2>
          </Link>
        </div>

        <div className="nav-end">
          <Fragment>
            <Link to="/createpost">
              <h2>Create Post</h2>
            </Link>
          </Fragment>
        </div>
      </nav>
      <div className="spacer"></div>

      <ul className="user-auth">
        {isAuth === true ? (
          <Fragment>
            {" "}
            <li>
              <Link to="/logout">Logout</Link>
            </li>
          </Fragment>
        ) : (
          <Fragment>
            {" "}
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/signup">Signup</Link>
            </li>
          </Fragment>
        )}
      </ul>
    </div>
  );
};

export default Navbar;
