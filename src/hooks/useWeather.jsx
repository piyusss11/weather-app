import  { useEffect } from "react";
import { API_KEY } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addCityInfo } from "../utils/citySlice";

const useWeather = () => {
  const city = useSelector((store) => store.city.currentCity);
  const dispatch = useDispatch()
  const getWeather = async () => {
    const data = fetch(
      "https://api.openweathermap.org/data/2.5/weather?units=metric&q=" +
        city +
        "&appid=" +
        API_KEY
    );
    const json = (await data).json()
    const info = await json
    // console.log(info);
    
    dispatch(addCityInfo(info ))
  };
  useEffect(() => {
    getWeather();
  }, [city]);
};

export default useWeather;
