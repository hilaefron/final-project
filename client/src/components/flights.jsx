import React,{useContext,useEffect,useState} from 'react';
import './flights.css'
import { FlightsContext } from './flightsContext';

const Flights = () => {
    const {getAirPortCode,topAirPorts,setCityName,cityName,flights}=useContext(FlightsContext)
    // const legs=flights.map(f=>f.legs[0]).slice(0,100)
    console.log(flights)
    // console.log(legs)
    // console.log(legs.map(l=>l.departure).map(d=>d.split('T')[0].split('-').reverse().toString().replace(/,/g,'/')))
    return (
      <div> 
        {/* <h3>
          From:{legs.map(l=>l.origin).map(d=>d.name)[0]? legs.map(l=>l.origin).map(d=>d.name)[0]:'Ben Gurion Intl'} ({legs.map(l=>l.origin).map(d=>d.display_code)[0]}) <br/>
          To :{legs.map(l=>l.destination).map(d=>d.name)[0]} ({legs.map(l=>l.destination).map(d=>d.display_code)[0]})<br/>
          Depart Date :{legs.map(l=>l.departure).map(d=>d.split('T')[0].split('-').reverse().toString().replace(/,/g,'/'))[0]}<br/>
          Display data for 1 adult, one way, economy class
        </h3> */}
        <h4>Chosee a destination airport</h4>
        <input type="text" placeholder='destination city name' value={cityName} onChange={(e)=>setCityName(e.target.value)} /><br/>
        
        <button onClick={()=>getAirPortCode()}>get air port codes</button>
        <div>{topAirPorts}</div>
        {/* <div className='container'>
            {flights.map((flight, index) => {
                return (
                    <div key={index} className="card">
                            {flight.legs.map((leg, legIndex) => {
                                return (
                                    <div key={legIndex}>
                                        <p>Departure: {leg.departure.split('T')[1].slice(0,-3)} (local time)</p>  
                                        <p>Arrival: {leg.arrival.split('T')[1].slice(0,-3)} (local time)</p>
                                        <p> Total Duration: {Math.floor(leg.duration/60)} h {leg.duration%60} m</p>
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
                        <p>Price: {flight.price.amount}$</p>
                        <button onClick={()=>console.log('added to list')}>add to my list</button>
                    </div>
                );
            })}            
        </div> */}
      </div>
       );
}

export default Flights;
