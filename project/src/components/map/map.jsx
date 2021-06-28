import 'leaflet/dist/leaflet.css';
import leaflet from 'leaflet';
import React, {useRef,useEffect} from 'react';
import PropTypes from 'prop-types';
import offersPropShape from '../../prop-validation/offers.prop';
import useMap from '../../hooks/useMap';
import {
  DEFAULT_CITY,
  URL_MARKER_DEAFULT,
  URL_MARKER_CURRENT
} from '../../const';

function Map (props) {
  const {numberOffers, offers, selectedPoint} = props;
  const mapRef = useRef(null);
  const map = useMap(mapRef,DEFAULT_CITY);

  const defaultCustomIcon = leaflet.icon ({
    iconUrl: URL_MARKER_DEAFULT,
    iconSize: [30, 30],
    iconAnchor: [15, 30],
  });

  const currentCustomIcon = leaflet.icon ({
    iconUrl: URL_MARKER_CURRENT,
    iconSize: [30, 30],
    iconAnchor: [15, 30],
  });

  useEffect(() => {
    if (map) {
      offers
        .slice(0,numberOffers)
        .forEach((point) => {
          leaflet
            .marker({
              lat: point.location.latitude,
              lng: point.location.longitude,
            }, {
              icon: (point.id === selectedPoint.id)
                ? currentCustomIcon
                : defaultCustomIcon,
            })
            .addTo(map);
        });
    }
  }, [map, offers, selectedPoint]);

  return (
    <div
      id="map"
      style={{height: '100%'}}
      ref={mapRef}
    >
    </div>
  );
}


Map.propTypes = {
  numberOffers: PropTypes.number.isRequired,
  offers: PropTypes.arrayOf(offersPropShape).isRequired,
  selectedPoint: PropTypes.shape(offersPropShape).isRequired,
};

export default Map;

