import React from "react";
import { Route, NavLink } from "react-router-dom";
import CurrentTemp from "./components/Pages/CurrentTemp/CurrentTemp.jsx";
import FiveDayForecast from "./components/Pages/Forecast/FiveDayForecast.jsx";


class BaseRoutes extends React.Component {
  
  render() {
    return (
      <>
      <div className='navBar'>        
        <NavLink to="/">
          <h1>Current Temperature</h1>
        </NavLink>
        <NavLink to="/forecast">
         <h1>Forecast</h1>
        </NavLink>
      </div> 
      <Route
          exact
          path="/"
          component={CurrentTemp}
        />
        <Route
          exact
          path="/forecast"
          component={FiveDayForecast}
        />
      </>
    );
  }
};

export default BaseRoutes;