import {ActionCreator} from './action';
import {AuthStatus, APIRoute} from '../const';
import OffersAdapter from '../utils/offersAdapter';
import AuthInfoAdapter from '../utils/userAdapter';

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
    .then(() => dispatch(ActionCreator.requireAuthorization(AuthStatus.AUTH)))
    .catch(() => {})
);

export const login = ({login: email, password}) => (dispatch, _getState, api) => (
  api.post(APIRoute.LOGIN, {email, password})
    .then(({data}) => {
      localStorage.setItem('token', data.token);
      const userData = AuthInfoAdapter.getUserData(data);
      dispatch(ActionCreator.setUser(userData));
    })
    .then(() => dispatch(ActionCreator.requireAuthorization(AuthStatus.AUTH)))
    .then(() => dispatch(ActionCreator.redirectToRoute(APIRoute.ROOT)))
);

export const logout = () => (dispatch, _getState, api) => {
  api.delete(APIRoute.LOGOUT)
    .then(() => localStorage.removeItem('token'))
    .then(() => dispatch(ActionCreator.logout()));
};
