import React, { Component } from "react";

class Stats extends Component {
  render() {
    console.log("stats", this.props);
    const { weathers, isloading } = this.props;

    if (isloading) return <p>loading</p>;
    else
      return (
        <main>
          {console.log("weather", weathers.weather[0])}
          <ul>
            <li>Where - {weathers.name}</li>
            <li>Weather - {weathers.weather[0].main}</li>
            <li>Weather Desc- {weathers.weather[0].description}</li>

            <li>Temp - {(weathers.main.temp - 273.15).toFixed(1)}°C</li>
            <li>
              {" "}
              feels_like - {(weathers.main.feels_like - 273.15).toFixed(1)}°C
            </li>
            <li>
              {" "}
              temp_min - {(weathers.main.temp_min - 273.15).toFixed(1)}°C
            </li>
            <li>
              {" "}
              temp_max - {(weathers.main.temp_max - 273.15).toFixed(1)}°C
            </li>
            <img
            /*      src={book.volumeInfo.imageLinks.smallThumbnail}
                  alt="thumbnail" */
            />
          </ul>
        </main>
      );
  }

  componentDidMount() {}
}
export default Stats;
