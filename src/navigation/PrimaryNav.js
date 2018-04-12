import React, {Component} from 'react';
import { Asset, AppLoading } from 'expo';
import { StackNavigator, NavigationActions, DrawerNavigator} from 'react-navigation';
{/* Components */}
import LogoTitle from '../header/LogoTitle';
import MenuIcon from '../header/MenuIcon';
{/* Modals */}
import BuyACoffee from '../modals/BuyACoffee';
{/* Pages */}
import SignIn from '../pages/SignIn';
import Dashboard from '../pages/Dashboard';

{/* Navigation */}
const PrimaryNav = StackNavigator(
  {
    SignInPage: {
      screen: SignIn,
    },
    MyModal: {
      screen: BuyACoffee,
    },
    DashboardPage: {
      screen: Dashboard,
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
    headerMode: 'none',
    mode: 'modal'
  }
);

export default PrimaryNav;
