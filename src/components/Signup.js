import { Link } from "react-router-dom";
import '../App.css'
import { useState } from "react";
import axios from 'axios'

export default function Signup() {
  const [error, setError] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      name: document.querySelector(".name").value,
      registerno: document.querySelector(".regno").value,
      dept: document.querySelector(".dept").value,
      year: document.querySelector(".year").value,
      email: document.querySelector(".email").value,
      password: document.querySelector(".password").value,
    };
    console.log(data);
    axios
      .post("http://localhost:5000/register", data)
      .then((res) => {
        setError("Created account successfully");
        window.location.href = "/";
      })
      .catch((err) => {
        setError(err.message);
      });
  };

  return (
    <div className="signupContainer">
      <form
        style={{ display: "flex", flexDirection: "column" }}
        onSubmit={handleSubmit}
      >
        <div>{error && <div className="error-message">{error}</div>}</div>
        <button className="close-button">
          <Link to="/" style={{ color: "white", textDecoration: "none" }}>
            X
          </Link>
        </button>
        <h1 style={{ margin: "10px 0" }}>
          Lets Register <br />
          Account
        </h1>
        <p style={{ margin: "10px 0" }}>
          Hello user , you have
          <br />a greatful journey
        </p>

        <input typeof="text" placeholder="Name" className="name"></input>

        <input typeof="text" placeholder="Register number" className="regno"></input>

        <input typeof="text" placeholder="Dept" className="dept"></input>

        <input typeof="text" type="number" placeholder="Year" className="year"></input>

        <input typeof="text" placeholder="Email" className="email"></input>

        <input typeof="text" placeholder="Password" className="password"></input>
        
        <button className="loginButton" type="submit">
          Sign up
        </button>
        <a
          href="/"
          style={{ textDecoration: "none", color: "black", marginTop: 10 }}
        >
          Already have an account ?{" "}
          <b>
            <Link to="/login">Login</Link>
          </b>
        </a>
      </form>
    </div>
  );
}
