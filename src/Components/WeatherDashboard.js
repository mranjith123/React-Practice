import React, { useState } from 'react';

function WeatherDashboard() {
  const mockWeatherData = {
    'New York': {
      temperature: '22°C',
      humidity: '56%',
      windSpeed: '15 km/h'
    },
    'Los Angeles': {
      temperature: '27°C',
      humidity: '45%',
      windSpeed: '10 km/h'
    },
    'London': {
      temperature: '15°C',
      humidity: '70%',
      windSpeed: '20 km/h'
    }
  };

  const [cityInput, setCityInput] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState('');

  const handleSearch = () => {
    if (mockWeatherData.hasOwnProperty(cityInput)) {
      setWeatherData(mockWeatherData[cityInput]);
      setError('');
    } else {
      setWeatherData(null);
      setError('City not found.');
    }
  };

  const handlePreviousSearch = (city) => {
    setCityInput(city);
    handleSearch();
  };

  const previousSearchButtons = Object.keys(mockWeatherData).map((city, index) => (
    <button key={index} onClick={() => handlePreviousSearch(city)}>
      {city}
    </button>
  ));

  return (
    <div>
      <input
        type="text"
        id="citySearch"
        placeholder="Search for a city..."
        value={cityInput}
        onChange={(e) => setCityInput(e.target.value)}
      />
      <button id="searchButton" onClick={handleSearch}>
        Search
      </button>

      <div id="weatherData">
        {weatherData ? (
          <>
            <div>Temperature: {weatherData.temperature}</div>
            <div>Humidity: {weatherData.humidity}</div>
            <div>Wind Speed: {weatherData.windSpeed}</div>
          </>
        ) : (
          <div>{error}</div>
        )}
      </div>

      <div id="previousSearches">
        <h3>Previous Searches:</h3>
        {previousSearchButtons}
      </div>
    </div>
  );
}

export default WeatherDashboard;
