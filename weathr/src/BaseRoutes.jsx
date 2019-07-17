
// import CurrentTemp from './components/Pages/CurrentTemp';
// import FiveDayForecast from './components/Pages/FivedayForecast/FiveDayForecast'


import React from "react";

import CurrentTemp from "./components/Pages/CurrentTemp/CurrentTemp.jsx";



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