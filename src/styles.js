import { StyleSheet } from 'react-native';
export default StyleSheet.create({
  bodySignin: {
    flex: 1,
    alignItems:'center',
    justifyContent:'center',
  },
  signInButton: {
    flex: 1
  },
  bodySplash: {
    flex: 1,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center'
  },
  imageSplash: {
     flex: 1,
     resizeMode: 'contain'
  },
  signInHeader: {
    flex: 1,
    height: 100,
    backgroundColor: '#fff',
    borderBottomWidth: 0
  },
  signInView: {
    backgroundColor: '#fff',
    alignSelf: 'stretch',
    marginLeft: 15,
    marginRight: 15,
    padding: 10
  },
  signInLogo: {
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'stretch',
    marginLeft: 15,
    marginRight: 15,
    padding: 10,
    paddingTop: 20
  },
  signInInput: {
    height: 40,
    paddingTop: 10,
    paddingBottom: 10,
    marginBottom: 5
  },
  dashboardView: {
    flex: 1,
    resizeMode: 'contain'
  },
  backgroundImage: {
    flex: 1,
    position: 'absolute',
    width: '100%',
    height: '100%',
    top: 0,
    left: 0,
  },
  dashboardSumContainer: {
    flex: 3,
    backgroundColor: '#2D2D2D',
    justifyContent: 'center',
    alignItems: 'center'
  },
  dashboardSum: {
    color: '#fff',
    fontSize: 80,
    fontWeight: '100'
  },
  dashboardSumLabel: {
    color: '#818181',
    fontSize: 14,
    fontWeight: '100'
  },
  dashboardAction: {
    flex: 3,
    backgroundColor: '#D35E99',
    justifyContent: 'center',
    alignItems: 'center'
  },
  menuIcon: {
    left: 10
  },
  titleText: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  sideContainer: {
    flex: 1,
    backgroundColor: '#1D1D1D',
  },
  navItemStyle: {
    padding: 10,
    color: '#fff'
  },
  sectionHeadingStyle: {
    paddingVertical: 10,
    paddingHorizontal: 5,
  },
  footerContainer: {
    padding: 20,
  }
});
