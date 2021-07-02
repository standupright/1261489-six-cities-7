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
  const {numberOffers, offers, currentOffer, selectedPoint} = props;
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
    points.slice (0, numberOffers).forEach ( (point) => {
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

  const addCurrentMarkerToLayer = (layerGroup, point) => {
    leaflet
      .marker (
        {
          lat: point.location.latitude,
          lng: point.location.longitude,
        },
        {
          icon: currentCustomIcon,
        },
      )
      .addTo (layerGroup);
  };

  useEffect(() => {
    const layerGroup = leaflet.layerGroup();
    if (map) {
      layerGroup.addTo (map);
      addMarkersToLayer(layerGroup,offers);

      if (Object.keys(currentOffer).length !== 0) {
        addCurrentMarkerToLayer(layerGroup,currentOffer);
      }
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
  numberOffers: PropTypes.number.isRequired,
  offers: PropTypes.arrayOf(offersPropShape).isRequired,
  currentOffer: PropTypes.shape(offersPropShape).isRequired,
  selectedPoint: PropTypes.shape(offersPropShape).isRequired,
};

export default Map;

