import PropTypes from 'prop-types';
import React, {Component} from 'react';
import styles from '../styles';
import {NavigationActions} from 'react-navigation';
import {ScrollView, Text, View, Image} from 'react-native';
import {Icon, Avatar} from 'react-native-elements';

class SideMenu extends Component {
  navigateToScreen = (route) => () => {
    const navigateAction = NavigationActions.navigate({
      routeName: route
    });
    this.props.navigation.dispatch(navigateAction);
  }
  render () {
    return (
      <View style={styles.sideContainer}>
      <Image style={styles.backgroundImage} source={require('../../assets/background-image.png')} />
        <ScrollView>
          <View>
          <Avatar
            large
            rounded
            source={{uri: "https://pbs.twimg.com/profile_images/967072242965266432/sQWNNvhM_400x400.jpg"}}
            onPress={() => console.log("Works!")}
            activeOpacity={0.7}
          />
            <Text style={styles.sectionHeadingStyle}>
              My Account
            </Text>
            <View style={styles.sectionHeadingStyle}>
              <Text style={styles.navItemStyle} onPress={this.navigateToScreen('DashboardScreen')}>
              Page1
              </Text>
            </View>
          </View>
          <View>
            <Text style={styles.sectionHeadingStyle}>
              Section 2
            </Text>
            <View style={styles.navSectionStyle}>
              <Text style={styles.navItemStyle} onPress={this.navigateToScreen('Page2')}>
                Page2
              </Text>
              <Text style={styles.navItemStyle} onPress={this.navigateToScreen('Page3')}>
                Page3
              </Text>
            </View>
          </View>
        </ScrollView>
        <View style={styles.footerContainer}>
          <Text>This is my fixed footer</Text>
        </View>
      </View>
    );
  }
}

SideMenu.propTypes = {
  navigation: PropTypes.object
};

export default SideMenu;
