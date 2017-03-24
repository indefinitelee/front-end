'use strict';

var React = require('react');
var ReactNative= require('react-native');
var {
  Slider,
  Text,
  StyleSheet,
  View,
} = ReactNative;

export default class App extends React.Component {
  static defaultProps = {
    value: 0,
    minimumValue: 0,
    maximumValue: 100,
    step:1,
  };

  state = {
    value: this.props.value,
    minimumValue: this.props.minimumValue,
    maximumValue: this.props.maximumValue,
    step: this.props.step,
  };

  render() {
    return (
      <View>
        <Slider
          {...this.props}
          onSlidingComplete={(value) => this.setState({
            slideCompletionValue: value })}
        />
        <Text>
          Value: {this.state.slideCompletionValue}
        </Text>
      </View>
    );
  }
}


