import React from 'react';
import "../Signup/styles.css";

export default function Signup() {
  return (
   
  <form>
    <h1 className="heading">Register</h1>
  
    <div className="group">
      <input type="email" required="required"/><span className="highlight"></span><span className="bar"></span>
      <label>Enter email</label>
    </div>
    <div className="group">
      <input type="text" required="required"/><span className="highlight"></span><span className="bar"></span>
      <label>Enter username</label>
    </div>
    <div className="group">
      <input type="text" required="required"/><span className="highlight"></span><span className="bar"></span>
      <label>Enter Mobile Number</label>
    </div>
    <div className="group">
      <input type="password" required="required"/><span className="highlight"></span><span className="bar"></span>
      <label>Password</label>
    </div>
    <div className="group">
      <input type="password" required="required"/><span className="highlight"></span><span className="bar"></span>
      <label>Confirm Password</label>
    </div>
    
    <div className="btn-box">
      <button className="btn btn-submit" type="submit">submit</button>
    </div>
    <p>
      Already a user ? <a href="/login">Login</a>
    </p>
  </form>
    
  );
}