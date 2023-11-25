import "./results.css";
// SHOW RESULTS
function Results({ city, clouds, temp, wind, sunrise, sunset, country, hour }) {
  return (
    <ul>
      <li>
        <h3>
          Forecast for city: <span>{city}</span>
        </h3>
      </li>
      <li>
        Clouds: <span> {clouds} %</span>
      </li>
      <li>
        Temperature: <span>{temp} *C</span>
      </li>
      <li>
        Wind: <span>{wind} km/h</span>
      </li>
      <li>
        Sunrise: <span>{sunrise}</span>
      </li>
      <li>
        Sunset: <span>{sunset}</span>
      </li>
      <li>
        <a
          href="https://stat.gov.pl/badania-statystyczne/sprawozdawczosc/intrastat/alfabetyczny-wykaz-krajow/"
          target="_blank"
          rel="noreferrer"
        >
          Country:
        </a>
        <span> {country}</span>
      </li>
      <li>
        <h5>
          Time reading <span>{hour}</span>
        </h5>
      </li>
    </ul>
  );
}

export default Results;
