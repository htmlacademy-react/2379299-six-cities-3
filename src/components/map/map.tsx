
import leaflet from 'leaflet';
import useMap from '../hooks/use-map';

import { useEffect, useRef } from 'react';
import { URL_MARKER_CURRENT, URL_MARKER_DEFAULT } from '../const';
import { Offers } from '../../types/offer';

type Props = {
  offers: Offers;
}

function Map({offers}: Props) {
  const mapRef = useRef(null);
  const map = useMap(mapRef, offers);


  const defaultCustomIcon = leaflet.icon({
    iconUrl: URL_MARKER_DEFAULT,
    iconSize: [40, 40],
    iconAnchor: [20, 40],
  });

  const currentCustomIcon = leaflet.icon({
    iconUrl: URL_MARKER_CURRENT,
    iconSize: [40, 40],
    iconAnchor: [20, 40],
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
  }, [map, offers]);

  return (
    <div
      ref={mapRef}
      style={{height: '500px'}}
    >
    </div>
  );
}

export default Map;
