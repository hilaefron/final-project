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

function App() {

  return (
  //     <BrowserRouter>
  //       <Routes>
  //         <Route path="/" element={<Hotels />} />
  //         <Route path="/resturants" element={<Resturants />} />
  //         <Route path="/attractions" element={<Attractions />} />
  //         {/* <Route path="/login" element={<AppLogin />} /> */}
  //         <Route path="/flights" />
  //       </Routes> 
  //     </BrowserRouter>

<div>
  {/* <Hotels/>
  <Resturants/>
  <Attractions/>  */}
  <Flights/>
</ div>
  )
}

export default App;
