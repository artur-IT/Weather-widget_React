import React, { Component } from "react";
import ReactDOM from "react-dom/client";
import Results from "./Results";

class Weather extends Component {
  state = {
    active: false,
    hour: 0,
    city: 0,
    clouds: 0,
    temp: 0,
    wind: 0,
    sunrise: 0,
    sunset: 0,
    country: 0,
  };

  // INPUT FIELD - empty or wrong city handler
  inputHandler = () => {
    const error = document.createElement("p");
    error.textContent = "Bad city name, try again!";
    root.appendChild(error);
    setTimeout(() => (error.textContent = ""), 3000);
  };

  // INITIALIZE getWeather() and CLEAR INPUT FIELD
  handleButton = () => {
    this.state.city ? this.getWeather() : this.inputHandler();
    document.getElementById("search_city").value = "";
  };

  // GET CITY from INPUT FIELD
  getCity = () => {
    const city = document.getElementById("search_city");
    this.setState({ city: city.value });
    city.value !== 0 && this.setState({ active: false });
  };

  // GET WEATHER DATA from OPENWEATHERMAP
  getWeather = () => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${this.state.city},lang=pl&units=metric&appid=1b75f47063fbd0b335b1b1ddb0ee4435`;
    fetch(url)
      .then((response) => response.json())
      .then((results) => {
        if (results.cod === "404") {
          results.cod = "404" && this.inputHandler();
          this.setState({ active: false });
        } else {
          const weatherTime = new Date(results.dt * 1000).toLocaleString();
          const sunriseTime = new Date(results.sys.sunrise * 1000).toLocaleTimeString();
          const sunsetTime = new Date(results.sys.sunset * 1000).toLocaleTimeString();
          this.setState({
            active: true,
            hour: weatherTime,
            city: results.name,
            clouds: results.clouds.all,
            temp: results.main.temp.toFixed(1),
            wind: results.wind.speed.toFixed(1),
            sunrise: sunriseTime,
            sunset: sunsetTime,
            country: results.sys.country,
          });
        }
      });
    this.setState({ active: false });
  };

  render() {
    const { hour, city, clouds, temp, wind, sunrise, sunset, country } = this.state;
    return (
      <>
        <h2>
          Simple Weather <sup>[React]</sup>
        </h2>
        <input type="text" placeholder="enter the city" id="search_city" onChange={this.getCity} />
        <button onClick={this.handleButton}>Search</button>
        {this.state.active === true ? (
          <Results hour={hour} city={city} clouds={clouds} temp={temp} wind={wind} sunrise={sunrise} sunset={sunset} country={country} />
        ) : null}
      </>
    );
  }
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Weather />);
