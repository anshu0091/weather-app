import React,{ useEffect } from 'react'
 
const Weathercard = ({ 
  temp, 
  humidity, 
  pressure,
  weathermood,
  name,
  speed,
  country, 
  sunset,
  timezone,
  sunrise, }) => {
    const [weatherState, setWeatheState] = React.useState("");

    useEffect(() => {
      if (weathermood) {
        switch (weathermood) {
          case "Clouds":
            setWeatheState("wi-day-cloudy");
            break;
          case "Haze":
            setWeatheState("wi-fog");
            break;
          case "Clear":
            setWeatheState("wi-day-sunny");
            break;
          case "Mist":
            setWeatheState("wi-dust");
            break;
  
          default:
            setWeatheState("wi-day-sunny");
            break;
        }
    }
      }, [weathermood]);
  let sec = sunset;
  let date = new Date(sec * 1000);
  let timestr = `${date.getHours()}:${date.getMinutes()}`;

  let sec1 = sunrise;
  let date1 = new Date(sec1 * 1000);
  let timestr1 = `${date1.getHours()}:${date1.getMinutes()}`;

  let sec3 = timezone;
  let date3 = new Date(sec3 * 1000);
  let timestr3 = `${date3.getHours()}:${date3.getMinutes()}`;
  return (
    <>
    <article className="div1">
    <div className="div2">
        <i className={`wi ${weatherState}`}></i></div>
    <div className="div3">
    <div className="div4">
     <span>{temp}deg</span>   
    </div>
    <div className="div5">
     <div className="div6">{weathermood}</div>
     <div className="div7">{name}, {country}</div>   
    </div>
    </div>
    <div className="div8">{new Date().toLocaleString()} India
    </div>

    <div className="div9">
    <div className="div10">
     <div className="div11">
        <p>
            <i className={"wi wi-sunset"}></i>
        </p>
        <p className="div13">
            {sunset}<br/>
            sunset
        </p>
     </div>
     <div className="div11">
        <p>
            <i className={"wi wi-sunrise"}></i>
        </p>
        <p className="div13">
            {timestr1}<br/>
             sunrise
        </p>
     </div>
      <div className="div11">
        <p>
            <i className={"wi wi-sunrise"}></i>
        </p>
        <p className="div13">
            {timestr3}GMT<br/>
             time
        </p>
     </div> 

    <div>
     <div className="div11">
        <p>
            <i className={"wi wi-humidity"}></i>
        </p>
        <p className="div13">
            {humidity}<br/>
            humidity
        </p>
     </div>
     </div>
     
     <div className="div11">
        <p>
            <i className={"wi wi-rain"}></i>
        </p>
        <p className="div13">
            {pressure}<br/>
            pressure
        </p>
     
     </div>
     

     <div className="div11">
        <p>
            <i className={"wi wi-strong-wind"}></i>
        </p>
        <p className="div13">
            {speed}<br/>
            windspeed
        </p>
     </div>
    </div>
    </div>
    </article>
    </>
  )
}

export default Weathercard