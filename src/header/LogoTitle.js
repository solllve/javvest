import React, {Component} from 'react';
import { Image, Text, View, StyleSheet } from 'react-native';
import SvgUri from 'react-native-svg-uri';
import styles from '../styles';
class LogoTitle extends React.Component {
  render() {
    return (
      <View style={styles.signInLogo}>
        <SvgUri width="65" height="30" source={require('../../assets/logo-top-sm.svg')} />
      </View>
    );
  }
}
export default LogoTitle;
