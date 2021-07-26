import React, { useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import Room from '../room/room';
import Header from '../header/header';
import NearPlaces from '../near-places/near-places';
import Spinner from '../spinner/spinner';
import {getOffer, updateCurrentOffer} from '../../store/api-actions';
import {useParams} from 'react-router-dom';
import {getCurrentOffer, getIsCurrentOfferLoaded} from '../../store/offers/selector';


function RoomScreen() {
  const { id } = useParams();
  const currentOfferData = useSelector(getCurrentOffer);
  const dispatch = useDispatch();
  const { offer, nearby, comments } = currentOfferData;
  const isCurrentOfferLoaded = useSelector(getIsCurrentOfferLoaded);

  useEffect(() => {
    if (!isCurrentOfferLoaded) {
      dispatch(getOffer(id));
    }
  }, [getOffer, isCurrentOfferLoaded]);

  const handleFavoriteButtonClick = (offerId,isFavorite) => {
    dispatch(updateCurrentOffer({
      id: offerId,
      status: isFavorite ? 0 : 1,
    }));
  };

  return isCurrentOfferLoaded ? (
    <div className='page'>
      <Header />
      <Room
        room={offer}
        reviews={comments}
        nearOffers={nearby}
        onFavoriteButtonClick={handleFavoriteButtonClick}
      />
      <NearPlaces nearOffers={nearby} />
    </div>
  ) : (
    <Spinner />
  );
}

export { RoomScreen };
export default RoomScreen;
