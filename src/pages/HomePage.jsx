import NavBar from "../components/NavBar";
import useWeather from "../hooks/useWeather";
import MainContainer from "../components/MainContainer";
import useSevenDay from "../hooks/useSevenDay";
import { useSelector } from "react-redux";
// import ErrorComponent from "./ErrorComponent";
import ErrorCity from "./ErrorCity";

const HomePage = () => {
  const select = useSelector((store) => store.city.cityInfo);
  const err = select?.cod;
  useWeather();
  useSevenDay();
  return (
    <div>
      <NavBar />
      {err === "404" || err === "400" ? <ErrorCity /> : <MainContainer />}
    </div>
  );
};

export default HomePage;
