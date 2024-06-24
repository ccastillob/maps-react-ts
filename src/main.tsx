import React from "react";
import ReactDOM from "react-dom/client";

import { MapsApp } from "./MapsApp";

import mapboxgl from "mapbox-gl"; // or "const mapboxgl = require('mapbox-gl');"

mapboxgl.accessToken =
  "pk.eyJ1IjoiY3Jpc3NtYXBib3giLCJhIjoiY2x4czNkd2FnMTFsdjJsbXpwM3o0bHhpcyJ9.gVVYRgnR-4LHDN3PfXyuRw";

if (!navigator.geolocation) {
  alert("Tu navegador no tiene opción de Geolocation");
  throw new Error("Tu navegador no tiene opción de Geolocation");
}

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <MapsApp />
  </React.StrictMode>
);
