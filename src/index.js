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

  handleButton = () => {
    const city = document.getElementById("search_city");
    this.state.city ? this.getWeather() : alert("wpisz miasto");
    city.value = "";
  };

  getCity = () => {
    const city = document.getElementById("search_city");
    this.setState({ city: city.value });
    city.value !== 0 && this.setState({ active: false });
  };

  getWeather = () => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${this.state.city},lang=pl&units=metric&appid=1b75f47063fbd0b335b1b1ddb0ee4435`;
    fetch(url)
      .then((response) => response.json())
      .then((results) => {
        if (results.cod === "404") {
          results.cod = "404" && alert("nie ma takiego miasta!");
          this.setState({ active: false });
        } else {
          const wTime = results.dt + 7200;
          const sunrTime = results.sys.sunrise;
          const sunsTime = results.sys.sunset;
          const weatherTime = new Date(wTime * 1000).toGMTString();
          const sunriseTime = new Date(sunrTime * 1000).toLocaleTimeString();
          const sunsetTime = new Date(sunsTime * 1000).toLocaleTimeString();
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
        <h2>Simple Weather (React)</h2>
        <input type="text" placeholder="wpisz miasto" id="search_city" onChange={this.getCity} />
        <button onClick={this.handleButton}>Szukaj</button>
        {this.state.active === true ? (
          <Results hour={hour} city={city} clouds={clouds} temp={temp} wind={wind} sunrise={sunrise} sunset={sunset} country={country} />
        ) : null}
      </>
    );
  }
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Weather />);
