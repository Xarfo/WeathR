import React from "react";
import Form from "./Form.jsx";
import Titles from "./Titles";
import CurrentTempDisplay from "./CurrentTempDisplay.jsx";

const API_KEY = "910e092423bb6a4d8eda2017888b3a8c";

class CurrentTemp extends React.Component {
  state = {
    temperature: undefined,
    error: undefined,
    city: undefined,
    country: undefined,
  }

//   componentDidMount() {
//     this.getWeather('http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric');
//   }

getWeather = async (e) => {
  e.preventDefault();
  const city = e.target.elements.city.value;
  const country = e.target.elements.country.value;
  const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`);
  const data = await api_call.json();
  if (city && country) {
    this.setState({
      temperature: data.main.temp,
      city: data.name,
      country: data.sys.country,
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
                  <Form getWeather={this.getWeather} />
                  <CurrentTempDisplay 
                    temperature={this.state.temperature} 
                    city={this.state.city}
                    country={this.state.country}
                    error={this.state.error}
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

export default CurrentTemp;