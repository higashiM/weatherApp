import React, { createRef, Component } from "react";

import { Map, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
const { orangeIcon, violetIcon } = require("../components/icons/js/icons");

export default class EventsExample extends Component {
  state = {
    hasLocation: false,
    latlng1: {
      lat: 51.505,
      lng: -0.09,
    },
    latlng2: {
      lat: 51.505,
      lng: -0.1,
    },
    clickedOnce: false,
  };

  mapRef = createRef();

  handleClick = (event) => {
    const map = this.mapRef.current;

    if (this.state.clickedOnce) {
      this.props.setLocation(event.latlng, this.state.latlng2);
      this.setState({
        clickedOnce: false,
        hasLocation: true,
        latlng1: event.latlng,
      });
    } else this.setState({ clickedOnce: true, latlng2: event.latlng });

    if (map != null) {
      map.leafletElement.locate();
    }
  };

  /*   handleLocationFound = (e: Object) => {
    this.setState({
      hasLocation: true,
      latlng: e.latlng,
    });
    console.log(this.state);
  }; */

  render() {
    console.log(violetIcon);
    const marker = this.state.hasLocation ? (
      <Marker position={this.state.latlng1} icon={orangeIcon}>
        <Popup>You are here</Popup>
      </Marker>
    ) : null;

    const altmarker = (
      <Marker icon={violetIcon} position={this.state.latlng2}>
        <Popup>You are here</Popup>
      </Marker>
    );

    return (
      <Map
        center={{
          lat: (this.state.latlng1.lat + this.state.latlng2.lat) / 2,
          lng: (this.state.latlng1.lng + this.state.latlng2.lng) / 2,
        }}
        length={4}
        onClick={this.handleClick}
        onLocationfound={this.handleLocationFound}
        ref={this.mapRef}
        zoom={6}
      >
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {marker}
        {altmarker}
      </Map>
    );
  }
}
