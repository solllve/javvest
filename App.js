
{/* Main Imports*/}
import React, {Component} from 'react';
import { Asset, AppLoading } from 'expo';
import { StackNavigator, NavigationActions, DrawerNavigator} from 'react-navigation';
{/* Components */}
import LogoTitle from './src/header/LogoTitle';
import MenuIcon from './src/header/MenuIcon';
{/* Modals */}
import BuyACoffee from './src/modals/BuyACoffee';
{/* Pages */}
import Dashboard from './src/pages/Dashboard';
import SignIn from './src/pages/SignIn';

{/* Navigation */}
const MainStack = StackNavigator(
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

{/* Main App */}
export default class App extends React.Component {
  render() {
    return <MainStack />;
  }
}
