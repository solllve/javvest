
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

{/* Pages */}
import Dashboard from './src/pages/Dashboard';
import SignIn from './src/pages/SignIn';

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
