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
    width: "50%",
    height: "150px",
    borderRadius: "12px",
    alignItems: "center",
    justifyContent:"center",
    padding: "10px",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
    color: "white",
  };

  const iconStyle = {
    width: "70px",
    height: "70px",
    backgroundColor: "white",
    borderRadius: "50%",
    // padding: "5px",
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "20px",
      }}
    >
      {error ? (
        <Card sx={cardStyles} variant="outlined">
          <CardContent
            sx={{ width: "100%", textAlign: "center", color: "white" }}
          >
            <Typography sx={{ fontSize: 24 }} color="error">
              {error}
            </Typography>
          </CardContent>
        </Card>
      ) : !weatherInfo ? (
        <Card sx={cardStyles} variant="outlined">
          <CardContent
            sx={{ width: "100%", textAlign: "center", color: "white" }}
          >
            <Typography sx={{ fontSize: 24 }} color="text.secondary">
              Loading...
            </Typography>
          </CardContent>
        </Card>
      ) : (
        <Card sx={cardStyles} variant="outlined">
          <CardContent
            sx={{
              display: "flex",
              alignItems: "center",
              color: "white",
              gap: "20px",
              mt:"-14px",
            }}
          >
            <img
              src={`https://openweathermap.org/img/wn/${weatherInfo.weather[0]?.icon}@2x.png`}
              alt={weatherInfo.weather[0]?.description}
              style={iconStyle}
            />
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                flex: 1,
              }}
            >
              <Typography
                sx={{ fontSize: 24, fontWeight: 300 }}
                color="white"
                gutterBottom
              >
                {weatherInfo.name}
              </Typography>
              <Typography
                variant="h4"
                component="div"
                sx={{ fontSize: "2rem", marginBottom: "8px" }}
              >
                {weatherInfo.main?.temp}°C
              </Typography>
              <Typography sx={{ mb: 1.5 }}>
                {weatherInfo.weather[0]?.main}
              </Typography>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default SmallCards;
