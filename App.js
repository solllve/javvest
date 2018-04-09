import React, {Component} from 'react';
import { Image, Text, View, Picker, Button, StatusBar, TextInput, StyleSheet, Alert, Animated } from 'react-native';
import { Asset, AppLoading } from 'expo';
import { StackNavigator, NavigationActions} from 'react-navigation';
import SvgUri from 'react-native-svg-uri';
import t from 'tcomb-form-native';
import { Header, Icon} from 'react-native-elements';
import {RNSlidingButton, SlideDirection} from 'rn-sliding-button';

class LogoTitle extends React.Component {
  render() {
    return (
      <View style={styles.signInLogo}>
        <SvgUri width="65" height="30" source={require('./assets/logo-top-sm.svg')} />
      </View>
    );
  }
}

class MenuIcon extends React.Component {
  static navigationOptions = { title: 'Menu Icon', header: null };
  render() {
    return (
      <View style={styles.menuIcon}>
        <Icon onPress={() => alert('This is a button!')} name="menu" color="#fff" size={25} />
      </View>
    );
  }
}

class SlideButtonCoffee extends React.Component {
  onSlideRight = () => {
      alert('test');
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
          <SvgUri width="204" source={require('./assets/buy-a-coffee.svg')} />
        </View>
      </RNSlidingButton>
    );
  }
}

{/* Sign in Greeting */}
class Greeting extends Component {
  render() {
    return (
      <Text>Hello {this.props.name}!</Text>
    );
  }
}

class ModalScreen extends React.Component {
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


{/* Dashboard */}
class Dashboard extends React.Component {
  static navigationOptions = ({ navigation }) => {
    const params = navigation.state.params || {};

    return {
      headerLeft: <MenuIcon />,
      headerRight: (
        <Button
          onPress={() => navigation.navigate('MyModal')}
          title="Charities"
          color="#fff"
        />
      ),
    };
  };
  state = {
    value: 0.2
  };
  render() {
    const { params } = this.props.navigation.state;
    const itemId = params ? params.itemId : null;
    const otherParam = params ? params.otherParam : null;
    return (
      <View style={{flex: 1}}>
        {/*  <Text>Details Screen</Text>
          <Text>itemId: {JSON.stringify(itemId)}</Text>
          <Text>otherParam: {JSON.stringify(otherParam)}</Text> */}
        <View style={styles.dashboardSumContainer}>
          <Text style={styles.dashboardSum}>$1.30</Text>
          <Text style={styles.dashboardSumLabel}>Funds Raised</Text>
        </View>
        <View style={styles.dashboardAction}>
        <Image style={styles.backgroundImage} source={require('./assets/background-pink-half.png')} />
        <SlideButtonCoffee />
        </View>
      </View>
    )
  }
};

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
      screen: ModalScreen,
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

const styles = StyleSheet.create({
  bodySignin: {
    flex: 1,
    alignItems:'center',
    justifyContent:'center',
  },
  signInButton: {
    flex: 1
  },
  bodySplash: {
    flex: 1,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center'
  },
  imageSplash: {
     flex: 1,
     resizeMode: 'contain'
  },
  signInHeader: {
    flex: 1,
    height: 100,
    backgroundColor: '#fff',
    borderBottomWidth: 0
  },
  signInView: {
    backgroundColor: '#fff',
    alignSelf: 'stretch',
    marginLeft: 15,
    marginRight: 15,
    padding: 10
  },
  signInLogo: {
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'stretch',
    marginLeft: 15,
    marginRight: 15,
    padding: 10,
    paddingTop: 20
  },
  signInInput: {
    height: 40,
    paddingTop: 10,
    paddingBottom: 10,
    marginBottom: 5
  },
  dashboardView: {
    flex: 1,
    resizeMode: 'contain'
  },
  backgroundImage: {
    flex: 1,
    position: 'absolute',
    width: '100%',
    height: '100%',
    top: 0,
    left: 0,
  },
  dashboardSumContainer: {
    flex: 3,
    backgroundColor: '#2D2D2D',
    justifyContent: 'center',
    alignItems: 'center'
  },
  dashboardSum: {
    color: '#fff',
    fontSize: 80,
    fontWeight: '100'
  },
  dashboardSumLabel: {
    color: '#818181',
    fontSize: 14,
    fontWeight: '100'
  },
  dashboardAction: {
    flex: 3,
    backgroundColor: '#D35E99',
    justifyContent: 'center',
    alignItems: 'center'
  },
  menuIcon: {
    left: 10
  },
  titleText: {
    justifyContent: 'center',
    alignItems: 'center'
  }
});

{/* Main App */}
export default class App extends React.Component {
  render() {
    return <RootStack />;
  }
}
