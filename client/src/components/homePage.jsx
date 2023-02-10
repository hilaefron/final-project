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
const [days,setDays] = useState(1);

const [loading, setLoading] = useState(false);


const [budjet,setBudjet]=useState('')



////////////////////////////////////////////////////resturants data
const [selectedOption, setSelectedOption] = useState("");
const [filteredArrayResturants, setFilteredArrayResturants]= useState([])
let [infoResturants, setInfoResturants] = useState();
let arrResturants =[];


////////////////////////////////////////////////////attraction data
let arrAttractions =[];
const [filteredArrayAttractions, setFilteredArrayAttractions]= useState([])
let [infoAttractions, setInfoAttractions] = useState();


////////////////////////////////////////////////////attraction functionality
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
          'X-RapidAPI-Key': 'f9a74bd6bfmsh9a56fb732196713p1cbc4ajsndf852c3ff761',
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
          });
        }
      });
}


async function updateUserOrder(val, budjet) {
  console.log(val)
  console.log("budjet"+budjet)
let body = val
let budjetValue = budjet
  const token = localStorage.getItem("token");
  const decodedToken = jwtDecode(token);
  const id =  decodedToken._id;
  try {
    const res = await axios.put(`http://localhost:4000/api/users/${id}`, {
      body,
      budjet: budjetValue
    });
    return res.body;
  } catch (error) {
    console.error(error);
  }
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
        console.log(num + "num");
        setNum(1);
        let kefel = num;
        
  
          for (let i = 0; i < arr.length; i++) {
            let [priceMin, priceMax] = arr[i].price
            .replace(/\$/g, "")
            .split(" - ")
            .map(Number);
            priceMin = priceMin * kefel*diffDays;
            priceMax = priceMax * kefel*diffDays;
            setBudjet("$" + priceMax)
            let newPrice = "$" + priceMin + " - " + "$" + priceMax;
          anotherFilteredArray[i].price = newPrice;
          console.log(anotherFilteredArray[i])
        }
        setFilteredArray(anotherFilteredArray)
        setDays(diffDays)

    }
    console.log(filteredArray)
  

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
              'X-RapidAPI-Key': 'f9a74bd6bfmsh9a56fb732196713p1cbc4ajsndf852c3ff761',
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
              ranking:(" ")+ Math.round((val.raw_ranking)*10)/10+(" Stars")             
            })           
        }
    })
}
  console.log(arrResturants)
  console.log(arrResturants.length)


