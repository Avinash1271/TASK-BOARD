import React from 'react';

const DayForecast = ({ data }) => {
  const date = new Date(data.dt * 1000);
  const dayOfWeek = date.toLocaleDateString('en-US', { weekday: 'long' });
  const temperature = Math.round(data.main.temp - 273.15);

  return (
    <div className="day-forecast">
      <p>{dayOfWeek}</p>
      <img
        src={`https://openweathermap.org/img/wn/${data.weather[0].icon}.png`}
        alt={data.weather[0].description}
      />
      <p>{temperature}°C</p>
    </div>
  );
};

export default DayForecast;
