import React, {Component} from 'react';
import { Asset, AppLoading } from 'expo';
import { Text, Button } from 'react-native';
import { StackNavigator, NavigationActions, DrawerNavigator} from 'react-navigation';
{/* Components */}
import LogoTitle from '../header/LogoTitle';
import MenuIcon from '../header/MenuIcon';
{/* Modals */}
import BuyACoffee from '../modals/BuyACoffee';
{/* Pages */}
import Dashboard from '../pages/Dashboard';
import SignIn from '../pages/SignIn';
import SideMenu from './SideMenu';

const DrawerNav = DrawerNavigator({
  DashboardScreen: {
    screen: Dashboard,
  }
},
{
  initialRouteName: 'DashboardScreen',
  contentComponent: SideMenu,
},
{
  headerMode: 'none',
  mode: 'modal'
}
)

export default DrawerNav;
