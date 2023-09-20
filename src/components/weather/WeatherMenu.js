// src/components/WeatherMenu.js
import React, { useEffect, useState } from 'react';
import DayForecast from './DayForecast';
import RefreshButton from './RefreshButton';

const WeatherMenu = () => {
  const [city, setCity] = useState('New York');
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    const apiKey = 'a1fbc7dba95ac9ef63b166dc7411cacd';
    const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}`;

    fetch(apiUrl)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setWeatherData(data);
      })
      .catch(error => {
        console.error('Error fetching weather data:', error);
      });
  }, [city]);

  return (
    <div className="weather-container">
      <h1>{city}</h1>
      <RefreshButton onClick={() => setCity('New York')} />
      <div className="forecast">
        {weatherData && weatherData.list.map((forecast, index) => (
          <DayForecast key={index} data={forecast} />
        ))}
      </div>
    </div>
  );
};

export default WeatherMenu;
