import React, {useState} from 'react';
import PropTypes from 'prop-types';
import Card from '../card/card';
import offersPropShape from '../../prop-validation/offers.prop';

function CardsList (props) {
  const [activeCard, setActiveCard] = useState({});
  const {numberOffers, offers} = props;
  return (
    <div className="cities__places-list places__list tabs__content">
      {offers
        .map ((hotel) =>
          <Card key={hotel.id} hotel={hotel} setActiveCard={() => setActiveCard(hotel)}/>)
        .slice (0, numberOffers)}
    </div>
  );
}

export default CardsList;


CardsList.propTypes = {
  numberOffers: PropTypes.number.isRequired,
  offers: PropTypes.arrayOf (offersPropShape),
};
