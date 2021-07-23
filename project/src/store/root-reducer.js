import { combineReducers } from 'redux';
import { offers } from './offers/offers';
import { cities } from './cities/cities';
import { user } from './user/user';
import { favorite } from './favorite/favorite';

export const NameSpace = {
  OFFERS: 'OFFERS',
  CITIES: 'CITIES',
  USER: 'USER',
  FAVORITE: 'FAVORITE',
};

export default combineReducers({
  [NameSpace.OFFERS]: offers,
  [NameSpace.CITIES]: cities,
  [NameSpace.USER]: user,
  [NameSpace.FAVORITE]: favorite,
});
