import React, {useContext, useState, useEffect} from 'react';
import {HomePageContext} from './homePage'
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/esm/Button";
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { Link } from 'react-router-dom';
import { color } from '@mui/system';


const Hotels = () => {
const {filteredArray, days,updateUserOrder,cityName, changer} = useContext(HomePageContext);




useEffect(() => {
  console.log("chager");
}, [filteredArray]);
console.log(filteredArray)



return (
  // style={{background: "linear-gradient(to right, #0466c8, #0466c8)"}}
  <div className='hotels' >
 {filteredArray.length > 0 ? (
      <div>

      <h1  style={{  display: "flex",  justifyContent: "center", fontFamily:"Abel"}}>Hotels {cityName}</h1>
      <div className='hotels'
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
        }}
        >
        {filteredArray.map((val, index) => {
          return (
            <div className='hotels' style={{  display: "flex",  justifyContent: "center",}}>
              <Card
                style={{
                  width: "37.44%",
                  height: "100%",
                  border: "solid black",
                }}
              >
                <Card.Img
                  variant="top"
                  src={val.photo}
                  style={{ width: "100%", height: "40vh" }}
                />
                <Card.Body>
                  <Card.Title>Hotels</Card.Title>
                  <Card.Text>
                    <span style={{ fontFamily: "Solitreo" }}>Name:</span>{" "}
                    {val.name}
                    <br />
                    <span style={{ fontFamily: "Solitreo" }}>Ranking:</span>
                    {val.ranking}
                    <br />
                    <span style={{ fontFamily: "Solitreo" }}>
                      Hotel Class:
                    </span>{" "}
                    {val.hotel_class}
                    <br />
                    <span style={{ fontFamily: "Solitreo" }}>
                      Distance from center:
                    </span>{" "}
                    {val.distanceFromCenter}
                    <br />
                    <span style={{ fontFamily: "Solitreo" }}>
                      price (for one night before insert details):
                      </span>{" "}
                    {val.price}
                  </Card.Text>
                  <Button
                    variant="dark"
                    className='hotels'
                    onClick={() =>{updateUserOrder(val,index) }}
                  >
                      {val.button}
                  </Button>
                  <a
                    href={`https://www.google.com/search?q=${val.name}&oq=${val.name}&aqs=chrome..69i57j69i64j69i60l3.190j0j7&sourceid=chrome&ie=UTF-8`}
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    <button
                      className="btn btn-outline-primary"
                      style={{ border: "none" }}
                    >
                      {" "}
                      Learn more
                    </button>
                  </a>
                </Card.Body>
              </Card>
            </div>
          );
        })}
    </div>
    </div>
   ) : (
    <div>
    <h1  style={{  display: "flex",  justifyContent: "center", fontFamily:"Abel"}}>Hotels {cityName}</h1>

    <h1 style={{ display: "flex", justifyContent: "center" }}>
    No data to present, please search for data first.
  </h1>
    </div>
)}
  </div>
    );
}

export default Hotels;
