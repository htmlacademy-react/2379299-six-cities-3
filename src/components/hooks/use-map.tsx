import {useEffect, useState, useRef} from 'react';
import leaflet from 'leaflet';
import { Offers } from '../../types/offer';

function useMap(mapRef, offers: Offers) {
  const [map, setMap] = useState(null);
  const isRenderedRef = useRef(false);

  useEffect(() => {
    if (mapRef.current !== null && !isRenderedRef.current) {
      const instance = leaflet.map(mapRef.current, {
        center: {
          lat: offers[0].city.location.latitude,
          lng: offers[0].city.location.longitude,
        },
        zoom: offers[0].city.location.zoom,
      });

      leaflet
        .tileLayer(
          'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',
          {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
          },
        )
        .addTo(instance);

      setMap(instance);
      isRenderedRef.current = true;
    }
  }, [mapRef, offers[0].city]);

  return map;
}

export default useMap;
