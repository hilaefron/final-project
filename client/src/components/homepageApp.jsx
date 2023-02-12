import React, {useContext, useState} from 'react';
import {HomePageContext} from './homePage'
import {DateRange} from "react-date-range";
import NavBar from './navbar';
import { height } from '@mui/system';



const HomepageApp = () => {
    const {getName,setName, setSelectedCity, getHotels, getRestaurants,getAttraction,arr,cityData,handleIn,setNum,handleRangeChange,selectedRange,lat,lng,selectedCity} = useContext(HomePageContext);

    return (
        <div style={{ display: 'flex', flexDirection: 'row', backgroundColor:"cadetblue", borderRadius:"26px", height:"40vh"  }}>
        <div style={{ display: 'flex', flexDirection: 'row', marginTop:"0px"}}>
      
        <form onSubmit={e => getName(e)} style={{display: 'flex', flexDirection: 'row', marginLeft: '10px', marginTop:"10vh" }}>
          <input type="text" placeholder="enter city name" onChange={e => setName(e.target.value)} id="firstInput" />
          <button type="submit" className='buttonshomepage'> get city </button>
          {selectedCity&&(
            <select  onChange={e => setSelectedCity(e.target.value)} style={{}} >
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
      
      
        <div style={{ display: 'flex', flexDirection: 'row' }}>
        {arr.length !== 0 && (
          <form id="myForm" onSubmit={e => handleIn(e)}>
            <label>number of adults</label>
            <input type="number" onChange={e => setNum(e.target.value)} />
            <label>Date range:</label>
            <DateRange
              onChange={handleRangeChange}
              ranges={[selectedRange]}
              showSelectionPreview={true}
              minDate={new Date()}
            />
            <button type="submit">click</button>
          </form>
        )}
      </div>
                </div>
    );
}

export default HomepageApp;



