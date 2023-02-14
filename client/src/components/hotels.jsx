import React, { useContext, useEffect } from 'react';
import { HomePageContext } from './homePage';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/esm/Button';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file';

const Hotels = () => {
  const {
    filteredArray,
    days,
    updateUserOrder,
    cityName,
    changer,
    isDisabled,
    setIsDisabled,
    handleFirstButtonClick
  } = useContext(HomePageContext);

  useEffect(() => {
    console.log('chager');
  }, [filteredArray]);
  console.log(filteredArray);

  return (
  <div >

      <h1 
      style={{display:'flex', justifyContent: 'center',fontFamily:'abel',fontSize:'4em', fontWeight:'bold',marginTop:'5vh',letterSpacing: '2px' }}>Hotels {cityName}</h1>
    <div className="card-container" style={{ display:'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
      {filteredArray.map((val, index) => {
        return (
          <Card style={{flexBasis: 'calc(30% - 20px)', margin: '10px',backgroundColor:'rgb(147 165 175)' }}>
            <Card.Img
              variant="top"
              src={val.photo}
              style={{ height: '200px', objectFit: 'cover' }}
            />
            <Card.Body>
              <Card.Text>
                <span>Name:</span> {val.name}
                <br />
                <span>Ranking:</span> {val.ranking}
                <br />
                <span>Hotel Class:</span> {val.hotel_class}
                <br />
                <span>Distance from center:</span> {val.distanceFromCenter}
                <br />
                <span>Price (for one night before insert details):</span> {val.price}
              </Card.Text>
            </Card.Body>
              <Button
                onClick={() => {updateUserOrder(val,index); alert('you can move to my order (6) to see your choices'); handleFirstButtonClick()}}
                disabled={isDisabled}
                style={{backgroundColor:'rgb(99 137 141)',borderColor:'#05060800',marginBottom:'0.5em'}}
              >
                {val.button}
              </Button>
              <Button style={{backgroundColor:'rgb(99 137 141)',borderColor:'#05060800'}}><a
                href={`https://www.google.com/search?q=${val.name}&oq=${val.name}&aqs=chrome..69i57j69i64j69i60l3.190j0j7&sourceid=chrome&ie=UTF-8`}
                style={{color:'#fff',textDecorationLine:'none'}}
                target="_blank"
              >
                Learn more
              </a></Button>
          </Card>
        );
      })}
    </div>
  </div>

  );
};

export default Hotels;