const handlePrice =(e)=>{
  console.log("hey")
  setSelectedOption(e.target.value);

  if(e.target.value == "all" ){
    let filter = arrResturants.filter(val => val.price_level !== undefined && val.price_level !== "" && val.photo !== undefined); 
    console.log(filter)
    setFilteredArrayResturants(filter)
 }

  if(e.target.value == "$"){
     let filter = arrResturants.filter(val => val.price_level !== undefined && val.price_level !== "" && val.photo !== undefined && val.price_level == "$"); 
     console.log(filter)
     if(filter.length!=0){
      setFilteredArrayResturants(filter)
    }else{
      alert("there is nothing match to your search  try something else")
      setFilteredArrayResturants(arrResturants)

    }
  }

  if(e.target.value == "$-$$"){
    let filter = arrResturants.filter(val => val.price_level !== undefined && val.price_level !== "" && val.photo !== undefined && (val.price_level == "$-$$"|| val.price_level == "$")); 
    console.log(filter)
    if(filter.length!=0){
      setFilteredArrayResturants(filter)
    }else{
      alert("there is nothing match to your search  try something else")
      setFilteredArrayResturants(arrResturants)

    }
    
 }

 
 if(e.target.value == "$$"){
  let filter = arrResturants.filter(val => val.price_level !== undefined && val.price_level !== "" && val.photo !== undefined && val.price_level == "$$"); 
  console.log(filter)
  if(filter.length!=0){
   setFilteredArrayResturants(filter)
 }else{
   alert("there is nothing match to your search  try something else")
   setFilteredArrayResturants(arrResturants)

 }
}

 if(e.target.value == "$$ - $$$"){
  let filter = arrResturants.filter(val => val.price_level !== undefined && val.price_level !== "" && val.photo !== undefined && val.price_level == "$$ - $$$"); 
  if(filter.length!=0){
    setFilteredArrayResturants(filter)
  }else{
    alert("there is nothing match to your search  try something else")
    setFilteredArrayResturants(arrResturants)
  }
}


if(e.target.value == "$$$"){
  let filter = arrResturants.filter(val => val.price_level !== undefined && val.price_level !== "" && val.photo !== undefined && val.price_level == "$$$"); 
  if(filter.length!=0){
    setFilteredArrayResturants(filter)
  }else{
    alert("there is nothing match to your search  try something else")
    setFilteredArrayResturants(arrResturants)

  }
  
}

if(e.target.value == "$$$ - $$$$"){
  let filter = arrResturants.filter(val => val.price_level !== undefined && val.price_level !== "" && val.photo !== undefined && val.price_level == "$$$"); 
  if(filter.length!=0){
    setFilteredArrayResturants(filter)
  }else{
    alert("there is nothing match to your search  try something else")
    setFilteredArrayResturants(arrResturants)

  }
  
}

if(e.target.value == "$$$$"){
  let filter = arrResturants.filter(val => val.price_level !== undefined && val.price_level !== "" && val.photo !== undefined && val.price_level == "$$$$"); 
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
    'X-RapidAPI-Key': '97e4d9cb13msh7a0e4278afb4cfcp14917bjsn09bf4d37817e',
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

    return (
      //   <div>
          
      //        {loading && (
      //   <Box sx={{ display: 'flex' }}>
      //     <CircularProgress />
      //   </Box>
      // )}

      
      //     {/* get hotels and resturants! */}
      //     <form onSubmit={(e)=>getName(e)}>
      //       <input type='text' placeholder='enter city name' onChange={(e)=>setName(e.target.value)}/>
      //       <button type='submit' > get city </button>
      //     </form>

      //     <select onChange={e => setSelectedCity(e.target.value)}>
      //       {cityData.map(city => (
      //       <option value={city.country}>{city.name}, {city.country}</option>
      //       ))}
      //     </select>
          
      //     {lat && lng && <button onClick={() => {getHotels(); getRestaurants(); getAttraction(); }}> Get All </button>}

      //       {/* about te array of the hotels --  call the function that calc the new price by the changes*/}
      //       {/* set num = number of adults he put inside*/}
      //       {/* set selectedRange = ranges (user decided)*/}
      //       {/* */}       
      //     <form id="myForm" onSubmit={(e) => {handleIn(e)}} >
      //       <label>number of adults</label>
      //       <input type="number" onChange={(e) => setNum(e.target.value)} />
      //       <br />
      //       <label>Date range:</label>
      //       <DateRange
      //         onChange={handleRangeChange}
      //         ranges={[selectedRange]}
      //         showSelectionPreview={true}
      //         minDate={new Date()}
      //       />
      //       <button type="submit">click</button>
      //     </form>

      //     <HomePageContext.Provider value={{filteredArray, days, selectedOption, handlePrice, filteredArrayResturants, arrAttractions,updateUserOrder}}>
      //         {children}
      //     </HomePageContext.Provider>
      //   </div>

      <div >
  {loading && (
  <div style={{backgroundColor:"cornflowerblue"}}>
  <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '60vh' }}>
    <CircularProgress style={{color:"black"}} size={80} />
  </Box>
{/* 
  <Box sx={{display: 'flex', alignItems: 'center', justifyContent: 'center', width: '50%', height: '50vh' }}>
    <LinearProgress />
    <label htmlFor="">searching for you the best results</label>
  </Box> */}

<Box sx={{display: 'flex', alignItems: 'center', justifyContent: 'center',height: '40vh' }}>
 
<AnimatedText text="Searching the best Results for YOU" />
  </Box> 
  
  
   
</div>
  )}

  {!loading && (
    <>
      {/* get hotels and resturants! */}
      <form onSubmit={e => getName(e)}>
        <input type="text" placeholder="enter city name" onChange={e => setName(e.target.value)} />
        <button type="submit"> get city </button>
      </form>

      <select onChange={e => setSelectedCity(e.target.value)}>
        {cityData.map(city => (
          <option value={city.country}>
            {city.name}, {city.country}
          </option>
        ))}
      </select>

      {lat && lng && (
        <button onClick={() => { getHotels(); getRestaurants(); getAttraction(); }}>
          Get All
        </button>
      )}

      {/* about te array of the hotels --  call the function that calc the new price by the changes*/}
      {/* set num = number of adults he put inside*/}
      {/* set selectedRange = ranges (user decided)*/}
      {/* */}
      <form id="myForm" onSubmit={e => handleIn(e)}>
        <label>number of adults</label>
        <input type="number" onChange={e => setNum(e.target.value)} />
        <br />
        <label>Date range:</label>
        <DateRange
          onChange={handleRangeChange}
          ranges={[selectedRange]}
          showSelectionPreview={true}
          minDate={new Date()}
        />
        <button type="submit">click</button>
      </form>

      <HomePageContext.Provider
        value={{ filteredArray, days, selectedOption, handlePrice, filteredArrayResturants, arrAttractions, updateUserOrder,cityName, budjet }}
      >
        {children}
      </HomePageContext.Provider>
    </>
  )}
</div>

    );

    
   
}

export default HomePage;