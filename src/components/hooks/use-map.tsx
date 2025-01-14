import leaflet from 'leaflet';
import { Offers } from '../../types/offer';
import { useEffect, useRef, useState } from 'react';

function useMap(mapRef:React.RefObject<HTMLDivElement>, offers: Offers) {
  const [map, setMap] = useState<leaflet.Map | null>(null);
  const isRenderedRef = useRef(false);


  useEffect(()=> {
    if (map !== null && offers.length){
      map.setView({
        lat: offers[0].city.location.latitude,
        lng: offers[0].city.location.longitude,

      },offers[0].city.location.zoom
      );
    }
  }, [offers?.[0].city]);


  useEffect(() => {
    if (mapRef.current !== null && !isRenderedRef.current) {
      const instance = leaflet.map(mapRef.current, {
        center: {
          lat: offers[0].city.location.latitude,
          lng: offers[0].city.location.longitude,
        },
        zoom: offers[0].city.location.zoom,
      });
      // leaflet.clearLayers();

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
  }, [mapRef, offers]);

  return map;
}

export default useMap;
