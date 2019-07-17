
// import CurrentTemp from './components/Pages/CurrentTemp';
// import FiveDayForecast from './components/Pages/FivedayForecast/FiveDayForecast'


import React from "react";
// import Form from "./components/Pages/CurrentTemp/Form.jsx/index.js";
// import Titles from "./components/Pages/CurrentTemp/Titles";
// import Weather from "./components/Pages/CurrentTemp/CurrentTempDisplay";
import CurrentTemp from "./components/Pages/CurrentTemp/CurrentTemp.jsx";

const API_KEY = "910e092423bb6a4d8eda2017888b3a8c";

class BaseRoutes extends React.Component {
  
  render() {
    return (
      <>
        <CurrentTemp />
      </>
    );
  }
};

export default BaseRoutes;