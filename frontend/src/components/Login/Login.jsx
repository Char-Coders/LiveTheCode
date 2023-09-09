import React from "react";
import './Login.css'

function Login() {
  return (
    <>
      <div class="background">
        <div class="shape"></div>
        <div class="shape"></div>
      </div>
      <form className={"loginForm"}>
        <h3>Login Here</h3>

        <label for="username">Username</label>
        <input type="text" placeholder="Email or Phone" id="username" />

        <label for="password">Password</label>
        <input type="password" placeholder="Password" id="password" />

        <button className="loginBtn">Log In</button>
        <div class="social">
          <div class="go">
            <i class="fab fa-google"></i> Google
          </div>
          <div class="fb">
            <i class="fab fa-facebook"></i> Facebook
          </div>
        </div>
      </form>
    </>
  );
}

export default Login;
