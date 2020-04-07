import L from "leaflet";

import {
  iconUrlOrange,
  shadowUrl,
  iconUrlViolet,
  iconUrlblack,
  iconUrlblue,
  iconUrlgold,
  iconUrlgrey,
  iconUrlred,
  iconUrlyellow,
} from "../img/index.js";

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

const blackIcon = new L.Icon({
  iconUrl: iconUrlblack,
  shadowUrl: shadowUrl,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

const blueIcon = new L.Icon({
  iconUrl: iconUrlblue,
  shadowUrl: shadowUrl,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

const goldIcon = new L.Icon({
  iconUrl: iconUrlgold,
  shadowUrl: shadowUrl,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

const redIcon = new L.Icon({
  iconUrl: iconUrlred,
  shadowUrl: shadowUrl,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

const yellowIcon = new L.Icon({
  iconUrl: iconUrlyellow,
  shadowUrl: shadowUrl,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

const greyIcon = new L.Icon({
  iconUrl: iconUrlgrey,
  shadowUrl: shadowUrl,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

const mapIcons = {
  0: { obj: goldIcon, url: iconUrlgold },
  1: { obj: violetIcon, url: iconUrlViolet },
  2: { obj: blackIcon, url: iconUrlblack },
  3: { obj: blueIcon, url: iconUrlblue },
  4: { obj: yellowIcon, url: iconUrlyellow },
  5: { obj: redIcon, url: iconUrlred },
  6: { obj: greyIcon, url: iconUrlgrey },
  7: { obj: orangeIcon, url: iconUrlOrange },
};

export default mapIcons;
