import './App.css';
import React from 'react';
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
import UserOrders from './components/order';

function App() {
  return (
    <div style={{backgroundImage: "url(https://fastly.picsum.photos/id/13/2500/1667.jpg?hmac=SoX9UoHhN8HyklRA4A3vcCWJMVtiBXUg0W4ljWTor7s)",
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    backgroundAttachment: 'fixed',
    height: '1000vh'
    }}>
      <BrowserRouter >
  {window.location.pathname !== "/login" && window.location.pathname !== "/signup"   &&<NavBar />}
        <Routes>
          <Route path="/" element={<HomepageApp/>}/> 
          <Route path="/hotels" element={<Hotels />} />
          <Route path="/restaurants" element={<Resturants/>} />
          <Route path="/attractions" element={<Attractions />} />
          <Route path="/login" element={<LoginApp />} />
          <Route path="/signup" element={<SignUpApp />} />
          <Route path="/order" element={<UserOrders />} />
          
          <Route path="/flights" element={<Flights/>}/>
        </Routes> 
      </BrowserRouter>
      </div>

  )
}

export default App;
