import { NameSpace } from '../root-reducer';

export const getUserInfo = (state) => state[NameSpace.user].user;
export const getAuthorizationStatus  = (state) => state[NameSpace.user].authorizationStatus;
