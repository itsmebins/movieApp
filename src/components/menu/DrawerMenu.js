import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Dimensions,
  StyleSheet,
  View,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback
} from 'react-native';
import { connect } from 'react-redux';
import { CustomIcon } from '../common/CustomIcon.js';
import MenuList from '../menu/MenuList.js';
import { logoutAction } from '../../actions/AuthActions.js';
import menuItems from '../../data/menuItems.json';

const { width, height } = Dimensions.get('window');

class DrawerMenu extends Component {
  constructor(props) {
    super(props);
    //console.log(props);
    this.state = {
      authenticated: false,
      selectedMenuItem: '',
      showAddItemList: false,
      showViewItemList: false
    };
    this.openMenuItem = this.openMenuItem.bind(this);
    this.toggleAddItemList = this.toggleAddItemList.bind(this);
    this.toggleViewItemList = this.toggleViewItemList.bind(this);
  }

  openMenuItem(screenName, screenTitle) {
    console.log(screenName);
    this.props.closeDrawer();
		console.log(screenName);
    if(screenName === 'LC.logout') {
      this.props.logoutAction("Successfully logged out..");
    } else {
      this.props.navigator.push({
  			screen: screenName,
        title: screenTitle,
        passProps: {
  				userData: this.props.userData,
          localeValue: this.props.localeValue
  			}
  		});
    }
  }

  toggleAddItemList() {
   this.setState({showAddItemList: !this.state.showAddItemList});
  }

  toggleViewItemList(menuName) {
   this.setState({showViewItemList: !this.state.showViewItemList});
  }

  render() {
    //  const {navigate} = this.props.navigation
    console.log("menu data");
    console.log(menuItems.addItems);
    console.log(menuItems.viewItems);
    console.log(menuItems.flatMenuItems);
    return (
      <View style={styles.menu}>
        <View style={styles.avatarContainer}>
          <View style={styles.avatarImage}>
            <Image
              style={styles.mark}
              source={require('../../images/zigway_logo.png')}
            />
          </View>
          <View
            style={styles.closeButton}
            >
              <TouchableOpacity
                onPress={() => {
                  console.log('on close');
                  this.props.closeDrawer() }}
                  >
                    <View>
                      <CustomIcon
                        name="close"
                        color="white"
                        iconPackage="fontAwesome"
                        size={30}
                      />
                    </View>
                  </TouchableOpacity>
                </View>
              </View>
              <ScrollView style={styles.scrollContainer}>
                <TouchableWithoutFeedback onPress={this.toggleAddItemList}>
                  <View style={[styles.textWithIcon]}>
                    <View style={styles.withIcon}>
                      <Text style={styles.text}>Add item</Text>
                    </View>
                    <CustomIcon
                      style={styles.rightIcon}
                      name={this.state.showAddItemList ? 'angle-up' : 'angle-down'}
                      color="white"
                      size={25}
                      iconPackage="fontAwesome"
                    />
                  </View>
                </TouchableWithoutFeedback>
                <View style={{ flexDirection: 'column' }}>
                  { this.state.showAddItemList === true ?
                    <MenuList
                      openMenu={(menuLink, menuName) => this.openMenuItem(menuLink, menuName)}
                      selectedItem={this.state.selectedMenuItem}
                      menuData={menuItems.addItems}
                    />  :
                     null }
                </View>
                <TouchableWithoutFeedback onPress={this.toggleViewItemList}>
                  <View style={[styles.textWithIcon]}>
                    <View style={styles.withIcon}>
                      <Text style={styles.text}>View item</Text>
                    </View>
                    <CustomIcon
                      style={styles.rightIcon}
                      name={this.state.showViewItemList ? 'angle-up' : 'angle-down'}
                      color="white"
                      size={25}
                      iconPackage="fontAwesome"
                    />
                  </View>
                </TouchableWithoutFeedback>
                <View style={{ flexDirection: 'column' }}>
                  { this.state.showViewItemList === true ?
                    <MenuList
                      openMenu={(menuLink, menuName) => this.openMenuItem(menuLink, menuName)}
                      selectedItem={this.state.selectedMenuItem}
                      menuData={menuItems.viewItems}
                    />  :
                     null }
                </View>
                <MenuList
                  openMenu={(menuLink, menuName) => this.openMenuItem(menuLink, menuName)}
                  selectedItem={this.state.selectedMenuItem}
                  menuData={menuItems.flatMenuItems}
                />
              </ScrollView>
            </View>
          );
        }
};
const styles = StyleSheet.create({
  menu: {
    flex: 1,
    width,
    height,
    backgroundColor: '#191919'
  },
  avatarContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: width / 2 + 59,
    borderColor: '#000',
    borderBottomWidth: 3,
    paddingHorizontal: 20,
    paddingVertical: 20,
    //backgroundColor: 'white'
  },
  avatar: {
    width: 60,
    height: 60,
    marginRight: 20,
    backgroundColor: 'white'
  },
  mark: {
    height: 80,
    width: 180,
		padding: 10
  },
  avatarImage: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  text: {
    color: '#b3b3b3',
    fontSize: 18
  },
  textWithIcon: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15,
    borderColor: '#000',
    borderBottomWidth: 3,
    paddingLeft: 10
  },
  withIcon: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  scrollContainer: {
    width: width / 2 + 59
  },
  rightIcon: {
    paddingRight: 20
  },
  iconWithText: {
    marginRight: 10,
    paddingLeft: 20
  },
  items: {
    paddingVertical: 15,
    paddingLeft: 20,
    marginTop: 5
  },
  closeButton: {
    flexDirection: 'row',
    justifyContent: 'flex-end'
  },
});
const mapStateToProps = (state) => {
  //console.log(state);
  return state;
};

DrawerMenu.propTypes = {
  closeDrawer: PropTypes.func,
  navigator: PropTypes.object,
  userData: PropTypes.object,
  localeValue: PropTypes.string,
  logoutAction: PropTypes.func
};

export default connect(mapStateToProps, { logoutAction })(DrawerMenu);
