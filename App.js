import React, {Component} from 'react';
import { StackNavigator, NavigationActions, DrawerNavigator} from 'react-navigation';
import PrimaryNav from './src/navigation/PrimaryNav';
{/* Main App */}
export default class App extends React.Component {
  render() {
    return <PrimaryNav />;
  }
}
