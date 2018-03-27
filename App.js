import React, {Component} from 'react';
import { Image, Text, View, Picker, Button, StatusBar, TextInput, StyleSheet, Alert } from 'react-native';
import { Asset, AppLoading } from 'expo';
import { StackNavigator} from 'react-navigation';
import SvgUri from 'react-native-svg-uri';
import t from 'tcomb-form-native';
import { Header } from 'react-native-elements';

{/* Splash Page */}
const signInFormOptions = {
  fields: {
    email: {
      error: 'No such email exists'
    },
    password: {
      error: 'Incorrect password'
    }
  },
  stylesheet: styles,
};

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
  render() {
    return (
      <Text>Test</Text>
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
        <View style={styles.signInLogo}>
          <SvgUri width="100" height="80" source={require('./assets/logo-top-sm.svg')} />
        </View>
        <View style={styles.signInView}>
          <TextInput style={styles.signInInput} placeholder="Your email"/>
          <TextInput style={styles.signInInput} secureTextEntry={true} placeholder="Password"/>
          <Button onPress={() => {Alert.alert('Sign in Action');}} color="#548DD3" title="Sign In" />
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
    backgroundColor: '#548DD3',
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
    marginTop: 45,
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
    paddingBottom: 10
  }
});

{/* Main App */}
export default class App extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <SplashTimer />
      </View>
    );
  }
}
