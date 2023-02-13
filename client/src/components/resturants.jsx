import React from 'react';
import  Card  from 'react-bootstrap/Card';
import Button from 'react-bootstrap/esm/Button';
import { useState, useEffect, useContext } from 'react';
import {HomePageContext} from './homePage'
import { Link } from 'react-router-dom';

const Resturants = () => {
    const {selectedOption, handlePrice, filteredArrayResturants,updateUserOrder, cityName} = useContext(HomePageContext);


    console.log("hey from resturants")
    console.log(filteredArrayResturants)
    

  return (
    <div>
            <select value={selectedOption} onChange={handlePrice}>
              <option >Select Type</option>
              <option value={"all"}>All</option>
              <option value={"$"} >max of 10$</option>
              <option value={"$-$$"} >10$-15$</option>
              <option value={"$$"} >15$-25$</option>
              <option value={"$$ - $$$"} >25$-40$</option>
              <option value={"$$$"} >40$-60$</option>
              <option value={"$$$ - $$$$"} >60$-80$</option>
              <option value={"$$$$"} >80$-100$</option>
          </select>
          {filteredArrayResturants.length > 0 ? (
            <div>
       <h1  style={{  display: "flex",  justifyContent: "center", fontFamily:"Abel"}}>Restaurants {cityName}</h1>

    
   

      <div  style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",}}
          >
        
        {filteredArrayResturants.map((val, index)=>{
          return (
              <div style={{display: "flex",  justifyContent: "center"}}>              
                <Card   
                   style={{
                    width: "37.44%",
                    height: "100%",
                    border: "solid black",
                  }}>
                  <Card.Img variant="top" src={val.photo} style={{ width: "100%", height: "40vh" }}/>
                  <Card.Body>
                    <Card.Title>Resturants</Card.Title>
                    <Card.Text >
                      <span style={{fontFamily:"Solitreo"}}>Name:</span> {val.name}
                      <br/>
                      <span style={{fontFamily:"Solitreo"}}>Ranking:</span>{val.ranking}
                      <br/>
                      <span style={{fontFamily:"Solitreo"}}>Phone:</span> {val.phone}
                      <br/>
                      <span style={{fontFamily:"Solitreo"}}>Category:</span> {val.category}
                      <br/>
                      <span style={{fontFamily:"Solitreo"}}>Address:</span> {val.address}
                      <br/>
                      <span style={{fontFamily:"Solitreo"}}>price level:</span> {val.price_level}
                    </Card.Text>
                    <Button variant="dark"  onClick={() =>{updateUserOrder(val)}}>Add this hotel to my list!</Button>
                  </Card.Body>
              </Card>
            </ div>
          )})
        }
      </div>
      </div>
       ) : (
        <div>
        <h1  style={{  display: "flex",  justifyContent: "center", fontFamily:"Abel"}}>Restaurants {cityName}</h1>
    
        <h1 style={{ display: "flex", justifyContent: "center" }}>
        No data to present,first please search for data, after that please select a type .
      </h1>
        </div>
    )}
      </div>
);
}

export default Resturants;






