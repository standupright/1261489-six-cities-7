import {
  requireAuthorization,
  loadOffers,
  loadCurrentOffer,
  loadFavorties,
  updateOffer,
  updateCurrentOffer as updateCurrent,
  redirectToRoute,
  login as loginUser,
  logout as logoutUser,
  updateFavorite
} from './action';
import {AuthStatus, AppRoute, ApiRoute} from '../const';
import OffersAdapter from '../utils/offersAdapter';
import CommentsAdapter from '../utils/commentsAdapter';
import AuthInfoAdapter from '../utils/userAdapter';
import {generatePath} from 'react-router-dom';

export const getOffersList = () => (dispatch, _getState, api) => (
  api.get(ApiRoute.OFFERS)
    .then(({data}) => {
      dispatch(loadOffers(OffersAdapter.getOffers(data)));
    })
);

export const getOffer = (id) => (dispatch, _getState, api) => (
  Promise.all([
    api.get(generatePath(ApiRoute.OFFER, { id })),
    api.get(generatePath(ApiRoute.NEARBY, { id })),
    api.get(generatePath(ApiRoute.COMMENTS, { id }))],
  )
    .then((values) =>
      dispatch(loadCurrentOffer({
        id: Number(id),
        offer: OffersAdapter.getOffer(values[0].data),
        nearby: OffersAdapter.getOffers(values[1].data),
        comments: CommentsAdapter.getComments(values[2].data),
      })))
    .catch(() => dispatch(redirectToRoute(AppRoute.NOT_FOUND)))
);

export const getFavoritesList = () => (dispatch, _getState, api) => (
  api.get(ApiRoute.FAVORITES)
    .then(({data}) => {
      dispatch(loadFavorties(OffersAdapter.getOffers(data)));
    })
);

export const postFavorite = ({id,status}) => (dispatch, _getState, api) => (
  api.post(
    generatePath(ApiRoute.FAVORITES_STATUS, {id, status}))
    .then(({data}) => {
      dispatch(updateOffer(OffersAdapter.getOffer(data)));
    })
    .catch(() => dispatch(redirectToRoute(AppRoute.LOGIN)))
);

export const updateFavoriteOffer = ({id,status}) => (dispatch, _getState, api) => (
  api.post(
    generatePath(ApiRoute.FAVORITES_STATUS, {id, status}))
    .then(({data}) => {
      dispatch(updateFavorite(OffersAdapter.getOffer(data)));
    })
    .catch(() => dispatch(redirectToRoute(AppRoute.LOGIN)))
);

export const updateCurrentOffer = ({id,status}) => (dispatch, _getState, api) => (
  api.post(
    generatePath(ApiRoute.FAVORITES_STATUS, {id, status}))
    .then(({data}) => {
      dispatch(updateCurrent(
        OffersAdapter.getOffer(data),
      ));
    })
    .catch(() => dispatch(redirectToRoute(AppRoute.LOGIN)))
);


export const postComment = (id,reviewData) => (dispatch, _getState, api) => (
  api.post(
    generatePath(ApiRoute.COMMENTS, {id}),reviewData)
    .then(({data}) => {
      dispatch(loadCurrentOffer({
        comments: CommentsAdapter.getComments(data),
      }));
    })
);

export const checkAuth = () => (dispatch, _getState, api) => (
  api.get(ApiRoute.LOGIN)
    .then(({data}) => dispatch(loginUser(AuthInfoAdapter.getUserData(data))))
    .then(() => dispatch(requireAuthorization(AuthStatus.AUTH)))
    .catch(() => {})
);

export const login = ({login: email,password}) => (dispatch, _getState, api) => (
  api.post(ApiRoute.LOGIN, {email, password})
    .then(({data}) => {
      localStorage.setItem('token', data.token);
      dispatch(loginUser(AuthInfoAdapter.getUserData(data)));
    })
    .then(() => dispatch(requireAuthorization(AuthStatus.AUTH)))
    .then(() => dispatch(redirectToRoute(AppRoute.ROOT)))
);

export const logout = () => (dispatch, _getState, api) => {
  api.delete(ApiRoute.LOGOUT)
    .then(() => localStorage.removeItem('token'))
    .then(() => dispatch(logoutUser()));
};
