import React, { useContext } from "react";
import "../App.css";
import { useFormik } from "formik";
import { UsersContext } from "./signUp";
import { AuthContext } from './login';

function addEventListeners() {
  const signUpButton = document.getElementById("signUp");
  const signInButton = document.getElementById("signIn");
  const container = document.getElementById("container");

  signUpButton.addEventListener("click", () => {
    container.classList.add("right-panel-active");
  });

  signInButton.addEventListener("click", () => {
    container.classList.remove("right-panel-active");
  });
}
window.onload = addEventListeners;


const AppLogin = () => {
  const { addNewUser, users, setUsers, errorMsg, setErrorMsg } = useContext(UsersContext);
  const { err, setErr, checkUser, be, setBe} = useContext(AuthContext)
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const formik2 = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
  });

  const handlesubmitSignup = (event) => {
    event.preventDefault();
    let newVal = formik.values;
    addNewUser(newVal);
    setTimeout(() => {
      formik.handleReset();
    }, 3000);

    console.log("hello");
  };

  const handlesubmitLogin = (event) => {
    event.preventDefault();
    let newVal=formik2.values
    checkUser(newVal)
    setTimeout(() => {
        formik2.handleReset()
    }, 3000);
  };

  return (
    <div>
      <div class="container" id="container">
        <div class="form-container sign-up-container">
          <form
            action="#"
            id="Create account!!!!"
            onSubmit={(event) => handlesubmitSignup(event)}
          >
            <h1>Create Account</h1>
            <div class="social-container">
            <label>{errorMsg}</label>
            </div>
            <span>or use your email for registration</span>
            <input
              type="text"
              placeholder="Name"
              name="name"
              value={formik.values.name}
              onChange={formik.handleChange}
            />
            <input
              type="email"
              placeholder="Email"
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
            />
            <input
              type="password"
              placeholder="Password"
              name="password"
              value={formik.values.password}
              onChange={formik.handleChange}
            />
            <button type="submit">Sign Up</button>
          </form>
        </div>
        <div class="form-container sign-in-container">
          <form
            action="#"
            id="Sign In!!!!!!"
            onSubmit={(event) => handlesubmitLogin(event)}
          >
            <h1>Sign in</h1>
            <div class="social-container">
                <label>{err}</label>
            </div>
            <span>or use your account</span>
            <input type="email" placeholder="Email" name="email" value={formik2.values.email} onChange={formik2.handleChange} />
            <input type="password" placeholder="Password" name="password" value={formik2.values.password} onChange={formik2.handleChange}/>
            <a href="#">Forgot your password?</a>
            <button type="submit">Sign In</button>
          </form>
        </div>
        <div class="overlay-container">
          <div class="overlay">
            <div class="overlay-panel overlay-left">
              <h1>Welcome Back!</h1>
              <p>
                To keep connected with us please login with your personal info
              </p>
              <button class="ghost" id="signIn">
                Sign In
              </button>
            </div>
            <div class="overlay-panel overlay-right">
              <h1>Hello, Friend!</h1>
              <p>Enter your personal details and start journey with us</p>
              <button class="ghost" id="signUp">
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppLogin;
