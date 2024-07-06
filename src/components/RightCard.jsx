

import { Typography } from "@mui/material";
import SmallCards from "./SmallCards";
import { useSelector } from "react-redux";

const RightCard = () => {
  const cities = useSelector((store)=>store.city?.defaultCities)
  return (
    <div style={{width:"50%", display: "flex", flexWrap: "wrap", gap: "20px",marginTop:"20px", }}>
      <Typography sx={{textAlign:"center",fontSize:24}}>
      Famous Cities Weather
      </Typography>
      <SmallCards city={cities[0]} />
      <SmallCards city={cities[1]} />
      <SmallCards city={cities[2]} />
      <SmallCards city={cities[3]} />
      <SmallCards city={cities[4]} />
    </div>
  );
};

export default RightCard;
