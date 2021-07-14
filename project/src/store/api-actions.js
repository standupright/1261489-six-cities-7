import {ActionCreator} from './action';
import {AuthStatus, AppRoute} from '../const';
import OffersAdapter from '../utils/offersAdapter';
import CommentsAdapter from '../utils/commentsAdapter';
import AuthInfoAdapter from '../utils/userAdapter';
import {generatePath} from 'react-router-dom';

export const getOffersList = () => (dispatch, _getState, api) => (
  api.get(AppRoute.OFFERS)
    .then(({data}) => {
      dispatch(ActionCreator.loadOffers(OffersAdapter.getOffers(data)));
    })
);

export const getCommentsList = (id) => (dispatch, _getState, api) => (
  api.get(generatePath(AppRoute.COMMENTS, {id}))
    .then(({data}) => {
      dispatch(ActionCreator.loadComments(CommentsAdapter.getComments(data)));
    })
);

export const checkAuth = () => (dispatch, _getState, api) => (
  api.get(AppRoute.LOGIN, {
    headers: {
      'X-Token': `${localStorage.getItem('token')}`,
    },
  })
    .then(({data}) => dispatch(ActionCreator.login(AuthInfoAdapter.getUserData(data))))
    .then(() => dispatch(ActionCreator.requireAuthorization(AuthStatus.AUTH)))
    .catch(() => {})
);

export const login = ({login: email, password}) => (dispatch, _getState, api) => (
  api.post(AppRoute.LOGIN, {email, password})
    .then(({data}) => {
      localStorage.setItem('token', data.token);
      dispatch(ActionCreator.login(AuthInfoAdapter.getUserData(data)));
    })
    .then(() => dispatch(ActionCreator.requireAuthorization(AuthStatus.AUTH)))
    .then(() => dispatch(ActionCreator.redirectToRoute(AppRoute.ROOT)))
);

export const logout = () => (dispatch, _getState, api) => {
  api.delete(AppRoute.LOGOUT)
    .then(() => localStorage.removeItem('token'))
    .then(() => dispatch(ActionCreator.logout()));
};
