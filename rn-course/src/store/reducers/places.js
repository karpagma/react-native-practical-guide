import * as types from '../actions/types';

const initialState = {
  places: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_PLACES:
      return {
        ...state,
        places: action.payload
      };

    case types.REMOVE_PLACE:
      return {
        ...state,
        places: state.places.filter(p => p.key !== action.payload)
      };

    default:
      return state;
  }
};

export default reducer;
