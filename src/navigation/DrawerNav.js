import React, {Component} from 'react';
import { Asset, AppLoading } from 'expo';
import { StackNavigator, NavigationActions, DrawerNavigator} from 'react-navigation';
{/* Components */}
import LogoTitle from '../header/LogoTitle';
import MenuIcon from '../header/MenuIcon';
{/* Modals */}
import BuyACoffee from '../modals/BuyACoffee';
{/* Pages */}
import Dashboard from '../pages/Dashboard';
import SignIn from '../pages/SignIn';

const DrawerNav = DrawerNavigator({
  DashboardScreen: {
    screen: Dashboard,
  }
}, {
  initialRouteName: 'DashboardScreen',
  headerMode: 'float',
  navigationOptions: ({navigation}) => ({
    headerTintColor: 'white',
  })
})

export default DrawerNav;
