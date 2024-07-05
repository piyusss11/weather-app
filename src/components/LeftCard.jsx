import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useDispatch, useSelector } from "react-redux";



const LeftCard = () => {
    const cityInfo = useSelector((store)=>store.city?.cityInfo)
    const {name,main,weather,wind} =cityInfo
    console.log(cityInfo);
    
    
    const card = (
      <React.Fragment>
        <CardContent sx={{display:"flex",flexDirection:"column", alignItems:"center"}}>
          <Typography sx={{ fontSize: 24 }} color="text.secondary" gutterBottom>
            {name}
          </Typography>
          <Typography variant="h5" component="div">
            <img src={`https://openweathermap.org/img/wn/${weather[0]?.icon}@2x.png`} alt="" />
            <br/>
            {main?.temp}
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            adjective
          </Typography>
          <Typography variant="body2">
            Wind speed 
            <br />
            {'"a benevolent smile"'}
          </Typography>
        </CardContent>
      </React.Fragment>
    );
   
  return (
    <Box sx={{ minWidth: 275 , maxWidth:500,paddingLeft: 4, height: "40%", mt:4 }}>
      <Card variant="outlined"> {card}
        <div style={{display:"flex",flexDirection:"column",gap:"4px",alignItems:"center"}}>
            <h4 style={{fontSize:24,fontWeight:"400"}}>{name}</h4>
            <h2><img src={`https://openweathermap.org/img/wn/${weather[0]?.icon}@2x.png`} alt="" /></h2>
            <h4 style={{}}>{main?.temp}</h4>
        </div>
        <h1>hello</h1>
      </Card>
    </Box>
  );
};

export default LeftCard;
