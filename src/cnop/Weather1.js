import React, { useEffect, useState } from 'react'
import Weathercard from './Weathercard';
import "./Style.css"
const Weather1 = () => {
  const [ town, setTowm] = useState ("jamshedpur") ;
  const [ winfo, setWinfo] = useState ({});
  const getweatherInfo = async () => {
    try{
        let url =
        `https://api.openweathermap.org/data/2.5/weather?q=${town}&units=metric&appid=c83507a3adc27cca778001d4932b595f`;
        const res =  await fetch(url);
        const data = await  res.json();
        
        const { temp, humidity, pressure } = data.main;
        const { main: weathermood } = data.weather[0];
        const { name, timezone } = data;
        const { speed } = data.wind;
        const { country, sunset, sunrise } =data.sys;
        
        const myNewWeatherinfo = {
            temp, 
            humidity, 
            pressure,
            weathermood,
            name,
            speed,
            country, 
            sunset,
            sunrise,
            timezone,
        };
        setWinfo(myNewWeatherinfo);
        
       
   }catch(error){
    console.log(error);
    }
};

  useEffect( () =>{
    getweatherInfo();
  }, []);

  return (
    <>
    <div className="div16">
        <div className="div18">
            <input type="search" 
            placeholder="search....." 
            autoFocus id="search" 
            className="div14" 
            value={town} 
            onChange={ (e) => setTowm(e.target.value)}/>

            <button type="button" 
            className="div15" 
onClick={getweatherInfo}>
            Search</button>
        </div>

    </div>
     <Weathercard { ...winfo }/>
    </>
  )
}

export default Weather1