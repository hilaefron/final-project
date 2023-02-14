import React from 'react';
import  Card  from 'react-bootstrap/Card';
import Button from 'react-bootstrap/esm/Button';
import { useState, useEffect, useContext } from 'react';
import {HomePageContext} from './homePage'
import { Link } from 'react-router-dom';

const Resturants = () => {
    const {selectedOption, handlePrice, filteredArrayResturants,updateUserOrder, cityName, isDisabledResturants, setIsDisabledResturants, handleFirstButtonClickResturants} = useContext(HomePageContext);

    const e = { target: { value: 'all' } };

    console.log("hey from resturants")
    console.log(filteredArrayResturants)
    
  return (
    <div >
         <div style={{display:'flex', justifyContent:"center"}}>

         <select value={selectedOption} onChange={handlePrice}  className='buttonshomepage' style={{  width:"30%", marginTop:"5%"}} >
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
          </div>
          
          {filteredArrayResturants.length > 0 ? (
            <div>
       <h1  style={{  display: "flex",  justifyContent: "center", fontFamily:"Abel"}}>Restaurants {cityName}</h1>
      <div  style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",}}
          >
            <div className="card-container" style={{ display:'flex', flexWrap: 'wrap', justifyContent: 'center' }}>

                            
        {filteredArrayResturants.map((val, index)=>{
          return (
                <Card style={{flexBasis: 'calc(30% - 20px)', margin: '10px',backgroundColor:'rgb(147 165 175)' }}>                  
                  <Card.Img variant="top" src={val.photo} style={{ height: '200px', objectFit: 'cover' }}/>
                  <Card.Body>
                    <Card.Text >
                      <span >Name:</span> {val.name}
                      <br/>
                      <span >Ranking:</span>{val.ranking}
                      <br/>
                      <span >Phone:</span> {val.phone}
                      <br/>
                      <span >Category:</span> {val.category}
                      <br/>
                      <span >Address:</span> {val.address}
                      <br/>
                      <span >price level:</span> {val.price_level}
                      <br />
                    </Card.Text>
                  </Card.Body>
                    <Button variant="dark" style={{backgroundColor:'rgb(99 137 141)',borderColor:'#05060800',marginBottom:'0.5em'}} onClick={() =>{updateUserOrder(val); alert('you can move to my order (6) to see your choices'); handleFirstButtonClickResturants()}}  disabled={isDisabledResturants}>Add to My order</Button>
              </Card>
          )})
        }
        </div>
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





