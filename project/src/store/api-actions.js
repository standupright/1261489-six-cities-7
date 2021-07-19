import {ActionCreator} from './action';
import {AuthStatus, AppRoute, ApiRoute} from '../const';
import OffersAdapter from '../utils/offersAdapter';
import CommentsAdapter from '../utils/commentsAdapter';
import AuthInfoAdapter from '../utils/userAdapter';
import {generatePath} from 'react-router-dom';

export const getOffersList = () => (dispatch, _getState, api) => (
  api.get(ApiRoute.OFFERS)
    .then(({data}) => {
      dispatch(ActionCreator.loadOffers(OffersAdapter.getOffers(data)));
    })
);

export const getOffer = (id) => (dispatch, _getState, api) => (
  Promise.all([
    api.get(generatePath(ApiRoute.OFFER, { id })),
    api.get(generatePath(ApiRoute.NEARBY, { id })),
    api.get(generatePath(ApiRoute.COMMENTS, { id }))],
  )
    .then((values) =>
      dispatch(ActionCreator.loadOffer({
        id: Number(id),
        offer: OffersAdapter.getOffer(values[0].data),
        nearby: OffersAdapter.getOffers(values[1].data),
        comments: CommentsAdapter.getComments(values[2].data),
      })))
    .catch(() => dispatch(ActionCreator.redirectToRoute(AppRoute.NOT_FOUND)))
);

export const postComment = (id,reviewData) => (dispatch, _getState, api) => (
  api.post(
    generatePath(ApiRoute.COMMENTS, {id}),reviewData)
    .then(({data}) => {
      dispatch(ActionCreator.loadOffer({
        comments: CommentsAdapter.getComments(data),
      }));
    })
    .catch(() => {//Тут будет реализован bad request в след задании
    })
);

export const checkAuth = () => (dispatch, _getState, api) => (
  api.get(ApiRoute.LOGIN)
    .then(({data}) => dispatch(ActionCreator.login(AuthInfoAdapter.getUserData(data))))
    .then(() => dispatch(ActionCreator.requireAuthorization(AuthStatus.AUTH)))
    .catch(() => {})
);

export const login = ({login: email, password}) => (dispatch, _getState, api) => (
  api.post(ApiRoute.LOGIN, {email, password})
    .then(({data}) => {
      localStorage.setItem('token', data.token);
      dispatch(ActionCreator.login(AuthInfoAdapter.getUserData(data)));
    })
    .then(() => dispatch(ActionCreator.requireAuthorization(AuthStatus.AUTH)))
    .then(() => dispatch(ActionCreator.redirectToRoute(AppRoute.ROOT)))
);

export const logout = () => (dispatch, _getState, api) => {
  api.delete(ApiRoute.LOGOUT)
    .then(() => localStorage.removeItem('token'))
    .then(() => dispatch(ActionCreator.logout()));
};