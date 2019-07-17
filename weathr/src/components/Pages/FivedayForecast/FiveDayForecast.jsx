import React, { Component } from 'react';
import FiveDayDisplay from  './FiveDayDisplay.jsx'


class FiveDayForecast  extends Component {
    constructor(props) {
        super(props);
        this.state = {
            forecasts: []
          }
    }

    componentDidMount() {
        this.getForecast('api.openweathermap.org/data/2.5/forecast?id=524901&APPID=1111111111');
      }


    
      getForecast = URL => {
        
        fetch(URL)
          .then(res => {
            return res.json();
          })
          .then(data => {
            this.setState({ forecasts: data.results });
          })
          .catch(err => {
            throw new Error(err);
          });
      };
    render() { 
        return (  
            <>
           <FiveDayForecast 
            getForecast = {this.getForecast}
            fivedayforecast = {this.state.fivedayforecast}
            />
            </>
        );
    }
}

 
export default FiveDayForecast;