import React, { Component } from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  ScrollView,
  Image
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
    placeName: ''
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

  placeAddedHandler = () => {
    this.props.addPlace(this.state.placeName);
  };

  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          <Heading>Share a place with us</Heading>
          <PickImage />
          <PickLocation />
          <PlaceInput
            placeName={this.state.placeName}
            onPlaceNameChanged={this.placeNamChangedHandler}
          />
          <View>
            <Button title="Share a Place!" onPress={this.placeAddedHandler} />
          </View>
        </View>
      </ScrollView>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addPlace: placeName => dispatch(placeActions.addPlace(placeName))
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  },
  placeholder: {
    borderWidth: 1,
    borderColor: 'black',
    backgroundColor: '#eee',
    width: '80%',
    height: 150
  },
  button: {
    margin: 8
  },
  previewImage: {
    width: '100%',
    height: '100%'
  }
});

export default connect(null, mapDispatchToProps)(SharePlaceScreen);
