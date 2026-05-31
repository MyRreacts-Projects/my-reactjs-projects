import React from "react";
import "./signup.css";

const SignUp = () => {
  return (
    <div className="signup-page">

      <div className="signup-left">
        <h1>Welcome to Dilsybuy</h1>
        <p>Join us and start your smart shopping journey today.</p>

        <div className="benefits">
          <div>✔ Fast Delivery</div>
          <div>✔ Secure Payments</div>
          <div>✔ Best Quality Products</div>
        </div>
      </div>

      <div className="signup-right">

        <div className="signup-card">

          <h2>Create Account</h2>
          <p>Sign up to get started</p>

          <form>
            <input type="text" placeholder="Full Name" />
            <input type="email" placeholder="Email Address" />
            <input type="password" placeholder="Password" />
            <input type="password" placeholder="Confirm Password" />

            <button>Create Account</button>
          </form>

          <span className="login-text">
            Already have an account? <b>Login</b>
          </span>

        </div>

      </div>

    </div>
  );
};

export default SignUp;