{/* Main Imports*/}
import React, {Component} from 'react';
import { Image, Text, View, Picker, Button, StatusBar, TextInput, StyleSheet, Alert, Animated, TouchableHighlight } from 'react-native';
import { Asset, AppLoading } from 'expo';
import SvgUri from 'react-native-svg-uri';
import { Header, Icon} from 'react-native-elements';
import {RNSlidingButton, SlideDirection} from 'rn-sliding-button';
import styles from '../styles';

{/* Components */}
import LogoTitle from '../header/LogoTitle';
import MenuIcon from '../header/MenuIcon';
{/* Actions */}
import SlideButtonCoffee from '../buttons/SlideButtonCoffee';

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
        <Image style={styles.backgroundImage} source={require('../../assets/background-pink-half.png')} />
        <SlideButtonCoffee navigation={this.props.navigation} />
        </View>
      </View>
    )
  }
};

export default Dashboard;
