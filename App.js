
{/* Main Imports*/}
import React, {Component} from 'react';
import { Image, Text, View, Picker, Button, StatusBar, TextInput, StyleSheet, Alert, Animated, TouchableHighlight } from 'react-native';
import { Asset, AppLoading } from 'expo';
import { StackNavigator, NavigationActions, DrawerNavigator} from 'react-navigation';
import SvgUri from 'react-native-svg-uri';
import { Header, Icon} from 'react-native-elements';
import {RNSlidingButton, SlideDirection} from 'rn-sliding-button';
import styles from './src/styles';

{/* Components */}
import LogoTitle from './src/header/LogoTitle';
import MenuIcon from './src/header/MenuIcon';

{/* Modals */}
import BuyACoffee from './src/modals/BuyACoffee';

{/* Actions */}
import SlideButtonCoffee from './src/buttons/SlideButtonCoffee';

import Dashboard from './src/pages/Dashboard';

{/* Splash Page Timer */}
class SplashTimer extends React.Component {
  state = {
    ready: false,
  }
  componentDidMount () {
    setTimeout(() => {
      this.setState({ ready: true })
    }, 5000)
  }
  render() {
    if (this.state.ready === false) {
      return <SplashPage />
    }
    return (
      <SignIn />
    );
  }
}
{/* Sign In */}
class SignIn extends React.Component {
  static navigationOptions = { title: 'Sign Out', header: null };
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
        <Image style={styles.backgroundImage} source={require('./assets/background-image.png')} />
        <SvgUri width="125" source={require('./assets/logo-top-sm.svg')} />
        <View style={styles.signInView}>
          <TextInput style={styles.signInInput} placeholder="Your email"/>
          <TextInput style={styles.signInInput} secureTextEntry={true} placeholder="Password"/>
          <Button onPress={() => {
            /* 1. Navigate to the Details route with params */
            this.props.navigation.navigate('DashboardScreen', {
              itemId: 86,
              otherParam: 'Dashboard',
            });

          }} color="#548DD3" title="Sign In" />
        </View>
      </View>
    );
  }
}
{/* Splash Page */}
class SplashPage extends React.Component {
  state = {
    isReady: false,
  };
  render() {
    StatusBar.setBarStyle('light-content', true);
    if (!this.state.isReady) {
      return (
        <AppLoading
          startAsync={this._cacheResourcesAsync}
          onFinish={() => this.setState({ isReady: true })}
          onError={console.warn}
        />
      );
    }
    return (
      <View style={styles.bodySplash}>
        <Image style={styles.imageSplash} source={require('./assets/javvest-splash.png')} />
      </View>
    );
  }
  async _cacheResourcesAsync() {
    const images = [
      require('./assets/javvest-splash.png'),
    ];
    const cacheImages = images.map((image) => {
      return Asset.fromModule(image).downloadAsync();
    });
    return Promise.all(cacheImages)

  }
}
const RootStack = StackNavigator(
  {
    SignInPage: {
      screen: SignIn,
    },
    MyModal: {
      screen: BuyACoffee,
    },
    DashboardScreen: {
      screen: Dashboard,
    },
  },
  {
    initialRouteName: 'SignInPage',
    navigationOptions: {
      headerTitle: <LogoTitle />,
      headerStyle: {
        backgroundColor: '#2D2D2D',
        borderBottomWidth: 0
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
  },
  {
    mode: 'modal',
    headerMode: 'screen'
  }
);

{/* Main App */}
export default class App extends React.Component {
  render() {
    return <RootStack />;
  }
}
