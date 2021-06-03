import React from 'react';
import Main from '../main/main';
import PropTypes from 'prop-types';

function App(props) {
  const {numberPlaces,places} = props;
  return <Main numberPlaces={numberPlaces} places={places}/>;
}

export default App;

App.propTypes = {
  numberPlaces: PropTypes.number.isRequired,
  places: PropTypes.arrayOf (
    PropTypes.shape ({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    })).isRequired,
};
