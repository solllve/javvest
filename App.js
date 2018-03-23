import React, {Component} from 'react';
import { Image, Text, View, Button, Picker } from 'react-native';
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
      <Dashboard />
    );
  }
}

class Dashboard extends React.Component {
  render() {
    return (
      <Text>Dashboard</Text>
    );
  }
}


//Splash Page
class SplashPage extends React.Component {
  state = {
    isReady: false,
  };
  render() {
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
      <View style={{
        flex: 1,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center'
      }}>
        <Image style={{
          flex: 1,
          resizeMode: 'contain'
        }} source={require('./assets/javvest-splash.png')} />
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
