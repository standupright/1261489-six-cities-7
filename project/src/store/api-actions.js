import {ActionCreator} from './action';
import {AuthorizationStatus, APIRoute} from '../const';
import OffersAdapter from '../utils/offersAdapter';

export const getOffersList = () => (dispatch, _getState, api) => (
  api.get(APIRoute.OFFERS)
    .then(({data}) => {
      dispatch(ActionCreator.loadOffers(OffersAdapter.getOffers(data)));
    })
);

export const getCommentsList = () => (dispatch, _getState, api) => (
  api.get(APIRoute.COMMENTS)
    .then(({data}) => {
      dispatch(ActionCreator.loadComments(OffersAdapter.getOffers(data)));
    })
);


export const checkAuth = () => (dispatch, _getState, api) => (
  api.get(APIRoute.LOGIN)
    .then(() => dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH)))
    .catch(() => {})
);
