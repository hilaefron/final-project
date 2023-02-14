import React,{Fragment, useContext} from 'react';
import './flights.css'
import { HomePageContext } from './homePage';
import Button from 'react-bootstrap/esm/Button';
import Card  from 'react-bootstrap/Card';

const Flights = () => {
    const {getAirPortCode,topAirPorts,numFlights,flights,days,updateUserOrder}=useContext(HomePageContext)
    if (!flights) {
        return <Fragment> <h1>Data about flights is not available now<br/> try again later!</h1></Fragment>;
    }  
      const legs=flights.map(f=>f.legs[0]).slice(0,100)
      
    return (
      <Fragment> 
        <h3 style={{display:'flex',alignItems:'center',justifyContent: 'center',fontFamily:'abel',fontSize:'2em', fontWeight:'bold',marginTop:'5vh',letterSpacing: '2px' }}>
          From:{(legs.map(l=>l.origin).map(d=>d.name)[0]&&legs.map(l=>l.origin).map(d=>d.display_code)[0])?
           (legs.map(l=>l.origin).map(d=>d.name)[0]&&legs.map(l=>l.origin).map(d=>d.display_code)[0]):
           'Ben Gurion Intl'} (TLV)
           <br/>
          To :{legs.map(l=>l.destination).map(d=>d.name)[0]} ({legs.map(l=>l.destination).map(d=>d.display_code)[0]})<br/>
          Depart Date :{legs.map(l=>l.departure).map(d=>d.split('T')[0].split('-').reverse().toString().replace(/,/g,'/'))[0]}<br/>
          Display data for {numFlights} adults, one way, economy class <br/>
          *****Additional fees may apply*****<br/>
        </h3>
        <div style={{display: 'flex',justifyContent: 'center'}}>

          <Button style={{backgroundColor:'rgb(99 137 141)',borderColor:'#05060800',marginBottom:'0.5em',display: 'flex',justifyContent: 'center'}} onClick={()=>getAirPortCode()}>Choose a destination airport</Button>
        </div>
          <div  style={{display:'flex'}}>{topAirPorts}</div>
          <div
        className="card-container"
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
        }}
      >            {flights.map((flight, index) => {
                return (
                    <Card key={index}  style={{flexBasis: 'calc(30% - 50px)',backgroundColor:'rgb(147 165 175)' }}>
                      <Card.Body>
                        <Card.Text>
                            {flight.legs.map((leg, legIndex) => {
                                return (

                                    <div key={legIndex}>
                                        <p>Departure: {leg.departure.split('T')[1].slice(0,-3)} (local time)</p>  
                                        <p>Arrival: {leg.arrival.split('T')[1].slice(0,-3)} (local time)</p>
                                        <p>Total Duration: {Math.floor(leg.duration/60)} h {leg.duration%60} m</p>
                                        {leg.stops.length > 0 ? (
                                              <div>
                                                  <p>Stops: {leg.stop_count} </p>
                                                  <p>Stop At: {leg.stops.map(s => {
                                                      if (s.name === undefined || s.type === undefined || s.display_code === undefined) {
                                                        return <li>{"No info about this stop"}</li>;
                                                      } else {
                                                        return <li>{`${s.name} ${s.type} (${s.display_code})`}</li>;
                                                      }
                                                    })}
                                                  </p>
                                                  {leg.carriers.length>1?
                                                  <div>Carriers: 
                                                    {leg.carriers.map((carrier, carrierIndex) =>
                                                    {return <p>
                                                              <li>leg {[carrierIndex+1]} : {carrier.name}</li></p>})}
                                                            </div>:
                                                  <div>Carrier: 
                                                    {leg.carriers.map(carrier =>
                                                    {return <p>
                                                              <li>{carrier.name}</li></p>})}
                                                            </div>}
                                              </div>
                                          ) :
                                          <div>Carrier: 
                                            {leg.carriers.map(carrier =>
                                              {return <p>
                                                <li>{carrier.name}</li></p>})}
                                          </div>
                                        }
                                    </div>
                                );
                            })}
                        <p>Price: {Math.ceil(flight.price.amount)}$<br/> 
                          ({Math.ceil(Math.floor(flight.price.amount)/numFlights)}$ for 1 person)
                        </p>
                        </Card.Text>
                        </Card.Body>
                          <Button 
                          onClick={()=>updateUserOrder({flight,budget:Math.floor(flight.price.amount)})}
                          style={{backgroundColor:'rgb(99 137 141)',borderColor:'#05060800',marginBottom:'0.5em'}}
                          >Add to my list</Button>
                    </Card>
                );
            })}   
            </div>         
      </Fragment>
       );
}

export default Flights;
