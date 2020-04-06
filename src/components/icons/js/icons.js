import L from "leaflet";

import iconUrlOrange from "../img/marker-icon-2x-orange.png";
import shadowUrl from "../img/marker-shadow.png";
import iconUrlViolet from "../img/marker-icon-2x-violet.png";

const orangeIcon = new L.Icon({
  iconUrl: iconUrlOrange,
  shadowUrl: shadowUrl,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

const violetIcon = new L.Icon({
  iconUrl: iconUrlViolet,
  shadowUrl: shadowUrl,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

export { orangeIcon, violetIcon };
