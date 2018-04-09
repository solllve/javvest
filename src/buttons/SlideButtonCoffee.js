import React, {Component} from 'react';
import { Image, Text, View, StyleSheet, Button } from 'react-native';
import styles from '../styles';
import {Icon} from 'react-native-elements';
import { StackNavigator, NavigationActions, DrawerNavigator} from 'react-navigation';
import {RNSlidingButton, SlideDirection} from 'rn-sliding-button';
import SvgUri from 'react-native-svg-uri';

class SlideButtonCoffee extends React.Component {
  onSlideRight = () => {
      this.props.navigation.navigate('MyModal')
  };
  render() {
    return (
      <RNSlidingButton
        style={{
          alignSelf: 'stretch',
          backgroundColor: null
        }}
        height={121}
        onSlidingSuccess={this.onSlideRight}
        slideDirection={SlideDirection.RIGHT}>
        <View style={styles.titleText}>
          <SvgUri width="204" source={require('../../assets/buy-a-coffee.svg')} />
        </View>
      </RNSlidingButton>
    );
  }
}

export default SlideButtonCoffee;
