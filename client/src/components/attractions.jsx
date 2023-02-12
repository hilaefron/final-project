import React, {useContext} from 'react';
import {HomePageContext} from './homePage'
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/esm/Button";
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { Link } from 'react-router-dom';

const Attractions = () => {
const {arrAttractions, updateUserOrder,cityName} = useContext(HomePageContext);


return (
    <div className='Attractions'>
<h1  style={{  display: "flex",  justifyContent: "center", fontFamily:"Abel"}}>Attractions {cityName}</h1>      
  <div style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",}}>

  
        {arrAttractions.map((val, index) => {
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
                    {val.name}
                    <br />
                    <span style={{ fontFamily: "Solitreo" }}>rating:</span>
                    {val.rating}
                    <br />
                    <span style={{ fontFamily: "Solitreo" }}>
                      Address:
                    </span>{" "}
                    {val.address}
                    <br />
                    <span style={{ fontFamily: "Solitreo" }}>
                      phone:
                    </span>{" "}
                    {val.phone}
                    <br />
                    <span style={{ fontFamily: "Solitreo" }}>
                        web url
                      </span>{" "}
                    {val.web_url}
                  </Card.Text>
                 <Button
                    variant="dark"
                    className='hotels'
                    onClick={() =>{updateUserOrder(val)}}
                  >
                    Add this hotel to my list!
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
        
    );
}

export default Attractions;
