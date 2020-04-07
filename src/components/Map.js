import React, { createRef, Component } from "react";

import { Map, TileLayer, Marker } from "react-leaflet";

export default class AppMap extends Component {
  state = {};

  mapRef = createRef();

  handleClick = (event) => {
    this.props.setLocation(event.latlng);

    const map = this.mapRef.current;

    if (map != null) {
      map.leafletElement.locate();
    }
  };

  render() {
    return (
      <Map
        center={{
          lat: 53.825564,
          lng: -2.421976,
        }}
        length={4}
        onClick={this.handleClick}
        ref={this.mapRef}
        zoom={6}
      >
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {this.props.weathers.map((weather) => {
          return (
            <Marker position={weather.latlng} icon={weather.icon.obj}></Marker>
          );
        })}
      </Map>
    );
  }
}
