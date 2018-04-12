import React, {Component} from 'react';
import { Image, Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import SvgUri from 'react-native-svg-uri';
import styles from '../styles';
import {Icon} from 'react-native-elements';
class MenuIcon extends React.Component {
  static navigationOptions = { title: 'Menu Icon', header: null };
  render() {
    return (
      <View style={styles.menuIcon}>
          <Text>Menu</Text>
      </View>
    );
  }
}
export default MenuIcon;
