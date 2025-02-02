import leaflet from 'leaflet';
import { useEffect, useRef, useState } from 'react';
import { SetupForMap } from '../../types/setup-for-map';

function useMap(mapRef:React.RefObject<HTMLDivElement>, setupForMap: SetupForMap |undefined) {
  const [map, setMap] = useState<leaflet.Map | null>(null);
  const isRenderedRef = useRef(false);

  useEffect(()=> {
    if (map !== null && setupForMap){
      map.setView({
        lat: setupForMap.lat,
        lng: setupForMap.long,

      },setupForMap.zoom,
      );
    }
  }, [setupForMap, map]);


  useEffect(() => {
    if (mapRef.current !== null && !isRenderedRef.current && setupForMap) {
      const instance = leaflet.map(mapRef.current, {
        center: {
          lat: setupForMap.lat,
          lng: setupForMap.long,
        },
        zoom: setupForMap.zoom,
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
  }, [mapRef, setupForMap]);

  return map;
}

export default useMap;
