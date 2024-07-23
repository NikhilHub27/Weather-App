import SearchBox from "./SearchBox";
import InBox from "./InBox";
import { useState } from "react";

export default function WeatherApp(){
    const [weatherInfo,setWeatherInfo] = useState({
        
            city: "kochin",
            feelslike: 24.84,
            temp: 25.05,
            tempMin: 25.05,
            tempMax: 25.05,
            humidity: 47,
            weather: "haze",
        
    });
     
    let updateInfo = (newinfo) => {
        setWeatherInfo(newinfo);
    };
     
    return(
        <div>
            <h2>WEATHER APP</h2>
            <SearchBox updateInfo={updateInfo}/>
            <InBox info={weatherInfo}/>
        </div>
    );
}