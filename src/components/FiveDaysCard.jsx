import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { useDispatch, useSelector } from "react-redux";
import { addDayGraph } from "../utils/graphSlice";

const FiveDaysCard = () => {
  const info = useSelector((store) => store.city.currentCity7Day);
  const dispatch = useDispatch();

  React.useEffect(() => {
    if (info && info.list) {
      const days = [
        info.list[2],
        info.list[10],
        info.list[18],
        info.list[26],
        info.list[30],
        info.list[40] ? info.list[40] : info.list[38],
      ];
      dispatch(addDayGraph(days));
    }
  }, [info, dispatch]);

  if (!info || !info.list) {
    return null; // or a loading spinner or message
  }

  const days = [
    info.list[2],
    info.list[10],
    info.list[18],
    info.list[26],
    info.list[30],
    info.list[40] ? info.list[40] : info.list[38],
  ];

  return (
    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, mt: 4, justifyContent: 'center' }}>
      {days.map((day, index) => (
        <Card key={index} sx={{ minWidth: 200, maxWidth: 250, textAlign: 'center', background: '#f8f9fa', borderRadius: '12px', boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)', padding: 2,"&:hover": {
                scale: "0.9",
              }, }}>
          <CardContent>
            <Typography sx={{ fontSize: 14, color: '#6c757d' }} gutterBottom>
              {new Date(day.dt * 1000).toLocaleDateString()}
            </Typography>
            <img
              src={`https://openweathermap.org/img/wn/${day.weather[0]?.icon}@2x.png`}
              alt={day.weather[0]?.description}
              style={{ width: '50px', height: '50px', margin: '10px auto' }}
            />
            <Typography variant="h5" component="div" sx={{ fontSize: '1.5rem', color: '#343a40', marginBottom: '8px' }}>
              {day.weather[0].main}
            </Typography>
            <Typography sx={{ mb: 1.5, color: '#6c757d' }}>
              {day.weather[0].description}
            </Typography>
            <Typography variant="body2" sx={{ fontSize: '1rem', color: '#343a40' }}>
              Temp: {day.main.temp}°C
              <br />
              Humidity: {day.main.humidity}%
              <br />
              Wind: {day.wind.speed} km/hr
            </Typography>
          </CardContent>
        </Card>
      ))}
    </Box>
  );
};

export default FiveDaysCard;
