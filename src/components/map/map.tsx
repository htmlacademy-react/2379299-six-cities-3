import leaflet from 'leaflet';
import useMap from '../hooks/use-map';
import 'leaflet/dist/leaflet.css';
import { useEffect, useRef } from 'react';
import { URL_MARKER_CURRENT, URL_MARKER_DEFAULT } from '../const';
import { Offers } from '../../types/offer';

type Props = {
  currentOffers: Offers;
  activeOffer?: string;
}

function Map({currentOffers, activeOffer}: Props) {
  const mapRef = useRef<HTMLDivElement>(null);
  const map = useMap(mapRef, currentOffers);
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
      currentOffers.forEach((offer) => {
        leaflet
          .marker({
            lat: offer.location.latitude,
            lng: offer.location.longitude
          }, {
            icon: offer.id === activeOffer ? currentCustomIcon : defaultCustomIcon ,
          })
          .addTo(map);
      });
    }
  }, [map, currentOffers, defaultCustomIcon, activeOffer, currentCustomIcon]);

  return (
    <section className="offer__map map" ref={mapRef} />

  );
}

export default Map;
