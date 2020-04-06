import React from "react";
import Stats from "./components/Stats";
import "./App.css";
import EventsExample from "./components/Map";
import Axios from "axios";

import iconUrlOrange from "./components/icons/img/marker-icon-2x-orange.png";

import iconUrlViolet from "./components/icons/img/marker-icon-2x-violet.png";
class App extends React.Component {
  state = {
    latlng1: {
      lat: 51.505,
      lng: -0.09,
    },
    latlng2: {
      lat: 51.505,
      lng: -0.09,
    },
    isloading: true,
    apiKey: "81b98969469de05047b6e279ed69877d",
  };

  componentDidMount() {
    console.log("mounted!");
  }

  setLocation = (latlng1, latlng2) => {
    this.setState({
      hasLocation: true,
      latlng1: latlng1,
      latlng2: latlng2,
    });
    console.log(this.state);
    this.fetchData(latlng1, latlng2, this.state.apiKey);
  };

  fetchData = (latlng1, latlng2, apiKey) => {
    const gettext1 = `https://api.openweathermap.org/data/2.5/weather?lat=${latlng2.lat}&lon=${latlng2.lng}&appid=${apiKey}`;
    const gettext2 = `https://api.openweathermap.org/data/2.5/weather?lat=${latlng1.lat}&lon=${latlng2.lng}&appid=${apiKey}`;
    //5 day forecast api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={your api key}
    Promise.all([Axios.get(gettext1), Axios.get(gettext2)])
      .then(([response1, response2]) => {
        console.log("fdata", response1, response2);
        return this.setState({
          weathers1: response1.data,
          weathers2: response2.data,
          isloading: false,
        });
      })
      .catch((error) => console.log(error));
  };

  render() {
    return (
      <div className="App">
        <h1>The Weather</h1>

        <img src={iconUrlViolet}></img>
        <Stats
          weathers={this.state.weathers1}
          isloading={this.state.isloading}
        />
        <img src={iconUrlOrange}></img>
        <Stats
          weathers={this.state.weathers2}
          isloading={this.state.isloading}
        />
        <EventsExample setLocation={this.setLocation} />
      </div>
    );
  }
}

export default App;
