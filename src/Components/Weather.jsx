import React, { useState } from "react";
import "./Stylesheets/weather.scss";

function Weather() {
  const apiKey = "05db537d5b4d9b97c6c06d233c31dfff";
  const [weatherData, setWeatherData] = useState([{}]);
  const [city, setCity] = useState("");

  const getWeather = (event) => {
    if (event.key == "Enter") {
      fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=${apiKey}`
      )
        .then((response) => response.json())
        .then((data) => {
          setWeatherData(data);
        });
    }
  };

  return (
    <div className="container">
        <h2>Het Weer</h2>
      <input
        className="input"
        placeholder="Kies locatie"
        onChange={(e) => setCity(e.target.value)}
        value={city}
        onKeyPress={getWeather}
      />

      {typeof weatherData.main === "undefined" ? (
        <div>
          <p>Welkom op mijn eindproject</p>
        </div>
      ) : (
        <div className="weer-data">
          <p className="stad">{weatherData.name}</p>
          <p className="temp">{Math.round(weatherData.main.temp)}°C</p>
          <p className="weer">{weatherData.weather[0].main}</p>
        </div>
      )}

      {weatherData.cod === "404" ? (
      <p>City not found</p>
      ) : ( 
       <>
       </>
      )}
    </div>
  );
  console.log();
}

export default Weather