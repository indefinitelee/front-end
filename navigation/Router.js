import { createRouter } from '@expo/ex-navigation';

import HomeScreen from '../screens/HomeScreen';
import CharitiesScreen from '../screens/CharitiesScreen';
import ProfileScreen from '../screens/ProfileScreen';
import ActivityScreen from '../screens/ActivityScreen';
import SettingsScreen from '../screens/SettingsScreen';

import RootNavigation from './RootNavigation';

export default createRouter(() => ({
  home: () => HomeScreen,
  charities: () => CharitiesScreen,
  profile: () => ProfileScreen,
  activity: () => ActivityScreen,
  rootNavigation: () => RootNavigation,
  settings: () => SettingsScreen,
}));
