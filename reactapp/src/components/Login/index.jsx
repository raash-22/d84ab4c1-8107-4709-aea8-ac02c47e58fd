import React, { useState } from "react";
 import "../Login/index.css";

export default function Login() {
 
  return (
    <form>
    <h1 className="heading">Login</h1>
    
    
    <div className="group">
      <input type="email" required="required"/><span className="highlight"></span><span className="bar"></span>
      <label>Enter Email</label>
    </div>
    
    <div className="group">
      <input type="password" required="required"/><span className="highlight"></span><span className="bar"></span>
      <label>Enter Password</label>
    </div>
   
    <div className="btn-box">
      <button className="btn btn-submit" type="submit">Login</button>
    </div>
    <p>New user?  <a href="/signup">Sign Up</a></p>

  </form>
  );
}