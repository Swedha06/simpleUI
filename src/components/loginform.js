import React from "react";
import "./loginform.css"
const LoginForm=()=>{
    return(
        <div className="cover">
            <br></br>
          <h1>Login</h1>
          <input type="text" placeholder="Username"/>
          <input type="password" placeholder="Password"/>
          <div className="login-btn">Login</div>
          <p className="text">Or</p>
          <div className="alt-login">
          <p class="text-center">Don't have an account? <a href="signup.php">Sign Up</a></p>
          </div>

          
        </div>
    )
}
export default LoginForm