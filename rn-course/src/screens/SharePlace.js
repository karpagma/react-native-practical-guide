import React, { Component } from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  ScrollView,
  Image,
  ActivityIndicator
} from 'react-native';
import { connect } from 'react-redux';

import * as placeActions from '../store/actions';
import Heading from '../components/common/Heading';
import PlaceInput from '../components/PlaceInput';
import PickImage from '../components/PickImage';
import PickLocation from '../components/PickLocation';

class SharePlaceScreen extends Component {
  static navigatorStyle = {
    navBarButtonColor: 'green'
  };

  state = {
    placeName: '',
    image: {
      value: null,
      valid: false
    }
  };

  constructor(props) {
    super(props);
    this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent);
  }

  onNavigatorEvent = event => {
    if (event.type === 'NavBarButtonPress') {
      if (event.id === 'sideDrawerToggle') {
        this.props.navigator.toggleDrawer({
          side: 'left',
          animated: true,
          to: 'open'
        });
      }
    }
  };

  placeNamChangedHandler = placeName => {
    this.setState({
      placeName: placeName
    });
  };

  imagePickedHandler = image => {
    this.setState({
      image: {
        value: image,
        valid: true
      }
    });
  };

  placeAddedHandler = () => {
    this.props.addPlace(this.state.placeName, this.state.image.value);
  };

  render() {
    let submitButton = (
      <Button title="Share a Place!" onPress={this.placeAddedHandler} />
    );

    if (this.props.isLoading) {
      submitButton = <ActivityIndicator />;
    }

    return (
      <ScrollView>
        <View style={styles.container}>
          <Heading>Share a place with us</Heading>
          <PlaceInput
            placeName={this.state.placeName}
            onPlaceNameChanged={this.placeNamChangedHandler}
          />
          <PickImage onImagePicked={this.imagePickedHandler} />
          <View>{submitButton}</View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  }
});

const mapStateToProps = state => {
  return {
    isLoading: state.ui.isLoading
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addPlace: (placeName, image) =>
      dispatch(placeActions.addPlace(placeName, image))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SharePlaceScreen);
