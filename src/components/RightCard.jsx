import { Typography, useMediaQuery } from "@mui/material";
import SmallCards from "./SmallCards";
import { useDispatch, useSelector } from "react-redux";
import { addCity } from "../utils/citySlice";
import { useTheme } from "@mui/material/styles";

const RightCard = () => {
  const dispatch = useDispatch();
  const cities = useSelector((store) => store.city?.defaultCities || []);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const handleClick = (city) => {
    dispatch(addCity(city));
  };

  if (isMobile) {
    return null; // Hide component on mobile screens
  }

  return (
    <div
      style={{
        width: "60%",
        display: "flex",
        flexDirection: "column",
        marginRight:20,
        flexWrap: "wrap",
        gap: "20px",
        marginTop: "20px",
      }}
    >
      <Typography sx={{ textAlign: "center", fontSize: 24 }}>
        Famous Cities Weather
      </Typography>
      {cities.map((city, index) => (
        <div
          style={{ cursor: "pointer" }}
          key={index}
          onClick={() => handleClick(city)}
        >
          <SmallCards city={city} />
        </div>
      ))}
    </div>
  );
};

export default RightCard;
