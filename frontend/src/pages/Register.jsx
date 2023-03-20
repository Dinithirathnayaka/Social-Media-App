import React from "react";

export default function Register() {
  return (
    <div>
      <div className="login">
        <div className="loginWrapper">
          <div className="loginLeft">
            <h3 className="loginLogo">Dinisocial</h3>
            <span className="loginDesc">
              Connect with friends & the world around you on Dinisocial
            </span>
          </div>
          <div className="loginRight">
            <div className="loginBoxRegister">
              <input placeholder="Username" className="loginInput" />
              <input placeholder="Email" className="loginInput" />
              <input placeholder="Password" className="loginInput" />
              <input placeholder="Password Again" className="loginInput" />
              <button className="loginButton">Sign Up</button>

              <button className="loginRegiterButton">
                Log into your Account
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
