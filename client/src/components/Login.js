import React, { useState } from "react";
import { axiosWithAuth } from "./axiosAuth";

const Login = props => {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  const [credentials, setCredentials] = useState({});
  const login = e => {
    e.preventDefault();
    axiosWithAuth().post('/login', credentials)
    .then(res => {
      localStorage.setItem('token', res.data.payload);
      props.history.push("/bubblepage");
    })
  }
  const handleChange = e => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value
    })
  }
  return (
    <>
      <h1>Welcome to the Bubble App!</h1>
      <form onSubmit={login}>
        <input type="text" name="username" placeholder="username" onChange={handleChange} value={credentials.name}/>
        <br/>
        <input type="password" name="password" placeholder="password" onChange={handleChange} value={credentials.name}/>
        <br/>
        <button>Log in</button>
      </form>
    </>
  );
};

export default Login;
