import 'leaflet/dist/leaflet.css';
import leaflet from 'leaflet';
import React, {useRef,useEffect, useCallback} from 'react';
import PropTypes from 'prop-types';
import offersPropShape from '../../prop-validation/offers.prop';
import useMap from '../../hooks/use-map';
import {
  CITIES,
  URL_MARKER_DEAFULT,
  URL_MARKER_CURRENT
} from '../../const';

function Map (props) {
  const {currentCity, offers, selectedPoint} = props;
  const mapRef = useRef(null);
  const map = useMap(mapRef,CITIES[currentCity]);

  const defaultCustomIcon = leaflet.icon ({
    iconUrl: URL_MARKER_DEAFULT,
    iconSize: [27, 39],
    iconAnchor: [19, 39],
  });

  const currentCustomIcon = leaflet.icon ({
    iconUrl: URL_MARKER_CURRENT,
    iconSize: [27, 39],
    iconAnchor: [19, 39],
  });

  const addMarkersToLayer = useCallback((layerGroup,points) => {
    points.forEach ( (point) => {
      leaflet
        .marker (
          {
            lat: point.location.latitude,
            lng: point.location.longitude,
          },
          {
            icon: point.id === selectedPoint
              ? currentCustomIcon
              : defaultCustomIcon,
          },
        )
        .addTo (layerGroup);
    });
  },[currentCustomIcon,defaultCustomIcon,selectedPoint]);

  useEffect(() => {
    const layerGroup = leaflet.layerGroup();
    if (map) {
      layerGroup.addTo (map);
      map.flyTo(
        [
          CITIES[currentCity].latitude,
          CITIES[currentCity].longitude,
        ],
        CITIES[currentCity].zoom,
      );
      addMarkersToLayer(layerGroup,offers);
    }

    return () => layerGroup.clearLayers();
  }, [addMarkersToLayer,currentCity,map, offers, selectedPoint]);

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
  offers: PropTypes.arrayOf(offersPropShape).isRequired,
  selectedPoint: PropTypes.number,
  currentCity: PropTypes.string.isRequired,
};

export default Map;

