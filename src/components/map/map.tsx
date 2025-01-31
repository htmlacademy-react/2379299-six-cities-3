import leaflet from 'leaflet';
import useMap from '../hooks/use-map';
import 'leaflet/dist/leaflet.css';
import { memo, useEffect, useRef } from 'react';
import { URL_MARKER_CURRENT, URL_MARKER_DEFAULT } from '../const';
import { PointForMap } from '../../types/point-for-map';
import { SetupForMap } from '../../types/setup-for-map';


type Props = {
  pointsForMap: PointForMap[];
  activeOffer?: string;
  setupForMap: SetupForMap | undefined;
  className: string;
}

function MapRaw({pointsForMap, className, activeOffer, setupForMap}: Props) {

  const mapRef = useRef<HTMLDivElement>(null);
  const map = useMap(mapRef, setupForMap);
  const defaultCustomIcon = leaflet.icon({
    iconUrl: URL_MARKER_DEFAULT,
    iconSize: [27, 39],
    iconAnchor: [13.5, 39],
  });

  const currentCustomIcon = leaflet.icon({
    iconUrl: URL_MARKER_CURRENT,
    iconSize: [27, 39],
    iconAnchor: [13.5, 39],
  });

  useEffect(() => {
    if (map) {
      pointsForMap.forEach((offer) => {
        leaflet
          .marker({
            lat: offer.lat,
            lng: offer.long
          }, {
            icon: offer.id === activeOffer ? currentCustomIcon : defaultCustomIcon ,
          })
          .addTo(map);
      });
    }
  }, [map, pointsForMap, defaultCustomIcon, activeOffer, currentCustomIcon]);

  return (
    <section className={className} ref={mapRef} />
  );
}
const Map = memo(MapRaw);
export default Map;
