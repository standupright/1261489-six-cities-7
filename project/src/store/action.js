import { createAction } from '@reduxjs/toolkit';

export const ActionType = {
  CHANGE_CITY: 'main/changeCity',
  LOAD_COMMENTS: 'data/loadComments',
  LOAD_OFFERS: 'data/loadOffers',
  LOAD_CURRENT_OFFER: 'data/loadCurrentOffer',
  LOAD_FAVORITES: 'data/loadFavorites',
  UPADTE_OFFER: 'data/updateOffer',
  UPDATE_CURRENT_OFFER: 'date/updateCurrentOffer',
  UPDATE_FAVORITE: 'data/updateFavorite',
  POST_REVIEW: 'data/postReview',
  REDIRECT_TO_ROUTE: 'main/redirectToRoute',
  REQUIRED_AUTHORIZATION: 'user/requiredAuthorization',
  LOGIN: 'user/login',
  LOGOUT: 'user/logout',
};

export const changeCity = createAction(ActionType.CHANGE_CITY,
  (city) => ({
    payload: city,
  }),
);

export const requireAuthorization = createAction(ActionType.REQUIRED_AUTHORIZATION,
  (status) => ({
    payload: status,
  }),
);

export const loadOffers = createAction(ActionType.LOAD_OFFERS,
  (offersData) => ({
    payload: offersData,
  }),
);

export const updateOffer = createAction(ActionType.UPADTE_OFFER,
  (offer) => ({
    payload: offer,
  }),
);

export const loadCurrentOffer = createAction(ActionType.LOAD_CURRENT_OFFER,
  (currentOffer) => ({
    payload: currentOffer,
  }),
);

export const updateCurrentOffer = createAction(ActionType.UPDATE_CURRENT_OFFER,
  (currentOffer) => ({
    payload: currentOffer,
  }),
);

export const loadFavorties = createAction(ActionType.LOAD_FAVORITES,
  (favoritesData) => ({
    payload: favoritesData,
  }),
);

export const updateFavorite = createAction(ActionType.UPDATE_FAVORITE,
  (favorite) => ({
    payload: favorite,
  }),
);

export const redirectToRoute = createAction(ActionType.REDIRECT_TO_ROUTE,
  (url) => ({
    payload: url,
  }),
);

export const login = createAction(ActionType.LOGIN,
  (user) => ({
    payload: user,
  }),
);

export const logout = createAction(ActionType.LOGOUT);
