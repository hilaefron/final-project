import './App.css';
import React from 'react';
import AppLogin from './components/LoginAndSignUp';
import Hotels from './components/hotels';
import Resturants from './components/resturants';
import Attractions from './components/attractions';
import { Routes, Route } from "react-router-dom";
import HomePage from './components/homePage';
import { BrowserRouter } from 'react-router-dom';
import Flights from './components/flights';
import LoginApp from './components/loginApp';
import SignUpApp from './components/signUpApp';
import NavBar from './components/navbar';
import HomepageApp from './components/homepageApp';

function App() {

  return (
      <BrowserRouter>
  {window.location.pathname !== "/login" && window.location.pathname !== "/signup" && window.location.pathname !== "/"&&<NavBar />}
        <Routes>
          <Route path="/" element={<HomepageApp/>}/> 
          <Route path="/hotels" element={<Hotels />} />
          <Route path="/restaurants" element={<Resturants/>} />
          <Route path="/attractions" element={<Attractions />} />
          <Route path="/login" element={<LoginApp />} />
          <Route path="/signup" element={<SignUpApp />} />
          {/* <Route path="/flights" /> */}
        </Routes> 
      </BrowserRouter>
      // <div>
      // <SignUpApp/>
      // <LoginApp/>
      // </div>


  )
}

export default App;
