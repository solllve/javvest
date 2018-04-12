{/* Main Imports*/}
import React, {Component} from 'react';
import { Image, Text, View, Picker, Button, StatusBar, TextInput, StyleSheet, Alert, Animated, TouchableHighlight } from 'react-native';
import { Asset, AppLoading } from 'expo';
import { StackNavigator, NavigationActions, DrawerNavigator} from 'react-navigation';
import SvgUri from 'react-native-svg-uri';
import styles from '../styles';

{/* Sign In */}
class SignIn extends React.Component {
  static navigationOptions = {
    header: null
  }
  handleSubmit = () => {
   const value = this._form.getValue();
   console.log('value: ', value);
 }
  render() {
    StatusBar.setBarStyle('light-content', true);
    const moveFocus = () => {
      textInput.getRenderedComponent().focus()
    }
    return (
      <View style={styles.bodySignin}>
        <Image style={styles.backgroundImage} source={require('../../assets/background-image.png')} />
        <SvgUri width="125" source={require('../../assets/logo-top-sm.svg')} />
        <View style={styles.signInView}>
          <TextInput style={styles.signInInput} placeholder="Your email"/>
          <TextInput style={styles.signInInput} secureTextEntry={true} placeholder="Password"/>
          <Button onPress={() => {
            /* 1. Navigate to the Details route with params */
            this.props.navigation.navigate('DashboardPage', {
              itemId: 86,
              otherParam: 'Dashboard',
            });

          }} color="#548DD3" title="Sign In" />
        </View>
      </View>
    );
  }
}
export default SignIn;
