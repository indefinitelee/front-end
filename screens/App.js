import React from 'react';
import {
  Image,
  Linking,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import { MonoText } from '../components/StyledText';
import { Charities } from '../components/Charities';
import { TodaysDate } from '../components/TodaysDate';
import { Feed } from '../components/Feed';
import { GoalPiechart } from '../components/GoalPiechart';
import { UserName } from '../components/UserName';
import { HomeScreen } from '../screens/HomeScreen.js';

export default class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      username: 'carla stockalper',
    }
  }

  static route = {
    navigationBar: {
      visible: true,
    },
  };

  render() {
    return (
        <HomeScreen username={this.state.username}/>
      )
  };
}
