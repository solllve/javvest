import React, {Component} from 'react';
import { Image, Text, View, Picker, Button, StatusBar, TextInput, StyleSheet, Alert } from 'react-native';
import { Asset, AppLoading } from 'expo';
import { StackNavigator} from 'react-navigation';
import SvgUri from 'react-native-svg-uri';
import t from 'tcomb-form-native';
import { Header, Icon } from 'react-native-elements';

class LogoTitle extends React.Component {
  render() {
    return (
      <View style={styles.signInLogo}>
        <SvgUri width="65" height="30" source={require('./assets/logo-top-sm.svg')} />
      </View>
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

{/* Dashboard */}
class Dashboard extends React.Component {
  static navigationOptions = {
    headerTitle: <LogoTitle />,
    headerStyle: {
      backgroundColor: '#2D2D2D',
      borderBottomWidth: 0
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
    headerLeft: <Icon name="menu" color="#fff" size={25} onPress={ () => alert('This is a button!') } />,
    headerRight: (
      <Button
        onPress={() => alert('This is a button!')}
        title="Start Ups"
        color="#fff"
      />
    ),
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
        </View>
        <View style={{flex: 3, backgroundColor: '#D35E99'}} />
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
    const Form = t.form.Form;
    const User = t.struct({
      email: t.String,
      password: t.String
    });
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
              otherParam: 'anything you want here',
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
    fontSize: 80
  }
});

const RootStack = StackNavigator(
  {
    SignInPage: {
      screen: SignIn,
    },
    DashboardScreen: {
      screen: Dashboard,
    },
  },
  {
    initialRouteName: 'SignInPage',
  },
  {
    headerMode: 'screen'
  }
);

{/* Main App */}
export default class App extends React.Component {
  render() {
    return <RootStack />;
  }
}
