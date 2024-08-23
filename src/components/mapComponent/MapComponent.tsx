// import "mapbox-gl/dist/mapbox-gl.css";
import * as React from "react";
import Map, { Marker } from "react-map-gl";
import Pin from "./Pin";

interface MapProps {
  longitude: number;
  latitude: number;
  zoom?: number;
}



const MapComponent: React.FC<MapProps> = ({
  longitude,
  latitude,
  zoom = 1 ,
}) => {

  return (
    <Map
      mapboxAccessToken="pk.eyJ1IjoiaGVtYW50Yml6NHNhaW5pIiwiYSI6ImNsdnZ6ZTB4NzBhbmYyam9nZnltdm03a2QifQ.6aXaLjvxv3Dibc0ujaU1eA"
      mapLib={import("mapbox-gl")}
      initialViewState={{
        longitude,
        latitude,
        zoom,
        bearing: 0,
        pitch: 0
      }}
      mapStyle="mapbox://styles/mapbox/streets-v9"
      
      style={{ width: "100%", height: "100%", overflow: "hidden" }}
    >
      <Marker
        key={1}
        longitude={longitude}
        latitude={latitude}
        anchor="center"
      >
        <Pin/>
      </Marker>
    </Map>
  );
};

export default MapComponent;
