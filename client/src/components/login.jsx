import React from "react";
import { createContext, useState, useEffect } from "react";
import axios from "axios";
import jwtDecode from "jwt-decode";

export const AuthContext = createContext();
const url = "http://localhost:4000/api/auth";

function AuthPasswordsProvider(props) {
  const [name, setName] = useState("");
    const {children}=props;
  // const children = props.children;
  const [err, setErr] = useState("Welcome there");
  const [be, setBe] = useState("");

  const checkUser = async (body) => {
    console.log(body);
    try {
      const response = await axios.post(url, body, {});
      localStorage.setItem("token", response.data);
      console.log(response.data);
      let decoded = jwtDecode(response.data)
      console.log(decoded);
      let Name = decoded.name;
      console.log(Name);
      setErr("User Confirmed");
      setTimeout(() => {
        setErr(`Welcome ${Name} 🔓 `);
        setTimeout(() => {
          window.location.href = "/";
          setErr("welcome there");
        }, 1000);
      }, 2000);

        
    
     
    } catch (error) {
      setErr("name/email/password are invalid try again please");
      setTimeout(() => {
        setErr("welcome there");
      }, 3000);
      return err;
    }

    const header = async (body) => {
      try {
        const token = localStorage.getItem("token");
        const decodedToken = jwtDecode(token);
        console.log(decodedToken);
        const decodeName = decodedToken.name;
        setName(decodeName);
        console.log(name);
      } catch {
        setName("");
      }
    };
  };

  return (
    <AuthContext.Provider value={{ err, setErr, checkUser, be, setBe }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthPasswordsProvider;
