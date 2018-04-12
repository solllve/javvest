import React, {Component} from 'react';
import { Image, Text, View, StyleSheet, Button, TouchableOpacity } from 'react-native';
import styles from '../styles';
import {Icon} from 'react-native-elements';
import { StackNavigator, NavigationActions, DrawerNavigator} from 'react-navigation';

import MenuIcon from '../header/MenuIcon';

class BuyACoffee extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      header: null
    };
  };
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
