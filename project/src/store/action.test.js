import { AppRoute } from '../const';
import {
  changeCity,
  requireAuthorization,
  ActionType,
  loadOffers,
  updateOffer,
  loadCurrentOffer,
  updateCurrentOffer,
  loadFavorties,
  updateFavorite,
  redirectToRoute,
  login,
  logout
} from './action';

describe('Actions', () => {
  it('action creator returns correct action for changCity', () => {
    const expectedAction = {
      type: ActionType.CHANGE_CITY,
      payload: 'Paris',
    };
    expect(changeCity('Paris')).toEqual(expectedAction);
  });

  it('action creator  returns correct action for requireAuthorization', () => {
    const expectedAction = {
      type: ActionType.REQUIRED_AUTHORIZATION,
      payload: 'AUTH',
    };
    expect(requireAuthorization('AUTH')).toEqual(expectedAction);
  });

  it('action creator  returns correct action for loadOffers', () => {
    const offers = [
      {
        id: 1,
      },
      {
        id: 2,
      },
    ];
    const expectedAction = {
      type: ActionType.LOAD_OFFERS,
      payload: offers,
    };
    expect(loadOffers(offers)).toEqual(expectedAction);
  });

  it('action creator  returns correct action for updateOffer', () => {
    const offer = {
      id: 1,
    };
    const expectedAction = {
      type: ActionType.UPADTE_OFFER,
      payload: offer,
    };
    expect(updateOffer(offer)).toEqual(expectedAction);
  });

  it('action creator  returns correct action for loadCurrentOffer', () => {
    const currentOffer = {
      id: 1,
    };
    const expectedAction = {
      type: ActionType.LOAD_CURRENT_OFFER,
      payload: currentOffer,
    };
    expect(loadCurrentOffer(currentOffer)).toEqual(expectedAction);
  });

  it('action creator  returns correct action for updateCurrentOffer', () => {
    const currentOffer = {
      id: 1,
    };
    const expectedAction = {
      type: ActionType.UPDATE_CURRENT_OFFER,
      payload: currentOffer,
    };
    expect(updateCurrentOffer(currentOffer)).toEqual(expectedAction);
  });

  it('action creator  returns correct action for loadFavorties', () => {
    const favoritesData = [
      {
        id: 1,
      },
      {
        id: 2,
      },
      {
        id: 3,
      },
    ];
    const expectedAction = {
      type: ActionType.LOAD_FAVORITES,
      payload: favoritesData,
    };
    expect(loadFavorties(favoritesData)).toEqual(expectedAction);
  });

  it('action creator  returns correct action for updateFavorite', () => {
    const favoriteOffer = {
      id: 1,
    };
    const expectedAction = {
      type: ActionType.UPDATE_FAVORITE,
      payload: favoriteOffer,
    };
    expect(updateFavorite(favoriteOffer)).toEqual(expectedAction);
  });

  it('action creator  returns correct action for redirectToRoute', () => {
    const url = AppRoute.ROOT;
    const expectedAction = {
      type: ActionType.REDIRECT_TO_ROUTE,
      payload: url,
    };
    expect(redirectToRoute(url)).toEqual(expectedAction);
  });

  it('action creator  returns correct action for login', () => {
    const url = AppRoute.LOGIN;
    const expectedAction = {
      type: ActionType.LOGIN,
      payload: url,
    };
    expect(login(url)).toEqual(expectedAction);
  });

  it('action creator  returns correct action for logout', () => {
    const expectedAction = {
      type: ActionType.LOGOUT,
    };
    expect(logout()).toEqual(expectedAction);
  });
});
