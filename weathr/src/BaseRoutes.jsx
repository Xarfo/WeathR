import React from "react";
import { Route, NavLink } from "react-router-dom";
import CurrentTemp from "./components/Pages/CurrentTemp/CurrentTemp.jsx";
import FiveDaysForecast from './components/Pages/FiveDaysForecast/FiveDaysForecast.jsx'


class BaseRoutes extends React.Component {
  
  render() {
    return (
      <>
      <div className='navBar'>        
        <NavLink to="/">
          Current Temperature
        </NavLink>
        <NavLink to="/5daysforcast">
         Five Days Forecast
        </NavLink>
      </div> 
      <Route
          exact
          path="/"
          component={CurrentTemp}
        />
        <Route
          exact
          path="/5daysforecast"
          component={FiveDaysForecast}
        />
      </>
    );
  }
};

export default BaseRoutes;