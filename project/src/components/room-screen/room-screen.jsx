import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import offersPropShape from '../../prop-validation/offers.prop';
import { connect } from 'react-redux';
import Room from '../room/room';
import Header from '../header/header';
import NearPlaces from '../near-places/near-places';
import Spinner from '../spinner/spinner';
import { getOffer } from '../../store/api-actions';
import reviewsPropShape from '../../prop-validation/reviews.prop';
import { useParams } from 'react-router-dom';

function RoomScreen(props) {
  const { id } = useParams();
  const { currentOfferData, getOfferData } = props;
  const { offer, nearby, comments } = currentOfferData;

  useEffect(() => {
    if (Number(id) !== currentOfferData.id) {
      getOfferData(id);
    }
  }, [getOfferData, id, currentOfferData]);

  return Number(id) === currentOfferData.id ? (
    <div className='page'>
      <Header />
      <Room room={offer} reviews={comments} nearOffers={nearby} />
      <NearPlaces nearOffers={nearby} />
    </div>
  ) : (
    <Spinner />
  );
}

RoomScreen.propTypes = {
  currentOfferData: PropTypes.shape({
    id: PropTypes.number,
    offer: offersPropShape,
    nearby: PropTypes.arrayOf(offersPropShape),
    comments: PropTypes.arrayOf(reviewsPropShape),
  }).isRequired,
  getOfferData: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  currentOfferData: state.currentOfferData,
});

const mapDispatchToProps = (dispatch) => ({
  getOfferData(id) {
    dispatch(getOffer(id));
  },
});

export { RoomScreen };
export default connect(mapStateToProps, mapDispatchToProps)(RoomScreen);
