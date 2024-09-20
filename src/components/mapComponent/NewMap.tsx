import React, { useEffect, useRef } from 'react';
import 'ol/ol.css'; // OpenLayers CSS
import { Map, View } from 'ol';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import { fromLonLat } from 'ol/proj';
import VectorLayer from 'ol/layer/Vector';
import VectorSource from 'ol/source/Vector';
import { Feature } from 'ol';
import Point from 'ol/geom/Point';
import Icon from 'ol/style/Icon';
import Style from 'ol/style/Style';
import { defaults as defaultInteractions } from 'ol/interaction';

interface NewMapProps {
  center: [number, number]; // Longitude and Latitude
  zoom?: number; // Optional zoom level
  pinCoordinates: [number, number]; // Coordinates for the pin
}

const MyMap: React.FC<NewMapProps> = ({ center, zoom = 10, pinCoordinates }) => {
  const mapElement = useRef<HTMLDivElement | null>(null);
  const mapRef = useRef<Map | null>(null);

  useEffect(() => {
    if (mapRef.current === null && mapElement.current) {
      // Create the map
      const vectorLayer = new VectorLayer({
        source: new VectorSource({
          features: [
            new Feature({
              geometry: new Point(fromLonLat(pinCoordinates)), // Pin location
            }),
          ],
        }),
        style: new Style({
          image: new Icon({
            anchor: [0.5, 1], // Pin anchor to position the icon properly
            src: 'https://openlayers.org/en/latest/examples/data/icon.png', // URL to the marker image
            scale: 1, // Adjust the scale of the icon (optional)
          }),
        }),
      });

      mapRef.current = new Map({
        target: mapElement.current,
        layers: [
          new TileLayer({
            source: new OSM(),
          }),
          vectorLayer, // Add the pin layer
        ],
        view: new View({
          center: fromLonLat(center),
          zoom: zoom,
        }),
        interactions: defaultInteractions(), // Enables default map interactions (pan, zoom, etc.)
      });
    } else {
      // Update the map's view center and zoom
      mapRef.current?.getView().setCenter(fromLonLat(center));
      mapRef.current?.getView().setZoom(zoom);
    }
  }, [center, zoom, pinCoordinates]);

  return <div ref={mapElement} style={{ width: '100%', height: '500px' }} />;
};

export default MyMap;
