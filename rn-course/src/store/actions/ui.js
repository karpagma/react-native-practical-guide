import * as types from './types';

export const uiStartLoading = () => {
  return {
    type: types.UI_START_LOADING
  };
};

export const uiStopLoading = () => {
  return {
    type: types.UI_STOP_LOADING
  };
};
