import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {ActionCreator} from '../../store/action';
import {CITIES} from '../../const';

function Locations (props) {
  const {city, changeCity} = props;
  return (
    <section className="locations container">
      <ul className="locations__list tabs__list">
        {Object.keys(CITIES).map ((cityName) => (
          <li key={cityName} className="locations__item">
            <a
              className={`locations__item-link tabs__item ${cityName === city ? 'tabs__item--active' : ''}`} 
              href="#"
              onClick={()=>{changeCity(cityName)}}
            >
              <span>{cityName}</span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}

Locations.propTypes = {
  city: PropTypes.string.isRequired,
  changeCity: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  city: state.city,
});

const mapDispatchToProps = (dispatch) => ({
  changeCity(city) {
    dispatch(ActionCreator.changeCity(city));
  },
});

export {Locations};
export default connect(mapStateToProps, mapDispatchToProps)(Locations);
