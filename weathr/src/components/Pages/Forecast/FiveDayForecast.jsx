import React from "react";
import Form from "./Form.jsx";
import Titles from "./Titles";
import ForecastList from "./ForecastList.jsx";

const API_KEY = "910e092423bb6a4d8eda2017888b3a8c";

class FiveDayForecast extends React.Component {
  state = {
    temperature: undefined,
    error: undefined,
    city: undefined,
    country: undefined,
  }

//   componentDidMount() {
//     this.getWeather('http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric');
//   }

getForecast = async (e) => {
  e.preventDefault();
  const city = e.target.elements.city.value;
  const country = e.target.elements.country.value;
  const api_call = await fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${city},${country}&appid=${API_KEY}&units=metric`);
  const data = await api_call.json();
  console.log(data);
  console.log(data.list[1].main.temp)

  if (city && country) {
    this.setState({
      temperature: [data.list[0].main.temp,data.list[1].main.temp, data.list[2].main.temp, data.list[3].main.temp, data.list[4].main.temp],
      city: data.city.name,
      country: data.city.country,
      error: ""
    });
  } else {
    this.setState({
      temperature: undefined,
      city: undefined,
      country: undefined,
      error: "Please enter the values."
    });
  }
}
  

  render() {
    return (
      <>
        <div className="wrapper">
          <div className="main">
            <div className="container">
              <div className="row">
                <div className="col-xs-5 title-container">
                  <Titles />
                </div>
                <div className="col-xs-7 form-container">
                  <Form getForecast={this.getForecast} />
                  <ForecastList 
                  temperatures={this.state.temperature} 
                  city={this.state.city}
                  country={this.state.country}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
};

export default FiveDayForecast;