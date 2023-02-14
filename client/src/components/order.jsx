import React, { useState, useEffect,useContext } from 'react';
import {HomePageContext} from './homePage'
import  Card  from 'react-bootstrap/Card';
import Button from 'react-bootstrap/esm/Button';
import 'react-date-range/dist/styles.css'; // main style file

const UserOrders = () => {
  const {orders, updateUserOrder, num,numFlights,days,getUpdatedOrder,setOrders, handleSecondButtonClick, handleSecondButtonClickResturants} = useContext(HomePageContext);
  const [newArr, setNewArr]=useState(orders)
  let budget = 0;

  const flightOrder = orders.find(order => order.body.flight);
  const flightData = flightOrder?.body?.flight; // optional chaining to avoid error if flightOrder is undefined
  
  console.log(flightOrder);
  console.log(flightData);
  console.log(orders);

  for (let i = 0; i < orders.length; i++) {
    if(orders[i].body.budget){
      if(!orders[i].body.flight){
        let num = orders[i].body.budget;
        num = parseFloat(orders[i].body.budget.replace("$", ""));
        budget = budget+num
        console.log(num);
      }
      else{
        let num = orders[i].body.budget;
        num = parseInt(orders[i].body.budget);
        budget = budget+num
        console.log(num);
      }
    }
  }
useEffect(() => {
    getUpdatedOrder()
  }, [orders]);

  return (
    <div>
          <div style={{display:'flex',justifyContent:'end', margin:'1em'}}>
            <Button style={{backgroundColor:'rgb(99 137 141)', borderColor:'#05060800', marginBottom:'0.5em'}} onClick={()=>{localStorage.removeItem('token');alert('You are logged out!')}} >
               Log Out
            </Button></div>

              <h1 style={{display:'flex',justifyContent:'center',flexFlow:'center'}}>Your budget for {days+1} days ({days} nights) {numFlights} people : <br/>{budget}$</h1>

              <div>
  <h1 style={{display:'flex', justifyContent: 'center', fontFamily:'abel', fontSize:'4em', fontWeight:'bold', marginTop:'5vh', letterSpacing: '2px' }}>Restaurants:</h1>
  <div className="card-container" style={{ display:'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
    {orders.map((order, index) => {
      if (order.body.category) {
        return (
          <Card style={{flexBasis: 'calc(30% - 20px)', margin: '10px', backgroundColor:'rgb(147 165 175)' }}>
            <Card.Img variant="top" src={order.body.photo} style={{ height: '200px', objectFit: 'cover' }} />
            <Card.Body>
              <Card.Text>
                <span>Name:</span> {order.body.name}
                <br />
                <span>Ranking:</span> {order.body.ranking}
                <br />
                <span>Phone:</span> {order.body.phone}
                <br />
                <span>Category:</span> {order.body.category}
                <br />
                <span>Address:</span> {order.body.address}
                <br />
                <span>Price level:</span> {order.body.price_level}
              </Card.Text>
            </Card.Body>
              <Button
                variant="dark"
                onClick={() => {updateUserOrder(order.body, index); alert('you can move to my order (6) to see your choices'); handleSecondButtonClickResturants()}}
                style={{backgroundColor:'rgb(99 137 141)', borderColor:'#05060800', marginBottom:'0.5em'}}
              >
                Delete From Order
              </Button>
          </Card>
        );
      }
      return null;
    })}
  </div>
              </div>
              <div>
                <h1 style={{display:'flex', justifyContent: 'center', fontFamily:'abel', fontSize:'4em', fontWeight:'bold', marginTop:'5vh', letterSpacing: '2px' }}>Hotels:</h1>
                <div className="card-container" style={{ display:'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
                  {orders.map((order, index) => {
                    if (order.body.hotel_class) {
                      return (
                        <Card style={{flexBasis: 'calc(30% - 20px)', margin: '10px', backgroundColor:'rgb(147 165 175)' }}>
                          <Card.Img variant="top" src={order.body.photo} style={{ height: '200px', objectFit: 'cover' }} />
                          <Card.Body>
                            <Card.Title>Hotels</Card.Title>
                            <Card.Text>
                              <span>Name:</span> {order.body.name}
                              <br />
                              <span>Ranking:</span> {order.body.ranking}
                              <br />
                              <span>Hotel Class:</span> {order.body.hotel_class}
                              <br />
                              <span>Distance from center:</span> {order.body.distanceFromCenter}
                              <br />
                              <span>Price (for one night before insert details):</span> {order.body.price}
                            </Card.Text>
                          </Card.Body>
                            <Button
                              variant="dark"
                              onClick={() => {updateUserOrder(order.body, index); handleSecondButtonClick() }}
                              style={{backgroundColor:'rgb(99 137 141)', borderColor:'#05060800', marginBottom:'0.5em'}}
                            >
                              Delete From Order
                            </Button>
                        </Card>
                      );
                    }
                    return null;
                  })}
                </div>
              </div>
              <div>
  <h1 style={{display:'flex', justifyContent: 'center', fontFamily:'abel', fontSize:'4em', fontWeight:'bold', marginTop:'5vh', letterSpacing: '2px' }}>Attractions:</h1>
  <div className="card-container" style={{ display:'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
    {orders.map((order, index) => {
      if (order.body.web_url) {
        return (
          <Card style={{flexBasis: 'calc(30% - 20px)', margin: '10px', backgroundColor:'rgb(147 165 175)' }}>
            <Card.Body>
              <Card.Text>
                <span>Name:</span> {order.body.name}
                <br />
                <span>Rating:</span> {order.body.rating}
                <br />
                <span>Phone:</span> {order.body.phone}
                <br />
                <span>Address:</span> {order.body.address}
                <br />
                <span>Web URL:</span> {order.body.web_url}
              </Card.Text>
            </Card.Body>
              <Button
                variant="dark"
                onClick={() => {updateUserOrder(order.body, index); alert('you can move to my order (6) to see your choices');}}
                style={{backgroundColor:'rgb(99 137 141)', borderColor:'#05060800', marginBottom:'0.5em'}}
              >
                Delete From Order
              </Button>
          </Card>
        );
      }
      return null;
    })}
  </div>
</div>           <div>
        <h1 style={{display:'flex', justifyContent: 'center', fontFamily:'abel', fontSize:'4em', fontWeight:'bold', marginTop:'5vh', letterSpacing: '2px' }}>Flights: </h1>
      {flightData? (
        <div className="card-container" style={{ display:'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
          <div style={{flexBasis: 'calc(30% - 20px)', margin: '10px', backgroundColor:'rgb(147 165 175)' }}>
            {flightData.legs
              ? flightData.legs.map((leg, legIndex) => {
                  return (
                    <Card key={legIndex}>
                      <Card.Body>
                        <Card.Text>
                      <p>Departure: {leg.departure.split("T")[1].slice(0, -3)} (local time)</p>
                      <p>Arrival: {leg.arrival.split("T")[1].slice(0, -3)} (local time)</p>
                      <p>Total Duration: {Math.floor(leg.duration / 60)} h {leg.duration % 60} m</p>
                      {leg.stops.length > 0 ? (
                        <div>
                          <p>Stops: {leg.stop_count} </p>
                          <p>
                            Stop At:{" "}
                            {leg.stops.map(s => {
                              if (s.name === undefined || s.type === undefined || s.display_code === undefined) {
                                return <li>{"No info about this stop"}</li>;
                              } else {
                                return <li>{`${s.name} ${s.type} (${s.display_code})`}</li>;
                              }
                            })}
                          </p>
                          {leg.carriers.length > 1 ? (
                            <div>
                              Carriers:
                              {leg.carriers.map((carrier, carrierIndex) => {
                                return (
                                  <p>
                                    <li>leg {[carrierIndex + 1]} : {carrier.name}</li>
                                  </p>
                                );
                              })}
                            </div>
                          ) : (
                            <div>
                              Carrier:
                              {leg.carriers.map(carrier => {
                                return (
                                  <p>
                                    <li>{carrier.name}</li>
                                  </p>
                                );
                              })}
                            </div>
                          )}
                        </div>
                      ) : (
                        <div>
                          Carrier:
                          {leg.carriers.map(carrier => {
                            return (
                              <p>
                                <li>{carrier.name}</li>
                              </p>
                            );
                          })}
                        </div>
                      )}
            </Card.Text>
            </Card.Body>
            </Card>
                  );
                })
              : null}
            <p>
              Total Price: {Math.ceil(flightData.price.amount)}$
              <br />
            </p>
            <Button 
                            style={{backgroundColor:'rgb(99 137 141)', borderColor:'#05060800', marginBottom:'0.5em'}}
                            
                            onClick={() => {updateUserOrder(flightData)}}>Remove flight</Button>
          </div>
        </div>
      ) : (
        <div>No flight data available</div>
      )}
    </div>

</div>
      );
};


export default UserOrders;