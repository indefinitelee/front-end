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
import { MonthlyCap } from '../components/MonthlyCap';
import { TodaysDate } from '../components/TodaysDate';
import { Activity } from '../components/Activity';
import { ProfilePic } from '../components/ProfilePic';
import { UserName } from '../components/UserName';

export default class ProfileScreen extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      username: 'carla stockalper',
    }
  }

  static route = {
    navigationBar: {
      visible: false,
    },
  };

  render() {
    return (
        <View style={styles.container}>
          <View style={styles.headerBar}>
            <UserName />
            <TodaysDate />
          </View>
          <View style={styles.piechart}>
            <ProfilePic />
          </View>
          <View style={styles.charities}>
            <MonthlyCap username={this.state.username}/>
          </View>
            <ScrollView style={styles.feed}>
              <Activity />
            </ScrollView>
        </View>
      )}
  };


const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerBar: {
    padding: 20,
    // flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'rgba(100,149,237, 1)',
    width: '100%',
    height: 80,
  },
  piechart: {
    padding: 20,
    // flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
    height: 200,
  },
  charities: {
    padding: 20,
    // flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'rgba(100,149,237, 0.3)',
    width: '100%',
    height: 170,
  },
  feed: {
    backgroundColor: 'rgba(100,149,237, 0.2)',
    width: '100%',
  }
});
