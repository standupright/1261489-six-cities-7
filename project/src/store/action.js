import { createAction } from '@reduxjs/toolkit';

export const ActionType = {
  CHANGE_CITY: 'main/changeCity',
  LOAD_COMMENTS: 'data/loadComments',
  LOAD_OFFERS: 'data/loadOffers',
  LOAD_OFFER_DATA: 'data/loadOffer',
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

export const loadOffer = createAction(ActionType.LOAD_OFFER,
  (currentOffer) => ({
    payload: currentOffer,
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
