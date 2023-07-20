import "./results.css";
// SHOW RESULTS
function Results(props) {
  return (
    <ul>
      <li>
        <h3>
          Prognoza dla miasta <span>{props.city}</span>
        </h3>
      </li>
      <li>
        Zachmurzenie: <span> {props.clouds} %</span>
      </li>
      <li>
        Temperatura: <span>{props.temp} *C</span>
      </li>
      <li>
        Wiatr: <span>{props.wind} km/h</span>
      </li>
      <li>
        Wschód słońca: <span>{props.sunrise}</span>
      </li>
      <li>
        Zachód słońca: <span>{props.sunset}</span>
      </li>
      <li>
        <a
          href="https://stat.gov.pl/badania-statystyczne/sprawozdawczosc/intrastat/alfabetyczny-wykaz-krajow/"
          target="_blank"
          rel="noreferrer"
        >
          Kraj:
        </a>
        <span> {props.country}</span>
      </li>
      <li>
        <h5>
          Odczyt z godziny <span>{props.hour}</span>
        </h5>
      </li>
    </ul>
  );
}

export default Results;
