import { Navigation } from 'react-native-navigation';
import { Provider } from 'react-redux';

import AuthScreen from './src/screens/Auth';
import SharePlaceScreen from './src/screens/SharePlace';
import FindPlaceScreen from './src/screens/FindPlace';
import PlaceDetailScreen from './src/screens/PlaceDetail';
import SideDrawer from './src/screens/SideDrawer';
import configureStore from './src/store/configureStore';

const store = configureStore();

// Register Screens
Navigation.registerComponent(
  'awsome-places.authscreen',
  () => AuthScreen,
  store,
  Provider
);
Navigation.registerComponent(
  'awsome-places.sharePlaceScreen',
  () => SharePlaceScreen,
  store,
  Provider
);
Navigation.registerComponent(
  'awsome-places.findPlaceScreen',
  () => FindPlaceScreen,
  store,
  Provider
);
Navigation.registerComponent(
  'awesome-places.placeDetailScreen',
  () => PlaceDetailScreen,
  store,
  Provider
);
Navigation.registerComponent(
  'awesome-places.sideDrawerScreen',
  () => SideDrawer
);

// Start a App
Navigation.startSingleScreenApp({
  screen: {
    screen: 'awsome-places.authscreen',
    title: 'Login'
  }
});
