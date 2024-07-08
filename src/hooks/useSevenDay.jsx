import  { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_KEY } from "../utils/constants";
import { add7DayForcast } from "../utils/citySlice";

const useSevenDay = () => {
  const dispatch = useDispatch();
  const cityInfo = useSelector((store) => store.city.cityInfo);
  const lon = cityInfo?.coord?.lon;
  const lat = cityInfo?.coord?.lat;

  const getSevenDayForcast = async () => {
    const data = fetch(`https://api.openweathermap.org/data/2.5/forecast?units=metric&lat=${lat}&lon=${lon}&appid=${API_KEY}`)
    const json = (await data).json()
    const info = await json
    
    // console.log(info);
    
    dispatch(add7DayForcast(info))
    
  };

  useEffect(() => {
    getSevenDayForcast();
  }, [cityInfo, lat, lon]);
};

export default useSevenDay;
