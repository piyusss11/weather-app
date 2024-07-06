import { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { API_KEY } from "../utils/constants";

const SmallCards = ({ city }) => {
  const [weatherInfo, setWeatherInfo] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getWeather = async () => {
      try {
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=${API_KEY}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch weather data");
        }
        const data = await response.json();
        setWeatherInfo(data);
      } catch (error) {
        setError(error.message);
      }
    };
    getWeather();
  }, [city]);

  const cardStyles = {
    background: "linear-gradient(360deg, #333, #444)",
    width: '100%',  // Adjust width to take full width in landscape
    height: '220px', // Adjust height as needed
    borderRadius: '12px',
    mt:"20px",
    display: 'flex', 
    flexDirection: 'row', // Landscape orientation
    alignItems: 'center', 
    justifyContent: 'space-between', 
    padding: '20px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
    color: 'white', // Ensuring text color matches the style
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "20px" }}>
      {error ? (
        <Card sx={cardStyles} variant="outlined">
          <CardContent sx={{ width: '100%', textAlign: 'center', color: 'white' }}>
            <Typography sx={{ fontSize: 24 }} color="error">
              {error}
            </Typography>
          </CardContent>
        </Card>
      ) : !weatherInfo ? (
        <Card sx={cardStyles} variant="outlined">
          <CardContent sx={{ width: '100%', textAlign: 'center', color: 'white' }}>
            <Typography sx={{ fontSize: 24 }} color="text.secondary">
              Loading...
            </Typography>
          </CardContent>
        </Card>
      ) : (
        <Card sx={cardStyles} variant="outlined">
          <CardContent sx={{  display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" , gap: "10px", color: 'white' ,}}>
            <Typography sx={{ fontSize: 24, fontWeight: 300 }} color="white" gutterBottom>
              {weatherInfo.name}
            </Typography>
            <Typography variant="h4" component="div" sx={{ display: 'flex', alignItems: 'center' }}>
              <img
                src={`https://openweathermap.org/img/wn/${weatherInfo.weather[0]?.icon}@2x.png`}
                alt={weatherInfo.weather[0]?.description}
                style={{ marginRight: '10px', backgroundColor: "white", borderRadius: '50%' }}
              />
              {weatherInfo.main?.temp}°C
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="white">
              {weatherInfo.weather[0]?.main}
              <br />
              {weatherInfo.weather[0]?.description === weatherInfo.weather[0]?.main ? "" : weatherInfo.weather[0]?.description}
            </Typography>
          </CardContent>
          <CardContent sx={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "space-between", gap: "10px" }}>
            <Typography sx={{ fontSize: 20, textAlign: "center" }} variant="body2">
              <img width={40} src="/images/humidity.png" alt="humidity icon" />
              <br />
              {weatherInfo.main?.humidity}%
              <br />
              Humidity
            </Typography>
            <Typography sx={{ fontSize: 20, textAlign: "center" }} variant="body2">
              <img width={36} src="/images/wind.png" alt="wind icon" />
              <br />
              {weatherInfo.wind?.speed} km/hr
              <br />
              Wind Speed
            </Typography>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default SmallCards;
