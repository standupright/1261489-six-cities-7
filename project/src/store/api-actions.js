import {ActionCreator} from './action';
import {AuthorizationStatus, APIRoute} from '../const';
import OfferAdapter from '../utils/offersAdapter';

export const getOffersList = () => (dispatch, _getState, api) => (
  api.get(APIRoute.OFFERS)
    .then(({data}) => {

      dispatch(ActionCreator.loadOffers(OfferAdapter.getOffers(data)));
    })
);

export const checkAuth = () => (dispatch, _getState, api) => (
  api.get(APIRoute.LOGIN)
    .then(() => dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH)))
    .catch(() => {})
);
