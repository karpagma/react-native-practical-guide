import * as types from './types';

export const tryAuth = authData => {
  return {
    type: types.TRY_AUTH,
    payload: authData
  };
};
