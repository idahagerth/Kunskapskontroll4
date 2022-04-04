import React, { useState } from "react";
import { useRecoilState } from "recoil";
import { authState, userState } from "../recoil/auth/atom";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useRecoilState(authState);
  const [user, setUser] = useRecoilState(userState);
  const navigate = useNavigate();

  async function getToken() {
    const result = await fetch("https://k4backend.osuka.dev/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    });

    if (result.status === 400) {
      console.log("Username or password incorrect");
      return;
    }

    const json = await result.json();

    if (username == "admin" && password == "admin") {
      setUser("admin");
      navigate("/AdminProfile");
    } else {
      console.log(json.userId);
      setToken(json.userId);
      navigate("/MyProfile");
    }
  }

  return (
    <div>
      <div className="loginSideBar">
        <h1 className="titleLogin">Login</h1>
        <input
          className="userField"
          placeholder="Username"
          name="username"
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <br />
        <input
          className="passField"
          placeholder="Password"
          name="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button className="loginButton" onClick={getToken}>
          Login
        </button>
      </div>

      <div>
        <Link className="Register" to="/Register">
          Create Account
        </Link>
      </div>
    </div>
  );
}

export default Login;
