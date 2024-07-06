import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { useSelector } from "react-redux";

const LeftCard = () => {
  const cityInfo = useSelector((store) => store.city?.cityInfo);

  if (!cityInfo) {
    return (
      <Box
        sx={{
          minWidth: 275,
          maxWidth: 500,
          paddingX: 2,
          height: "40%",
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

  return (
    <div style={{ display: "flex", justifyContent: "center", width: "100%" }}>
      <Box
        sx={{
          minWidth: 275,
          maxWidth: 500,
          paddingX: 2,
          height: "40%",
          mt: 4,
        }}
      >
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
              <img
                src={`https://openweathermap.org/img/wn/${weather[0]?.icon}@2x.png`}
                alt={weather[0]?.description}
                style={{
                  marginRight: "10px",
                  backgroundColor: "white",
                  borderRadius: "50%",
                }}
              />
              {main?.temp}°C
            </Typography>
            <Typography
              sx={{ mb: 1.5, textAlign: "center", fontWeight: 300 }}
              color="white"
            >
              {weather[0]?.main}
              <br />
              {weather[0]?.description === weather[0]?.main
                ? ""
                : weather[0]?.description}
            </Typography>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
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
    </div>
  );
};

export default LeftCard;
