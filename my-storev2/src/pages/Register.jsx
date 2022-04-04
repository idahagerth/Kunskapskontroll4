import React, { useState } from "react";
import { useRecoilState } from "recoil";
import { authState } from "../recoil/auth/atom";
import { useNavigate } from "react-router-dom";

function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [token, setToken] = useRecoilState(authState);
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [street, setStreet] = useState("");
  const [number, setNumber] = useState("");
  const [zipcode, setZipcode] = useState("");
  const [phone, setPhone] = useState("");

  async function Register() {
    const result = await fetch("https://k4backend.osuka.dev/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        username: username,
        password: password,
        role: "user",
        name: {
          firstname: firstname,
          lastname: lastname,
        },
        address: {
          city: city,
          street: street,
          number: number,
          zipcode: zipcode,
        },
        phone: phone,
      }),
    });

    if (result.status === 400) {
      console.log("Username or password incorrect");
      return;
    }

    const json = await result.json();
    setToken(json.token);
    console.log(json.token);
    console.log(json);
    navigate("/MyProfile");
  }
  return (
    <div>
      <div className="reg1">
        <input
          className="a"
          name="email"
          placeholder="Email"
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <input
          className="b"
          name="firstname"
          placeholder="First Name"
          type="text"
          value={firstname}
          onChange={(e) => setFirstname(e.target.value)}
        />
        <br />
        <input
          className="c"
          name="lastname"
          placeholder="Last Name"
          type="text"
          value={lastname}
          onChange={(e) => setLastname(e.target.value)}
        />
        <br />
        <input
          className="d"
          name="city"
          placeholder="City"
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <br />
        <input
          className="e"
          name="street"
          placeholder="Street"
          type="text"
          value={street}
          onChange={(e) => setStreet(e.target.value)}
        />
      </div>
      <div className="reg2">
        <input
          className="f"
          name="number"
          placeholder="Street number"
          type="text"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
        />
        <br />
        <input
          className="g"
          name="zipcode"
          placeholder="ZIP Code"
          type="text"
          value={zipcode}
          onChange={(e) => setZipcode(e.target.value)}
        />
        <br />

        <input
          className="h"
          name="phone"
          placeholder="Phone Number"
          type="text"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <br />

        <input
          className="i"
          name="username"
          placeholder="Username"
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <br />
        <input
          className="j"
          placeholder="Password"
          name="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button className="k" onClick={Register}>
        Create account
      </button>
    </div>
  );
}

export default Register;
