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
import DrawerNav from '../navigation/DrawerNav';

{/* Navigation */}
const PrimaryNav = StackNavigator(
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
    Drawer: {
      screen: DrawerNav,
    }
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

export default PrimaryNav;
