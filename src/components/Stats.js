import React, { Component } from "react";

class Stats extends Component {
  state = {
    sortBy: "distance",
    sortAsc: true,
  };

  handleSortClick = (newSortBy) => {
    this.setState((currentState) => {
      const newsortAsc = !currentState.sortAsc;
      return { sortBy: newSortBy, sortAsc: newsortAsc };
    });
  };
  render() {
    const { weathers } = this.props;
    const { sortBy, sortAsc } = this.state;

    return (
      <main>
        <div className="statsGrid">
          <span className="statsGrid__Header" name="icon">
            <button className="button">pin</button>
          </span>
          <span className="statsGrid__Header" name="dist">
            <button
              className="button"
              onClick={() => this.handleSortClick("distance")}
              name="distance"
            >
              distance⇅
            </button>
          </span>
          <span className="statsGrid__Header" name="where">
            <button className="button" name="distance">
              location
            </button>
          </span>
          <span className="statsGrid__Header" name="weather">
            <button className="button">weather</button>
          </span>
          <span className="statsGrid__Header" name="weather desc">
            <button className="button">desc</button>
          </span>

          <span className="statsGrid__Header" name="temp">
            <button
              className="button"
              onClick={() => this.handleSortClick("temp")}
              name="distance"
            >
              temp⇅
            </button>
          </span>

          <span className="statsGrid__Header" name="tempfeels">
            <button
              className="button"
              onClick={() => this.handleSortClick("feels_like")}
              name="distance"
            >
              feels⇅
            </button>
          </span>

          <span className="statsGrid__Header" name="tempmin">
            <button
              className="button"
              onClick={() => this.handleSortClick("temp_min")}
              name="distance"
            >
              min⇅
            </button>
          </span>

          <span className="statsGrid__Header" name="tempmax">
            <button
              className="button"
              onClick={() => this.handleSortClick("temp_max")}
              name="distance"
            >
              max⇅
            </button>
          </span>

          <span className="statsGrid__Header" name="pressure">
            <button
              className="button"
              onClick={() => this.handleSortClick("pressure")}
              name="distance"
            >
              pressure⇅
            </button>
          </span>
          <span className="statsGrid__Header" name="humidity">
            <button
              className="button"
              onClick={() => this.handleSortClick("humidity")}
              name="distance"
            >
              humidity⇅
            </button>
          </span>
          <span className="statsGrid__Header" name="wind_speed">
            <button
              className="button"
              onClick={() => this.handleSortClick("speed")}
              name="distance"
            >
              wind⇅
            </button>
          </span>

          {weathers
            .sort((a, b) => {
              if (sortBy === "distance") {
                a = a[sortBy];
                b = b[sortBy];
              } else if (sortBy === "speed") {
                a = a.wind[sortBy];
                b = b.wind[sortBy];
              } else {
                a = a.main[sortBy];
                b = b.main[sortBy];
              }

              return sortAsc ? a - b : b - a;
            })
            .map((weathers) => {
              return (
                <>
                  <span className="statsGrid__Stat" name="icon">
                    <img
                      src={weathers.icon.url}
                      height="30"
                      width="20"
                      alt="pin"
                    ></img>
                  </span>
                  <span className="statsGrid__Stat" name="dist">
                    {weathers.distance === 0
                      ? "Home"
                      : weathers.distance + " km"}
                  </span>
                  <span className="statsGrid__Stat" name="where">
                    {weathers.name},{weathers.sys.country}
                  </span>
                  <span className="statsGrid__Stat" name="weather">
                    <img
                      src={`http://openweathermap.org/img/wn/${weathers.weather[0].icon}@2x.png`}
                      height="50"
                      width="50"
                      alt="weather desc"
                    ></img>
                  </span>
                  <span className="statsGrid__Stat" name="weather desc">
                    {weathers.weather[0].description}{" "}
                  </span>

                  <span className="statsGrid__Stat" name="temp">
                    {(weathers.main.temp - 273.15).toFixed(1)}°C
                  </span>

                  <span className="statsGrid__Stat" name="tempfeels">
                    {(weathers.main.feels_like - 273.15).toFixed(1)}°C
                  </span>

                  <span className="statsGrid__Stat" name="tempmin">
                    {(weathers.main.temp_min - 273.15).toFixed(1)}°C
                  </span>

                  <span className="statsGrid__Stat" name="tempmax">
                    {(weathers.main.temp_max - 273.15).toFixed(1)}°C
                  </span>
                  <span className="statsGrid__Stat" name="pressure">
                    {weathers.main.pressure} bar
                  </span>
                  <span className="statsGrid__Stat" name="humidity">
                    {weathers.main.humidity}%
                  </span>
                  <span className="statsGrid__Stat" name="windspeed">
                    {(weathers.wind.speed * 1.6).toFixed(1)}kph
                  </span>
                </>
              );
            })}
        </div>
      </main>
    );
  }
}

export default Stats;
