import React, { useState } from "react";
import "./SignUpIn.css";
import logo from "../../assets/images/logo.svg";
import register from "../../assets/images/register.svg";
// import { firebaseApp } from "../../firebase";
import { Navigate, useNavigate } from "react-router-dom";

function SignUpIn({ user, setUser }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cnic, setCnic] = useState("");
  const [contact, setContact] = useState("");
  const [address, setAddress] = useState("");
  const [country, setCountry] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
//   const history = useHistory();
  const toggleSignIn = () => {
    const container = document.querySelector(".container");
    container.classList.add("sign-up-mode");
  };

  const toggleSignUp = () => {
    const container = document.querySelector(".container");
    container.classList.remove("sign-up-mode");
  };
  const handleLogout = () => {
  
  };
  const handleLogin = (e) => {
    
  };

  const handleSignup = (e) => {
     
  };

  // if user is true/false
  return false ? (
    <Navigate to="/home" />
   
  ) : (
    <div>
      <body>
        <div className="container">
          <div className="forms-container">
            <div className="signin-signup">
              <form action="#" className="sign-in-form">
                <h2 className="title">Sign in</h2>
                <div className="input-field">
                  <i className="fas fa-user"></i>
                  <input
                    type="text"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                  />
                </div>
                <div className="input-field">
                  <i className="fas fa-lock"></i>
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                  />
                </div>
                <input
                  onClick={handleLogin}
                  type="submit"
                  value="Login"
                  className="btn solid"
                />
                {user && <div onClick={handleLogout}> Logout</div>}
              </form>
              {/* sign up form */}
              <form action="#" className="sign-up-form">
                <h2 className="title">Sign up</h2>
                <div className="input-field">
                  <i className="fas fa-envelope"></i>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                  />
                </div>



                <div className="input-field">
                  <i className="fas fa-lock"></i>
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                  />
                </div>

                <div className="input-field">
                  <i className="fas fa-envelope"></i>
                  <input
                    type="text"
                    value={cnic}
                    onChange={(e) => setCnic(e.target.value)}
                    placeholder="CNIC"
                  />
                </div>

                <div className="input-field">
                  <i className="fas fa-envelope"></i>
                  <input
                    type="number"
                    value={contact}
                    onChange={(e) => setContact(e.target.value)}
                    placeholder="Contact"
                  />
                </div>

                <div className="input-field">
                  <i className="fas fa-envelope"></i>
                  <input
                    type="text"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    placeholder="Address"
                  />
                </div>

                <div className="input-field">
                  <i className="fas fa-envelope"></i>
                  <input
                    type="text"
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                    placeholder="Country"
                  />
                </div>


                <input
                  onClick={handleSignup}
                  type="submit"
                  className="btn"
                  value="Sign up"
                />
              </form>
            </div>
          </div>

          <div className="panels-container">
            <div className="panel left-panel">
              <div className="content">
                <h3>New to E-Serve ?</h3>
                <p>
                  Sign up Now! And enjoy the quality services through our web
                  app
                </p>
                <button
                  onClick={toggleSignIn}
                  className="btn transparent"
                  id="sign-up-btn"
                >
                  Sign up
                </button>
              </div>
              <img src={logo} className="image" alt="" />
            </div>
            <div className="panel right-panel">
              <div className="content">
                <h3>One of E-Serve Member ?</h3>
                <p>
                  Sign in Now! And enjoy the quality services through our web
                  app
                </p>
                <button
                  onClick={toggleSignUp}
                  className="btn transparent"
                  id="sign-in-btn"
                >
                  Sign in
                </button>
              </div>
              <img src={register} className="image" alt="" />
            </div>
          </div>
        </div>
      </body>
    </div>
  );
}

export default SignUpIn;
