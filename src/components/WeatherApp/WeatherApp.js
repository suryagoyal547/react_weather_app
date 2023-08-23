import React, { useState } from 'react'
import './WeatherApp.css'

import search_icon from '../Assets/search.png'
import clear_icon from '../Assets/clear.png'
import cloud_icon from '../Assets/cloud.png'
import drizzle_icon from '../Assets/drizzle.png'
import rain_icon from '../Assets/rain.png'
import snow_icon from '../Assets/snow.png'
import wind_icon from '../Assets/wind.png'
import humidity_icon from '../Assets/humidity.png'


const WeatherApp = () => {

  let api_key = "8e90854e53a7b709161184f5dfcda976";

  const [wicon, setWicon] = useState(cloud_icon);

  
  const [humidity, setHumidity] = useState("-");
  const [wind, setWind] = useState("-");
  const [loc, setLoc] = useState("-");
  const [temp, setTemp] = useState("-");

  
 

  const search = async ()=>{

    const element = document.getElementsByClassName("cityInput");
    if(element[0].value===""){
      return 0;
    } 
 
    const url =`https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=Metric&appid=${api_key}`;

     let response = await fetch(url);
     let data = await  response.json();

/*
     const humidity = document.getElementsByClassName("humidity-percentage");
     const wind = document.getElementsByClassName("wind-speed");
     const temp = document.getElementsByClassName("weather-temp");
     const loc = document.getElementsByClassName("weather-location");
*/
   
     
     setHumidity(data.main.humidity+" %");
     setWind(data.wind.speed +" kmph");
     setLoc(data.name);
     setTemp(data.main.temp+"°C");


       /*

     humidity[0].innerHTML = data.main.humidity+" %";
     wind[0].innerHTML = data.wind.speed +" kmph";
     temp[0].innerHTML = data.main.temp+"°C";
     loc[0].innerHTML = data.name;
*/
     if(data.weather[0].icon==="01d" || data.weather[0].icon==="01n"){
      setWicon(clear_icon);
     }
     else if(data.weather[0].icon==="02d" || data.weather[0].icon==="02n"){
      setWicon(cloud_icon);
     }
     else if(data.weather[0].icon==="02d" || data.weather[0].icon==="02n"){
      setWicon(cloud_icon);
     }
     else if(data.weather[0].icon==="03d" || data.weather[0].icon==="03n"){
      setWicon(drizzle_icon);
     }
     else if(data.weather[0].icon==="04d" || data.weather[0].icon==="04n"){
      setWicon(drizzle_icon);
     }
     else if(data.weather[0].icon==="09d" || data.weather[0].icon==="09n"){
      setWicon(rain_icon);
     }
     else if(data.weather[0].icon==="10d" || data.weather[0].icon==="10n"){
      setWicon(rain_icon);
     }
     else if(data.weather[0].icon==="13d" || data.weather[0].icon==="13n"){
      setWicon(snow_icon);
     }
     else{
      setWicon(clear_icon);
     }

  }
  return (
    <div className='container'>
      
        <div className="top-bar">
          <input type="text" className='cityInput' placeholder='search'/>
        <div className="search-icon" onClick={()=> {search() }}>
          <img src={search_icon} style={{width:'25px'}} alt="" />
        </div>
        </div>
             
        <div className="weather-image">
          <img src={wicon} style={{width:'120px'}} alt="" />
        </div>

        <div className="weather-temp">
          {temp}
        </div>

        <div className="weather-location">
          {loc}
        </div>


        <div className="data-container">


          <div className="element">
            <img src={humidity_icon} style={{width:'40px'}} alt="" className="icon" />
            <div className="data">
              <div className="humidity-percentage">
                {humidity}
              </div>
              <div className="text">
                Humidity
              </div>
            </div>
          </div>

          <div className="element">
            <img src={wind_icon}  style={{width:'40px'}} alt="" className="icon" />
            <div className="data">
              <div className="wind-speed">
                 {wind}
              </div>
              <div className="text">
                wind-speed
              </div>
            </div>
          </div>

          



        </div>
    </div>
  )
}

export default WeatherApp
