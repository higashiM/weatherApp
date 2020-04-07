import React from "react";
import styled from "styled-components";

import Stats from "./components/Stats";
import "./App.css";
import AppMap from "./components/Map";
import Axios from "axios";
import distance from "./components/distanceUtil";

import mapIcons from "./components/icons/js/icons.js";
import logo from "./components/vw-bus-clipart-1.png";

import apiKey from "./components/apiKey";

//hideAPIkey
//save function
//sortfunction
//highlighting temp

class App extends React.Component {
  state = {
    latlngArr: [],
    weathers: [],
    myLocation: {
      lng: -2.24,
      lat: 53.47,
    },
    setHome: false,
    isloading: true,
    apiKey: apiKey,
  };

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const latlng = {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        };
        this.setState({ myLocation: latlng });
        this.setLocation(this.state.myLocation);
      },
      (error) => {
        alert(
          "location not found defaulting home to NC HQ: lon: -2.24 lat: 53.47"
        );
        console.log(error);
        this.setLocation(this.state.myLocation);
      },
      { timeout: 5000 }
    );
  }

  setLocation = (newlatlng) => {
    this.fetchData(newlatlng, this.state.apiKey);
  };

  fetchData = (latlng, apiKey) => {
    const gettext = `https://api.openweathermap.org/data/2.5/weather?lat=${latlng.lat}&lon=${latlng.lng}&appid=${apiKey}`;
    //5 day forecast api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={your api key}
    Axios.get(gettext)
      .then((response) => {
        console.log(response.data);
        return this.setState((currentState) => {
          let dist = distance(
            latlng.lat,
            latlng.lng,
            currentState.myLocation.lat,
            currentState.myLocation.lng,
            "K"
          );

          dist = Math.floor(dist);
          response.data = {
            ...response.data,
            icon: mapIcons[currentState.weathers.length % 8],
            distance: dist,
            latlng: latlng,
          };
          return {
            weathers: [...currentState.weathers, response.data],
          };
        });
      })
      .catch((error) => console.log(error));
  };

  render() {
    const Title = styled.h1`
      font-size: 1.5em;
      text-align: center;
      color: violet;
    `;
    const Wrapper = styled.section`
      padding: 0.5em;
      background: pink;
    `;

    return (
      <main>
        <Wrapper>
          <Title>
            DAY TRIPPER
            <img src={logo} height="25" width="50" alt="vw van logo"></img>
          </Title>
        </Wrapper>

        <div className="App">
          <Stats
            weathers={this.state.weathers}
            isloading={this.state.isloading}
          />

          <AppMap
            setLocation={this.setLocation}
            weathers={this.state.weathers}
            handleLocationFound={this.handleLocationFound}
            setHome={this.state.setHome}
          />
        </div>
      </main>
    );
  }
}

export default App;
