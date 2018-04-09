import React, {Component} from 'react';
import { Image, Text, View, StyleSheet, Button } from 'react-native';
import styles from '../styles';
import {Icon} from 'react-native-elements';
import { StackNavigator, NavigationActions, DrawerNavigator} from 'react-navigation';

class BuyACoffee extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{ fontSize: 30 }}>This is a modal!</Text>
        <Button
          onPress={() => this.props.navigation.goBack()}
          title="Dismiss"
        />
      </View>
    );
  }
}
export default BuyACoffee;
