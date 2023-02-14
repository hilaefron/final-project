import React, {useContext, useState, useEffect, useRef} from 'react';
import {HomePageContext} from './homePage'
import {DateRange} from "react-date-range";
import NavBar from './navbar';
import { height } from '@mui/system';
import { useNavigate } from 'react-router-dom';
import img3 from './images/looking2.jpg'



const HomepageApp = () => {
    const {getName,setName, setSelectedCity, getHotels, getRestaurants,getAttraction,arr,cityData,handleIn,setNum,handleRangeChange,selectedRange,lat,lng,selectedCity} = useContext(HomePageContext);
    const navigate = useNavigate();
    const [showDateRange, setShowDateRange] = useState(false);
    const toggleDateRange = () => {
      setShowDateRange(!showDateRange);
    };
  
  

 

    return (

        <div 
        style={{     backgroundSize: 'cover',
        backgroundPosition: 'center center',
        backgroundAttachment: 'fixed',
        backgroundImage:`url(${img3})`,
        marginTop:'-10vh',
        paddingTop:'5vh',
        height: '1000vh',
        display:'flex'
     }}
         id="father">
        <div style={{ display: 'flex', marginTop:"10vh", width:"100vw"}}>
      
        <form onSubmit={e => getName(e)} style={{display: 'flex',flexDirection: 'row', marginLeft: '10px', height:"50vh"}}>
          <input type="text" placeholder="enter city name" onChange={e => setName(e.target.value)} id="firstInput" />
          <button type="submit" className='buttonshomepage'> get city </button>
          {selectedCity&&(
            <select  onChange={e => setSelectedCity(e.target.value)} className='buttonshomepage' style={{width:"300px"}} >
          {cityData.map(city => (
            <option value={city.country} >
              {city.name}, {city.country}
            </option>
          ))}
        </select>
          )}
 {lat && lng && (
          <button  onClick={() => { getHotels(); getRestaurants(); getAttraction();}}  className="buttonshomepage">
            Get All
          </button>
        )}
        </form>
        </div>
      
      
        <div style={{ display: 'flex', flexDirection: 'row', marginTop:"10vh" }}>
        {arr.length !== 0 && (
          <form id="myForm" onSubmit={e => {handleIn(e); navigate('/hotels');}} style={{display: 'flex',flexDirection: 'row', marginLeft: '10px'}}>
            
            <input type="number" onChange={e => setNum(e.target.value)} id='secinput' placeholder='number of adults' />
            <button type="button" onClick={toggleDateRange} className="buttonshomepage">
        Show/Hide Date Range
      </button>
            {showDateRange && (
            <div >
            <DateRange
              onChange={handleRangeChange}
              ranges={[selectedRange]}
              showSelectionPreview={true}
              minDate={new Date()}
              />
            <button type="submit" id='search'>Search!</button>
              </div>
            )}
  
          </form>
        )}
      </div>
      
                </div>
              
    );
}

export default HomepageApp;



