import React from 'react';
import {
  ScrollView,
  StyleSheet,
  View,
  Text,
  Image
 } from 'react-native';
import { ExpoLinksView } from '@expo/samples';
import { Activity } from '../components/Activity';

export default class ActivityScreen extends React.Component {
  static route = {
    navigationBar: {
      title: 'Activity',
    },
  };

  render() {
    return (
      <View style={styles.container}>
        <Activity />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
  },
});
