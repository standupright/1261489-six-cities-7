import { createSelector } from 'reselect';
import { NameSpace } from '../root-reducer';

export const getFavoritesData = (state) => state[NameSpace.FAVORITE].favoritesData;export const getIsFavoritesLoading = (state) => state[NameSpace.FAVORITE].isFavoritesLoading;

export const getfilteredFavorites = createSelector(
  getFavoritesData,
  (favorites) => favorites.reduce((acc,favorite) => {
    const city = favorite.city.name;
    if (!acc[city]) {
      acc[city] = [];
    }
    acc[city].push(favorite);
    return acc;
  }, {}),
);
