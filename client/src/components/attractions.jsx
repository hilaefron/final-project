import React, {useContext} from 'react';
import {HomePageContext} from './homePage'
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/esm/Button";
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file

const Attractions = () => {
const {arrAttractions, updateUserOrder,cityName} = useContext(HomePageContext);


return (
<div >
  {arrAttractions.length > 0 ? (
    <div>
      <h1 style={{display:'flex', justifyContent: 'center',fontFamily:'abel',fontSize:'4em', fontWeight:'bold',marginTop:'5vh',letterSpacing: '2px' }}>Attractions {cityName}</h1>
      <div style={{ display:'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        {arrAttractions.map((val, index) => {
          return (
              <Card  style={{flexBasis: 'calc(30% - 20px)', margin: '10px',backgroundColor:'rgb(147 165 175)' }}>
                <Card.Body>
                  <Card.Title>{val.name}</Card.Title>
                  <Card.Text>
                    <span >Rating:</span> {val.rating}
                    <br />
                    <span >Address:</span> {val.address}
                    <br />
                    <span >Phone:</span> {val.phone}
                    <br />
                    <span >Web URL:</span> {val.web_url}
                  </Card.Text>
                </Card.Body>
                  <Button
                   onClick={() => { updateUserOrder(val) }} 
                   style={{backgroundColor:'rgb(99 137 141)',borderColor:'#05060800',marginBottom:'0.5em'}}>
                    Add to My Order
                  </Button>

                  <Button style={{backgroundColor:'rgb(99 137 141)',borderColor:'#05060800',marginBottom:'0.5em'}}>
                    <a href={`https://www.google.com/search?q=${val.name}&oq=${val.name}&aqs=chrome..69i57j69i64j69i60l3.190j0j7&sourceid=chrome&ie=UTF-8`} 
                    style={{color:'#fff',textDecorationLine:'none'}}>
                    Learn More
                  </a></Button>
              </Card>
          );
        })}
      </div>
    </div>
  ) : (
    <div>
      <h1 style={{ display: "flex", justifyContent: "center", fontFamily: "Abel", letterSpacing: "2px", marginTop: "5vh" }}>Attractions {cityName}</h1>
      <h1 style={{ display: "flex", justifyContent: "center" }}>No data to present, please search for data first.</h1>
    </div>
  )}
</div>
        
    );
}

export default Attractions;