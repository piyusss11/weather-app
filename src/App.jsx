import NavBar from "./components/NavBar";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import HomePage from "./pages/HomePage"


function App() {
  return (
    <>
      <Provider store={appStore}>
        <HomePage/>
      </Provider>
    </>
  );
}

export default App;
