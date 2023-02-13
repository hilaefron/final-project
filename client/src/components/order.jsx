import React, { useState, useEffect,useContext } from 'react';
import {HomePageContext} from './homePage'
import  Card  from 'react-bootstrap/Card';
import Button from 'react-bootstrap/esm/Button';
import 'react-date-range/dist/styles.css'; // main style file
import axios from 'axios';
import jwtDecode from 'jwt-decode';
// import { useNavigate } from 'react-router-dom';

const UserOrders = () => {
  const {orders, updateUserOrder, getUpdatedOrder,setOrders} = useContext(HomePageContext);
  const [newArr, setNewArr]=useState(orders)
  
//   const navigate = useNavigate();
//   const navigateAttractions = () => {
//     navigate("/attractions");
//   };
//   const navigateHotels = () => {
//     navigate("/hotels");
//   };
//   const navigateRestaurants = () => {
//     navigate("/restaurants");
//   };

useEffect(() => {
    getUpdatedOrder()
  }, [orders]);
  return (
    <div>
      <div>
        <h1>Restaurants:</h1>
        {/* <button onClick={()=>navigateRestaurants()}>Go Back To Restaurants</button> */}
        {orders.map(order => {
          if (order.body.category) {
            return (
              <div style={{display: "flex",  justifyContent: "center"}}>              
                <Card   
                   style={{
                    width: "37.44%",
                    height: "100%",
                    border: "solid black",
                  }}>
                  <Card.Img variant="top" src={order.body.photo} style={{ width: "100%", height: "40vh" }}/>
                  <Card.Body>
                    <Card.Title>Resturants</Card.Title>
                    <Card.Text >
                      <span style={{fontFamily:"Solitreo"}}>Name:</span> {order.body.name}
                      <br/>
                      <span style={{fontFamily:"Solitreo"}}>Ranking:</span>{order.body.ranking}
                      <br/>
                      <span style={{fontFamily:"Solitreo"}}>Phone:</span> {order.body.phone}
                      <br/>
                      <span style={{fontFamily:"Solitreo"}}>Category:</span> {order.body.category}
                      <br/>
                      <span style={{fontFamily:"Solitreo"}}>Address:</span> {order.body.address}
                      <br/>
                      <span style={{fontFamily:"Solitreo"}}>price level:</span> {order.body.price_level}
                    </Card.Text>
                    <Button variant="dark"  onClick={() =>{updateUserOrder(order.body);}}>Delete From Order</Button>
                  </Card.Body>
              </Card>
            </ div>
            );
          }
          return null;
        })}
      </div>
      <div>
        <h1>Hotels:</h1>
        {/* <button onClick={()=>navigateHotels()}>Go Back To Hotels</button> */}
        {orders.map(order => {
          if (order.body.hotel_class) {
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
                  src={order.body.photo}
                  style={{ width: "100%", height: "40vh" }}
                />
                <Card.Body>
                  <Card.Title>Hotels</Card.Title>
                  <Card.Text>
                    <span style={{ fontFamily: "Solitreo" }}>Name:</span>{" "}
                    {order.body.name}
                    <br />
                    <span style={{ fontFamily: "Solitreo" }}>Ranking:</span>
                    {order.body.ranking}
                    <br />
                    <span style={{ fontFamily: "Solitreo" }}>
                      Hotel Class:
                    </span>{" "}
                    {order.body.hotel_class}
                    <br />
                    <span style={{ fontFamily: "Solitreo" }}>
                      Distance from center:
                    </span>{" "}
                    {order.body.distanceFromCenter}
                    <br />
                    <span style={{ fontFamily: "Solitreo" }}>
                      price (for one night before insert details):
                      </span>{" "}
                    {order.body.price}
                  </Card.Text>
                  <Button
                    variant="dark"
                    className='hotels'
                    onClick={() =>{updateUserOrder(order.body); }}
                  >
                      Delete From Order
                  </Button>
                  <a
                    href={`https://www.google.com/search?q=${order.body.name}&oq=${order.body.name}&aqs=chrome..69i57j69i64j69i60l3.190j0j7&sourceid=chrome&ie=UTF-8`}
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
          }
        return null;
        })}
      </div>
      <div>
        <h1>attractions:</h1>
        {/* <button onClick={()=>navigateAttractions()}>Go Back To Attractions</button> */}
        {orders.map(order => {
          if (order.body.web_url) {
            return (
              <div className='Attractions' style={{display: "flex",  justifyContent: "center"}}>
              <Card
               style={{
                border: "solid black",
              }}
              >
                <Card.Body>
                  <Card.Title>Attreactions</Card.Title>
                  <Card.Text>
                    <span style={{ fontFamily: "Solitreo" }}>Name:</span>{" "}
                    {order.body.name}
                    <br />
                    <span style={{ fontFamily: "Solitreo" }}>rating:</span>
                    {order.body.rating}
                    <br />
                    <span style={{ fontFamily: "Solitreo" }}>
                      Address:
                    </span>{" "}
                    {order.body.address}
                    <br />
                    <span style={{ fontFamily: "Solitreo" }}>
                      phone:
                    </span>{" "}
                    {order.body.phone}
                    <br />
                    <span style={{ fontFamily: "Solitreo" }}>
                        web url
                      </span>{" "}
                    {order.body.web_url}
                  </Card.Text>
                 <Button
                    variant="dark"
                    className='hotels'
                    onClick={() =>{updateUserOrder(order.body);}}
                  >
                    Delete From Order
                  </Button>
                  <a
                    href={`https://www.google.com/search?q=${order.body.name}&oq=${order.body.name}&aqs=chrome..69i57j69i64j69i60l3.190j0j7&sourceid=chrome&ie=UTF-8`}
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
          }
        return null;
        })}
      </div>
    </div>
  );
};


export default UserOrders;