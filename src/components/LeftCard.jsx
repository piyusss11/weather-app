import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { useSelector } from "react-redux";
import FiveDaysCard from "./FiveDaysCard";
import Graph from "./Graph";

const LeftCard = () => {
  const cityInfo = useSelector((store) => store.city?.cityInfo);

  if (!cityInfo) {
    return (
      <Box
        sx={{
          minWidth: 275,
          maxWidth: 900,
          paddingX: 2,
          height: "50%",
          mt: 4,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Card
          sx={{
            background: "linear-gradient(360deg, #333, #444)",
            color: "white",
            padding: 4,
            borderRadius: "12px",
            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
          }}
          variant="outlined"
        >
          <Typography variant="h6" align="center">
            Loading...
          </Typography>
        </Card>
      </Box>
    );
  }

  const { name, main, weather, wind } = cityInfo;

  const weatherDescription = weather?.[0]?.description || "Unknown"; // Ensure weather array exists and has at least one item

  const currentTime = new Date().toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  }); // Get current time

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "100%",
      }}
    >
      <Box
        sx={{
          minWidth: 600,
          maxWidth: 900,
          paddingX: 2,
          mt: 4,
        }}
      >
        <Typography sx={{ fontSize: 32, textAlign: "center", mb: 4 }}>
          Searched City
        </Typography>
        <Card
          sx={{
            background: "linear-gradient(360deg, #333, #444)",
            borderRadius: "12px",
            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
            width: "100%",
          }}
          variant="outlined"
        >
          <CardContent
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              color: "white",
            }}
          >
            <Typography sx={{ fontSize: 24, fontWeight: 300 }} gutterBottom>
              {name}
            </Typography>
            <Typography
              variant="h4"
              component="div"
              sx={{ display: "flex", alignItems: "center" }}
            >
              {weather?.[0]?.icon && (
                <img
                  src={`https://openweathermap.org/img/wn/${weather[0]?.icon}@2x.png`}
                  alt={weatherDescription}
                  style={{
                    marginRight: "10px",
                    backgroundColor: "white",
                    borderRadius: "50%",
                  }}
                />
              )}
              {main?.temp}°C
            </Typography>
            <Typography
              sx={{ mb: 1.5, textAlign: "center", fontWeight: 300 }}
              color="white"
            >
              {weatherDescription}
              <br />
              {weather?.[0]?.description === weatherDescription
                ? ""
                : weather?.[0]?.description}
            </Typography>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                gap: "20px",
                width: "100%",
                mt: 2,
              }}
            >
              <Typography
                sx={{ fontSize: 20, textAlign: "center", fontWeight: 300 }}
                variant="body2"
              >
                <img
                  width={40}
                  src="/images/humidity.png"
                  alt="humidity icon"
                />
                <br />
                {main?.humidity}%
                <br />
                Humidity
              </Typography>
              <Typography
                sx={{ fontSize: 20, textAlign: "center", fontWeight: 300 }}
                variant="body2"
              >
                {currentTime}
                <br />
                <small>Local Time</small>
              </Typography>
              <Typography
                sx={{ fontSize: 20, textAlign: "center", fontWeight: 300 }}
                variant="body2"
              >
                <img width={36} src="/images/wind.png" alt="wind icon" />
                <br />
                {wind?.speed} km/hr
                <br />
                Wind Speed
              </Typography>
            </Box>
          </CardContent>
        </Card>
      </Box>
      <Box
        sx={{ mt: 4, width: "80%", display: "flex", justifyContent: "center" }}
      >
        <FiveDaysCard />
      </Box>

      <Graph />
    </div>
  );
};

export default LeftCard;
