export const ActionType = {
  CHANGE_CITY: 'main/changeCity',
  LOAD_COMMENTS: 'data/loadComments',
  LOAD_OFFERS: 'data/loadOffers',
  REDIRECT_TO_ROUTE: 'main/redirectToRoute',
  REQUIRED_AUTHORIZATION: 'user/requiredAuthorization',
  LOGIN: 'user/login',
  LOGOUT: 'user/logout',
};

export const ActionCreator = {
  changeCity: (city) => ({
    type: ActionType.CHANGE_CITY,
    payload: city,
  }),
  requireAuthorization: (status) => ({
    type: ActionType.REQUIRED_AUTHORIZATION,
    payload: status,
  }),
  loadOffers: (offersData) => ({
    type: ActionType.LOAD_OFFERS,
    payload: offersData,
  }),
  loadComments: (commentsData) => ({
    type: ActionType.LOAD_COMMENTS,
    payload: commentsData,
  }),
  redirectToRoute: (url) => ({
    type: ActionType.REDIRECT_TO_ROUTE,
    payload: url,
  }),
  login: (user) => ({
    type: ActionType.LOGIN,
    payload: user,
  }),
  logout: () => ({
    type: ActionType.LOGOUT,
  }),
};
