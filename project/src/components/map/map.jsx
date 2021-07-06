import 'leaflet/dist/leaflet.css';
import leaflet from 'leaflet';
import React, {useRef,useEffect} from 'react';
import PropTypes from 'prop-types';
import offersPropShape from '../../prop-validation/offers.prop';
import useMap from '../../hooks/use-map';
import {
  DEFAULT_CITY,
  URL_MARKER_DEAFULT,
  URL_MARKER_CURRENT
} from '../../const';

function Map (props) {
  const {offers, selectedPoint} = props;
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

  const addMarkersToLayer = (layerGroup,points) => {
    points.forEach ( (point) => {
      leaflet
        .marker (
          {
            lat: point.location.latitude,
            lng: point.location.longitude,
          },
          {
            icon: point.id === selectedPoint.id
              ? currentCustomIcon
              : defaultCustomIcon,
          },
        )
        .addTo (layerGroup);
    });
  };

  useEffect(() => {
    const layerGroup = leaflet.layerGroup();
    if (map) {
      layerGroup.addTo (map);
      addMarkersToLayer(layerGroup,offers);
    }

    return () => layerGroup.clearLayers();
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

Map.defaultProps = {
  currentOffer: {},
  selectedPoint: {},
};

Map.propTypes = {
  offers: PropTypes.arrayOf(offersPropShape).isRequired,
  selectedPoint: PropTypes.shape(offersPropShape).isRequired,
};

export default Map;

