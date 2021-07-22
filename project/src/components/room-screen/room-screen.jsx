import React, { useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import Room from '../room/room';
import Header from '../header/header';
import NearPlaces from '../near-places/near-places';
import Spinner from '../spinner/spinner';
import {getOffer} from '../../store/api-actions';
import {useParams} from 'react-router-dom';
import {getDataOffer} from '../../store/offers/selector';

function RoomScreen() {
  const { id } = useParams();
  const currentOfferData = useSelector(getDataOffer);
  const dispatch = useDispatch();
  const { offer, nearby, comments } = currentOfferData;

  useEffect(() => {
    if (Number(id) !== currentOfferData.id) {
      dispatch(getOffer(id));
    }
  }, [getOffer, id, currentOfferData]);

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

export { RoomScreen };
export default RoomScreen;
