{/* Main Imports*/}
import React, {Component} from 'react';
import { Image, Text, View, Picker, Button, StatusBar, TextInput, StyleSheet, Alert, Animated, TouchableHighlight, TouchableOpacity, Easing } from 'react-native';
import { Asset, AppLoading } from 'expo';
import SvgUri from 'react-native-svg-uri';
import { Header, Icon} from 'react-native-elements';
import {RNSlidingButton, SlideDirection} from 'rn-sliding-button';
import styles from '../styles';
import Drawer from 'react-native-drawer-menu';

{/* Components */}
import LogoTitle from '../header/LogoTitle';
import MenuIcon from '../header/MenuIcon';
{/* Actions */}
import SlideButtonCoffee from '../buttons/SlideButtonCoffee';

{/* Dashboard */}
class Dashboard extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerLeft: (
        <TouchableOpacity onPress={() => navigation.navigate('DrawerOpen')}>
          <MenuIcon />
        </TouchableOpacity>
      ),
      headerRight: (
        <Button
          onPress={() => navigation.navigate('MyModal')}
          title="Charities"
          color="#fff"
        />
      ),
    };
  };
  render() {
    const { params } = this.props.navigation.state;
    const itemId = params ? params.itemId : null;
    const otherParam = params ? params.otherParam : null;
    // prepare your drawer content
  var drawerContent = (<View style={styles.drawerContent}>
    <View style={styles.leftTop}/>
    <View style={styles.leftBottom}>
      <View><Text>Drawer Content</Text></View>
    </View>
  </View>);
  // customize drawer's style (Optional)
  var customStyles = {
    drawer: {
      shadowColor: '#000',
      shadowOpacity: 0.4,
      shadowRadius: 10
    },
    mask: {}, // style of mask if it is enabled
    main: {} // style of main board
  };
    return (
      <View style={{flex: 1}}>
        <Drawer
        style={styles.container}
        drawerWidth={300}
        drawerContent={drawerContent}
        type={Drawer.types.Overlay}
        customStyles={{drawer: styles.drawer}}
        drawerPosition={Drawer.positions.left}
        onDrawerOpen={() => {console.log('Drawer is opened');}}
        onDrawerClose={() => {console.log('Drawer is closed')}}
        easingFunc={Easing.ease}
      >
        <View style={styles.content}>
          <Text>{Object.values(Drawer.positions).join(' ')}</Text>
          <Text>{Object.values(Drawer.types).join(' ')}</Text>
        </View>
      </Drawer>
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
