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
       <h1  style={{  display: "flex",  justifyContent: "center", fontFamily:"Abel"}}>Restaurants {cityName}</h1>

          <select value={selectedOption} onChange={handlePrice}>
              <option >Select Type</option>
              <option value={"all"}>All</option>
              <option value={"$"} >max of 20$</option>
              <option value={"$-$$"} >max of 50$</option>
              <option value={"$$"} >20$-50$</option>
              <option value={"$$ - $$$"} >50$-100$</option>
              <option value={"$$$"} >60$-120$</option>
              <option value={"$$$ - $$$$"} >80$-200$</option>
              <option value={"$$$$"} >110$-200$</option>
          </select>

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
);
}

export default Resturants;






