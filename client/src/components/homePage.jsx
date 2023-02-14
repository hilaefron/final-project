import React, {useState, useEffect, createContext} from 'react';
import {DateRange} from "react-date-range";
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import cities from 'cities.json';
import axios from 'axios'
import jwtDecode from 'jwt-decode';

import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
import  Button  from 'react-bootstrap/esm/Button';


export const HomePageContext = createContext();
const HomePage = (props) => {
  const {children} = props;
  ////////////////////////////////////////////////////hotels data
  const [name, setName] = useState('')
  const [cityName, setCityName] = useState('')
  const [lat, setLat] = useState('');
  const [lng, setLng] = useState('');
  const [cityData, setCityData] = useState([]);
  const [selectedCity, setSelectedCity] = useState('')
  let arr = []
  const [info, setInfo] = useState();
  const[filteredArray,setFilteredArray] = useState([]);
  let [num, setNum] = useState('');
  let [numResturant, setNumResturant] = useState('');
  const [days,setDays] = useState(1);
  
  const[changer,setChanger]= useState(0)


  const [loading, setLoading] = useState(false);

  const [isDisabled, setIsDisabled] = useState(false);


  const handleFirstButtonClick = () => {
    setIsDisabled(true);
  };

  const handleSecondButtonClick = () => {
    setIsDisabled(false);
  };





////////////////////////////////////////////////////resturants data
const [selectedOption, setSelectedOption] = useState("");
const [filteredArrayResturants, setFilteredArrayResturants]= useState([])
let [infoResturants, setInfoResturants] = useState();
let arrResturants =[];

const [isDisabledResturants, setIsDisabledResturants] = useState(false);

const handleFirstButtonClickResturants = () => {
  setIsDisabledResturants(true);
};

const handleSecondButtonClickResturants = () => {
  setIsDisabledResturants(false);
};



////////////////////////////////////////////////////attraction data
let arrAttractions =[];
const [filteredArrayAttractions, setFilteredArrayAttractions]= useState([])
let [infoAttractions, setInfoAttractions] = useState();

///////////////////////////////////////////////////////// flights data
const [fromAirportCode, setFromAirportCode]=useState('TLV')
const [destAirportCode, setDestAirportCode]=useState('')
const [flights, setFlights]=useState([])
const [topAirPorts, setTopAirPorts] = useState([]);
const [departDate,setDepartDate]=useState()
const [numFlights,setNumFlights]=useState('')



////////////////////////////////////////////////////hotel functionality
async function getHotels() {
  try {
    setLoading(true);
    const options = {
      method: 'GET',
      url: 'https://travel-advisor.p.rapidapi.com/hotels/list-by-latlng',
      params: {
        latitude: lat,
        longitude: lng,
        limit: '30',
        adults: '1',
        currency: 'USD'
      },
      headers: {
        'X-RapidAPI-Key': '48ddaedd43msh22af8f8a78dcc00p1dba6djsn926cacd1995f',
        'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
      }
    };

    const response = await axios.request(options);
    setInfo(response.data);
    console.log("responsedata")
    console.log(response.data)
    setLoading(false);
    if(response.data.data.length == 0){
    alert("We are overwhelmed with previous requests. Please try again later.")
    }else{
      alert('request confirmed, please insert data about the number of peoples and about time of stay')
    }
  } catch (error) {
    console.error(error);
    // alert("We are overwhelmed with previous requests. Please try again later.")
  }
}
if (info!= undefined){
  info.data.map((val, index) => {
        if (val.name != undefined&& val.photo!=undefined) {
          arr.push({
            latitude: val.latitude,
            longitude: val.longitude,
            name: val.name,
            price: val.price,
            photo: val.photo.images.large.url,
            ranking: val.ranking,
            ranking_position: val.ranking_position,
            hotel_class: val.hotel_class,
            distanceFromCenter: Math.round(val.distance*10)/10 + " KM",
            budget:'', 
            isOrderd:false,
            button:"Add to My order"
          });
        }
      });
}


    

useEffect(() => {
  if (!selectedCity && cityData.length > 0) {
      setSelectedCity(cityData[0].country);
  }
  getLocation()
}, [cityData, selectedCity]);

function getName(e){
  e.preventDefault()
  const UCname=name
      .split(" ")
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ")
  const filterdData = cities.filter(city => city.name === UCname)
  setCityData(filterdData)
  setLat('');
  setLng('');
  setSelectedCity(null);
}

async function getLocation(){
try {
  setCityName("in "+cityData[0].name)
  const city = await cityData.filter(city => city.country === selectedCity);
    setLat(city[0].lat);
    setLng(city[0].lng);
} catch (error) {
    console.error(error);
}
}
console.log(cityData);
console.log(arr)    
console.log("Name:"+name)
        // console.log(arr);
 
    const [selectedRange, setSelectedRange] = useState({
        startDate: new Date(),
        endDate: new Date(),
        key: "selection",
      });
    
      const handleRangeChange = (ranges) => {
        setSelectedRange(ranges.selection);
      };
      console.log(selectedRange)
      const timeDiff = selectedRange.endDate.getTime() - selectedRange.startDate.getTime();
      const diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
      console.log(diffDays)

    
      const  handleIn = async (e) => {
        e.preventDefault();
        document.getElementById("myForm").reset();
  
        // setFilteredArray(arr)
        let anotherFilteredArray = arr
        console.log(anotherFilteredArray);
        console.log(num + "num");
        setNumResturant(num);
        setNumFlights(num)
        // setNum(1);
        let kefel = num;
        
  
          for (let i = 0; i < arr.length; i++) {
            let [priceMin, priceMax] = arr[i].price
            .replace(/\$/g, "")
            .split(" - ")
            .map(Number);
            priceMin = priceMin * kefel*diffDays;
            priceMax = priceMax * kefel*diffDays;
            anotherFilteredArray[i].budget = "$" + priceMax;
            let newPrice = "$" + priceMin + " - " + "$" + priceMax;
          anotherFilteredArray[i].price = newPrice;
          console.log(anotherFilteredArray[i])
        }
        setFilteredArray(anotherFilteredArray)
        setDays(diffDays)
        setChanger(changer+1)
      }
      console.log(filteredArray)


async function updateUserOrder(val,index) {
      
      let body = val
        const token = localStorage.getItem("token");
        const decodedToken = jwtDecode(token);
        const id =  decodedToken._id;
        try {
          const res = await axios.put(`http://localhost:4000/api/users/${id}`, {
            body,
          });
          console.log(res)
          
          getUpdatedOrder()
          
        } catch (error) {
          console.error(error);
        }
      }
    

    ////////////////////////////////////////////////////resturants functionality
    async function getRestaurants() {
      try {
        const options = {
          method: 'GET',
          url: 'https://travel-advisor.p.rapidapi.com/restaurants/list-by-latlng',
          params: {
            latitude: lat,
            longitude: lng,
            limit: '30',
            currency: 'USD',
            distance: '3',
            open_now: 'false',
            lunit: 'km'
          },
          headers: {
            'X-RapidAPI-Key': '48ddaedd43msh22af8f8a78dcc00p1dba6djsn926cacd1995f',
            'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
          }
        };
    
        const response = await axios.request(options);
        console.log(response.data);
        setInfoResturants(response.data);
      } catch (error) {
        console.error(error);
      }
    }


if(infoResturants!=undefined){
  infoResturants.data.map((val,index)=>{
      if((val.price_level!=undefined&&val.price_level!="")&&val.photo!=undefined){           
          arrResturants.push( {
            latitude:val.latitude,
            longitude:val.longitude,
            name: val.name,
            price:val.price,
            price_level:val.price_level,
            category: val.category.key,
            phone:val.phone,
            photo:val.photo.images.large.url,
            email: val.email,
            address:val.address,
            ranking:(" ")+ Math.round((val.raw_ranking)*10)/10+(" Stars"), 
            budget: diffDays
          })           
      }
  })
  const handleChangeArr=()=>{
    let kefel = numResturant;
console.log(kefel+"kefel from resturants");
    for(let i=0; i<arrResturants.length; i++){
      if(arrResturants[i].price_level == "$"){
        arrResturants[i].price_level = "max of 10$"
        arrResturants[i].budget = (diffDays*kefel*10)+'$'
      }
      if(arrResturants[i].price_level == "$-$$"){
        arrResturants[i].price_level =  "10$-15$"
        arrResturants[i].budget = (diffDays*kefel*15)+'$'

      }
      if(arrResturants[i].price_level == "$$"){
        arrResturants[i].price_level =  "15$-25$"
        arrResturants[i].budget = (diffDays*kefel*25)+'$'

      }
      if(arrResturants[i].price_level == "$$ - $$$"){
        arrResturants[i].price_level =  "25$-40$"
        arrResturants[i].budget = (diffDays*kefel*40)+'$'

      }
      if(arrResturants[i].price_level == "$$$"){
        arrResturants[i].price_level = "40$-60$"
        arrResturants[i].budget = (diffDays*kefel*60)+'$'

      }
      if(arrResturants[i].price_level == "$$$ - $$$$"){
        arrResturants[i].price_level = "60$-80$"
        arrResturants[i].budget = (diffDays*kefel*80)+'$'

      }
      if(arrResturants[i].price_level == "$$$$"){
        arrResturants[i].price_level = "80$-100$"
        arrResturants[i].budget = (diffDays*kefel*100)+'$'

      }
      
    }
  }
  handleChangeArr()
}

console.log(arrResturants)
console.log(arrResturants.length)


const handlePrice =(e)=>{
let filter = arrResturants.filter(val => val.price_level !== undefined && val.price_level !== "" && val.photo !== undefined)
setFilteredArrayResturants(filter)
console.log(e)
console.log("hey")

setSelectedOption(e.target.value);

if(e.target.value == "all"){
  let filter = arrResturants.filter(val => val.price_level !== undefined && val.price_level !== "" && val.photo !== undefined); 
  console.log(filter)
  if(filter.length!=filteredArrayResturants.length)
  setFilteredArrayResturants(filter)
}


if(e.target.value == "$"){
   let filter = arrResturants.filter(val => val.price_level !== undefined && val.price_level !== "" && val.photo !== undefined && val.price_level == "max of 10$"); 
   console.log(filter)
   if(filter.length!=0){
    setFilteredArrayResturants(filter)
  }else{
    alert("there is nothing match to your search  try something else")
    setFilteredArrayResturants(arrResturants)

  }
}

if(e.target.value == "$-$$"){
  let filter = arrResturants.filter(val => val.price_level !== undefined && val.price_level !== "" && val.photo !== undefined && (val.price_level == "10$-15$")); 
  console.log(filter)
  if(filter.length!=0){
    setFilteredArrayResturants(filter)
  }else{
    alert("there is nothing match to your search  try something else")
    setFilteredArrayResturants(arrResturants)

  }
  
}


if(e.target.value == "$$"){
let filter = arrResturants.filter(val => val.price_level !== undefined && val.price_level !== "" && val.photo !== undefined && val.price_level == "15$-25$"); 
console.log(filter)
if(filter.length!=0){
 setFilteredArrayResturants(filter)
}else{
 alert("there is nothing match to your search  try something else")
 setFilteredArrayResturants(arrResturants)

}
}

if(e.target.value == "$$ - $$$"){
let filter = arrResturants.filter(val => val.price_level !== undefined && val.price_level !== "" && val.photo !== undefined && val.price_level == "25$-40$"); 
if(filter.length!=0){
  setFilteredArrayResturants(filter)
}else{
  alert("there is nothing match to your search  try something else")
  setFilteredArrayResturants(arrResturants)
}
}


if(e.target.value == "$$$"){
let filter = arrResturants.filter(val => val.price_level !== undefined && val.price_level !== "" && val.photo !== undefined && val.price_level == "40$-60$"); 
if(filter.length!=0){
  setFilteredArrayResturants(filter)
}else{
  alert("there is nothing match to your search  try something else")
  setFilteredArrayResturants(arrResturants)

}

}

if(e.target.value == "$$$ - $$$$"){
let filter = arrResturants.filter(val => val.price_level !== undefined && val.price_level !== "" && val.photo !== undefined && val.price_level == "60$-80$"); 
if(filter.length!=0){
  setFilteredArrayResturants(filter)
}else{
  alert("there is nothing match to your search  try something else")
  setFilteredArrayResturants(arrResturants)

}

}

if(e.target.value == "$$$$"){
let filter = arrResturants.filter(val => val.price_level !== undefined && val.price_level !== "" && val.photo !== undefined && val.price_level == "80$-100$"); 
if(filter.length!=0){
  setFilteredArrayResturants(filter)
}else{
  alert("there is nothing match to your search  try something else")
  setFilteredArrayResturants(arrResturants)

}

}

}

useEffect(() => {
console.log("filteredArrayResturants changed");
}, [filteredArrayResturants]);


////////////////////////////////////////////////////attraction functionallity
async function getAttraction() {
  const options = {
  method: 'GET',
  url: 'https://travel-advisor.p.rapidapi.com/attractions/list-by-latlng',
  params: {
  longitude: lng,
  latitude: lat,
  lunit: 'km',
  currency: 'USD',
  distance: '25'

  },
  headers: {
  'X-RapidAPI-Key': '48ddaedd43msh22af8f8a78dcc00p1dba6djsn926cacd1995f',
  'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
  }
  };
  try {
  const response = await axios.request(options);
  console.log(response.data);
  console.log(lat);
  console.log(lng);
  setInfoAttractions(response.data)
  } catch (error) {
  console.error(error);
  }
}

  if (infoAttractions!= undefined){
      infoAttractions.data.map((val, index) => {
            if (val.address!=undefined && val.rating!=undefined && val.name!=undefined && val.web_url!=undefined) {
              if(val.phone!=undefined){
                  arrAttractions.push({
                      name:val.name,
                      rating:val.rating,
                      address:val.address,
                      phone:val.phone,
                      web_url:val.web_url
                  });
              }if(val.phone == undefined){
                  arrAttractions.push({
                      name:val.name,
                      rating:val.rating,
                      address:val.address,
                      phone:"Not Valid Phone",
                      web_url:val.web_url
                  });
              }
              }
          });
      }
  
console.log(arrAttractions)

const [loadpage,setLoadpage] = useState('.')

function AnimatedText({ text }) {
const [currentText, setCurrentText] = useState(text);

useEffect(() => {
  let index = 0;
  const dots = "...";
  const interval = setInterval(() => {
    setCurrentText(text + dots.slice(0, index));
    index = (index + 1) % (dots.length + 1);
  }, 300);

  return () => clearInterval(interval);
}, [text]);

return <h2>{currentText}</h2>;
}

//////////////////////////////order functionallty
const [orders, setOrders] = useState([]);

async function getUpdatedOrder() {
  console.log('getUpdatedOrder')
  const token = localStorage.getItem("token");
  const decodedToken = jwtDecode(token);
  const id = decodedToken._id;
  try {
    const result = await axios.get(`http://localhost:4000/api/users/${id}`);
    console.log(result.data.order)
   if(result.data.order.length!=orders.length){
     console.log("hey")
     console.log(result.data.order);
     setOrders(result.data.order);
    // getUpdatedOrder()
    }
    
  } catch (error) {
    console.error(error);
  }
}

async function getAirPortCode() {
  try {
    const options = {
      method: 'GET',
      url: 'https://skyscanner50.p.rapidapi.com/api/v1/searchAirport',
      params: {
        query: name,
      },
      headers: {
        'X-RapidAPI-Key': '42351c1dd5msha8dfbf69d82d049p194be3jsn6b6e9a2ca011',
        'X-RapidAPI-Host': 'skyscanner50.p.rapidapi.com'
      }
    };

    const response = await axios.request(options);
    console.log(response.data)
    setDestAirportCode(response.data);//get the airport code from api
    if(response.data.length == 0){
    alert("We are overwhelmed with previous requests. Please try again later.")
    }else{
      console.log(response.data)
      alert('request confirmed, please insert data about the number of peoples and about time of stay')
    }
  } catch (error) {
    console.error(error);
  }
}

async function getFlights(e){
console.log(e.target.innerHTML.split('(')[1].split(')')[0])
try{
  const options = {
    method: 'GET',
    url: 'https://skyscanner50.p.rapidapi.com/api/v1/searchFlights',
    params: {
      origin: fromAirportCode,
      destination: e.target.innerHTML.split('(')[1].split(')')[0],
      date: formattedDate,
      adults:numFlights,
      filter: 'take_off_time'

    },
    headers: {
      'X-RapidAPI-Key': '42351c1dd5msha8dfbf69d82d049p194be3jsn6b6e9a2ca011',
      'X-RapidAPI-Host': 'skyscanner50.p.rapidapi.com'
    }
  }

const response = await axios.request(options);
console.log(response)
if(response.data.length == 0){
    console.log('no data to show')
    alert("We are overwhelmed with previous requests. Please try again later.")
  }else{
      console.log(response.data)
      setFlights(response.data.data);//get the airport code from api
  alert('request confirmed, please insert data about the number of peoples and about time of stay')
}
} catch (error) {
console.error(error);
}
}

useEffect(() => {
  if (destAirportCode && destAirportCode.data) {
    const arr2 = [];
    const newTopAirPorts = destAirportCode.data.map((s, index) => {
      let airPortCode;
      let airPortName;
      if (s.AirportInformation === undefined) {
        airPortCode = s.PlaceId.slice(0, 3);
        airPortName=s.PlaceName
      } else {
        airPortCode = s.AirportInformation.PlaceId.slice(0, 3);
        airPortName=s.AirportInformation.PlaceName
      }
      if (!arr2.includes(airPortCode)) {
        arr2.push(airPortCode);
        return (
          <Button onClick={(e)=>getFlights(e)} key={index} style={{backgroundColor:'rgb(99 137 141)',borderColor:'#05060800',marginBottom:'0.5em',display: 'flex',justifyContent: 'center',margin:'1em'}} >
            {airPortName}({airPortCode})
          </Button>
        );
      }
    });
    setTopAirPorts(newTopAirPorts);// display the codes on the top of the page
  }

}, [destAirportCode]);

const inputString = selectedRange.startDate;
const date = new Date(inputString);
const year = date.getFullYear();
const month = String(date.getMonth() + 1).padStart(2, "0");
const day = String(date.getDate()).padStart(2, "0");
const formattedDate = `${year}-${month}-${day}`;
console.log(formattedDate)
console.log(numFlights)
console.log(flights)
console.log(fromAirportCode)



    return (

      <div >
  {loading && (
  <div style={{background: "linear-gradient(to right, #DF9A71, #CC784C)"}}>
  <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '60vh' }}>
    <CircularProgress style={{color:"white"}} size={80} />
  </Box>

<Box sx={{display: 'flex', alignItems: 'center', justifyContent: 'center',height: '40vh', color:"white" }}>
 
<AnimatedText text="Searching the best Results for YOU" />
  </Box> 
  
  
   
</div>
  )}

  {!loading && (
    <>
      <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>

   
      </div>

      <HomePageContext.Provider
        value={{ getAirPortCode,topAirPorts,flights,fromAirportCode,setFromAirportCode,numFlights,filteredArray, days, selectedOption, handlePrice,infoResturants, filteredArrayResturants, arrAttractions, updateUserOrder,cityName,getName,setName, setSelectedCity, getHotels, getRestaurants,getAttraction,arr,cityData,handleIn,setNum,handleRangeChange,selectedRange,lat,lng, selectedCity,getUpdatedOrder,orders,setOrders, changer , isDisabled, setIsDisabled, handleFirstButtonClick, handleSecondButtonClick, isDisabledResturants, setIsDisabledResturants, handleFirstButtonClickResturants, handleSecondButtonClickResturants}}
      >
        {children}
      </HomePageContext.Provider>
    </>
  )}
</div>

    );

    
   
}

export default HomePage;