import leaflet from 'leaflet';
import useMap from '../hooks/use-map';
import 'leaflet/dist/leaflet.css';
import { useEffect, useRef } from 'react';
import { URL_MARKER_CURRENT, URL_MARKER_DEFAULT } from '../const';
import { Offers } from '../../types/offer';

type Props = {
  offers: Offers;
}

function Map({offers}: Props) {
  const mapRef = useRef<HTMLDivElement>(null);
  const map = useMap(mapRef, offers);

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
      offers.forEach((offer) => {
        leaflet
          .marker({
            lat: offer.location.latitude,
            lng: offer.location.longitude
          }, {
            icon: defaultCustomIcon,
          })
          .addTo(map);
      });
    }
  }, [map, offers, defaultCustomIcon]);

  return (
    <section className="cities__map map" ref={mapRef} />

  );
}

export default Map;
