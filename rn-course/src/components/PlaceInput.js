import React, { Component } from 'react';

import Input from './common/Input';

const PlaceInput = props => {
  return (
    <Input
      placeholder="Place Name"
      value={props.placeName}
      onChangeText={props.onPlaceNameChanged}
    />
  );
};

export default PlaceInput;
