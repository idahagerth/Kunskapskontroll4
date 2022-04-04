import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilState, useRecoilValue } from "recoil";
import { authState, userState } from "../recoil/auth/atom";

function Profile() {
  const [token, setToken] = useRecoilState(authState);
  const navigate = useNavigate();
  const [post, getPost] = useState([]);
  const [name, getName] = useState([]);
  const [address, getAddress] = useState([]);
  const API = `https://k4backend.osuka.dev/users/${token}`;
  const fetchPost = () => {
    fetch(API)
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        getPost(res);
        getName(res.name);
        getAddress(res.address);
      });
  };
  useEffect(() => {
    fetchPost();
  }, []);

  useEffect(() => {
    if (!token) {
      navigate("/Login");
    }
  }, [token]);

  return (
    <div>
      <div className="myded">
        <strong>Profile</strong>
        <p>Email: {post.email}</p>
        <p>User Name: {post.username}</p>
        <p>First Name: {name.firstname}</p>
        <p>Last Name: {name.lastname}</p>
        <strong>Address Details</strong>
        <p>City: {address.city}</p>
        <p>Street: {address.street}</p>
        <p>Adress Number: {address.number}</p>
        <p>ZIP Code: {address.zipcode}</p>
        <p>Telephone Number: {post.phone}</p>
      </div>

      <button className="logOut1" onClick={() => setToken("")}>
        Logout
      </button>
    </div>
  );
}

export default Profile;
