import React, {Component} from 'react';
import { Image, Text, View, StyleSheet } from 'react-native';
import SvgUri from 'react-native-svg-uri';
import styles from '../styles';
import {Icon} from 'react-native-elements';
class MenuIcon extends React.Component {
  static navigationOptions = { title: 'Menu Icon', header: null };
  render() {
    return (
      <View style={styles.menuIcon}>
        <Icon onPress={() => navigation.navigate('DrawerOpen')} name="menu" color="#fff" size={25} />
      </View>
    );
  }
}
export default MenuIcon;
