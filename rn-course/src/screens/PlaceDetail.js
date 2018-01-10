import React, { Component } from 'react';
import {
  View,
  Image,
  Text,
  Button,
  StyleSheet,
  TouchableOpacity,
  Platform
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { connect } from 'react-redux';

import * as placeActions from '../store/actions';

class PlaceDetail extends Component {
  deletePlaceHandler = () => {
    this.props.deletePlace(this.props.selectedPlace.key);
    this.props.navigator.pop();
  };

  render() {
    const { props } = this;
    return (
      <View style={styles.container}>
        <View>
          <Image source={props.selectedPlace.image} style={styles.placeImage} />
          <Text style={styles.placeName}>{props.selectedPlace.name}</Text>
        </View>
        <View>
          <TouchableOpacity onPress={this.deletePlaceHandler}>
            <View style={styles.deleteButton}>
              <Icon
                size={30}
                name={Platform.OS === 'android' ? 'md-trash' : 'ios-trash'}
                color="red"
              />
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    margin: 22
  },
  placeImage: {
    width: '100%',
    height: 200
  },
  placeName: {
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 28
  },
  deleteButton: {
    alignItems: 'center'
  }
});

const mapDispatchToProps = dispatch => {
  return {
    deletePlace: key => dispatch(placeActions.deletePlace(key))
  };
};

export default connect(null, mapDispatchToProps)(PlaceDetail);
