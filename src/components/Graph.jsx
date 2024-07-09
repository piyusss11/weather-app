import { Box, Typography } from "@mui/material";
// import React, { PureComponent } from "react";
import { useSelector } from "react-redux";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const Graph = () => {
  const info = useSelector((store) => store.graph.dayGraph) || [];
  const cityName = useSelector((store)=>store.city.currentCity)
  const fiveDayTemp = info.map((day) => day.main.temp);
  const fiveDayDate = info.map((day) =>
    new Date(day.dt * 1000).toLocaleDateString()
  );
  const data = fiveDayDate.map((date, index) => ({
    date: date,
    temp: fiveDayTemp[index] ,
  }));

  // console.log(fiveDayTemp);
  // console.log(fiveDayDate);

  return (

    <Box sx={{ marginTop: 10,marginBottom:6, width: '80%', marginLeft: 'auto', marginRight: 'auto' }}>
    <Typography variant="h5" component="div" sx={{ textAlign: 'center', marginBottom: 2 }}>
      Temperature of the {cityName} for the next 5 days
    </Typography>
    <ResponsiveContainer width="100%" height={300}>
      <LineChart
        data={data}
        margin={{
          top: 10,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip
          formatter={(value) => `${value}°C`}
          labelFormatter={(label) => `Date: ${label}`}
        />
        <Legend />
        <Line
          type="monotone"
          dataKey="temp"
          stroke="#8884d8"
          activeDot={{ r: 8 }}
        />
      </LineChart>
    </ResponsiveContainer>
  </Box>
  );
};

export default Graph;
