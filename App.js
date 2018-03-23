import React, {Component} from 'react';
import { Image, Text, View, Button, Picker, StatusBar, TextInput, StyleSheet, } from 'react-native';
import { Asset, AppLoading } from 'expo';
import { StackNavigator} from 'react-navigation';

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

class SignIn extends React.Component {
  render() {
    StatusBar.setBarStyle('light-content', true);
    return (
      <View style={styles.bodySignin}>
        <View style={styles.signInView}>
          <TextInput style={{height: 40}} placeholder="email"/>
        </View>
      </View>
    );
  }
}

//Splash Page
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
    justifyContent: 'center',
    alignItems: 'center'
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
  signInView: {
    backgroundColor: '#fff',
    alignSelf: 'stretch',
    marginLeft: 15,
    marginRight: 15,
    padding: 10
  }
});

//Main App
export default class App extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <SplashTimer />
      </View>
    );
  }
}
