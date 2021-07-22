import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {CITIES} from '../../const';
import {changeCity} from '../../store/action';
import {getCity} from '../../store/cities/selector';

function Locations (props) {
  const city = useSelector(getCity);
  const dispatch = useDispatch();

  return (
    <section className="locations container">
      <ul className="locations__list tabs__list">
        {Object.keys(CITIES).map ((cityName) => (
          <li key={cityName} className="locations__item">
            <a
              className={`locations__item-link tabs__item ${cityName === city ? 'tabs__item--active' : ''}`} 
              href="#"
              onClick={()=>{dispatch(changeCity(cityName))}}
            >
              <span>{cityName}</span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}

export {Locations};
export default Locations;
