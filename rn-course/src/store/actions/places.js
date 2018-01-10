import * as types from './types';

export const addPlace = placeName => {
  return {
    type: types.ADD_PLACE,
    payload: {
      key: Math.random(),
      name: placeName,
      image: {
        uri:
          'https://cdn.theculturetrip.com/wp-content/uploads/2014/12/thai1.jpg'
      }
    }
  };
};

export const deletePlace = key => {
  return {
    type: types.DELETE_PLACE,
    payload: key
  };
};
