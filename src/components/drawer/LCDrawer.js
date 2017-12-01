import React, { Component} from 'react';
import PropTypes from 'prop-types';
import {
	Text,
	View,
	TouchableOpacity,
	ToastAndroid
} from 'react-native';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';
import DrawerMenu from '../menu/DrawerMenu.js';

import styles from '../../Theme/Drawer.js';

class LCDrawer extends Component {
	constructor(props) {
		super(props);

		this._toggleDrawer = this._toggleDrawer.bind(this);
		this._goToScreen = this._goToScreen.bind(this);
	};

	_goToScreen(screenName) {
		this._toggleDrawer();
		console.log(screenName);
		//this.props.navigator.push({
			//screen: screenName
		//});
	};

	_toggleDrawer() {
    console.log('close screen');
		this.props.navigator.toggleDrawer({
			to: 'closed',
			side: 'left',
			animated: true
		});
	}

	render() {
		const iconSearch = (<Icon name="md-search" size={26} color="#9F9F9F" style={[styles.drawerListIcon, { paddingLeft: 2 }]} />);
		const iconMovies = (<Icon name="md-film" size={26} color="#9F9F9F" style={[styles.drawerListIcon, { paddingLeft: 3 }]} />);
		const iconTV = (<Icon name="ios-desktop" size={26} color="#9F9F9F" style={styles.drawerListIcon} />);
		const userData = {
			orgId: this.props.auth.orgId,
			accessToken: this.props.auth.accessToken,
			userId: this.props.auth.userId,
			roles: this.props.auth.roles ? this.props.auth.roles  : [],
			userFullName: this.props.auth.userFullName,
			orgAddr: this.props.auth.orgAddr ? this.props.auth.orgAddr  : {},
			orgName: this.props.auth.orgName,
			localeValue: this.props.localeValue ? this.props.localeValue : 'en'
		}
		return (
			<LinearGradient colors={['rgba(0, 0, 0, 0.7)', 'rgba(0,0,0, 0.9)', 'rgba(0,0,0, 1)']} style={styles.linearGradient}>
        <DrawerMenu closeDrawer={this._toggleDrawer}
					navigator={this.props.navigator}
				  userData={userData}
			    localeValue={this.props.localeValue ? this.props.localeValue : 'en'}
				/>
			</LinearGradient>
		);
	}
}

LCDrawer.propTypes = {
	navigator: PropTypes.object,
	auth: PropTypes.object,
	localeValue: PropTypes.string,
	orgId: PropTypes.string,
	userFullName: PropTypes.string,
	orgName: PropTypes.string,
	userId: PropTypes.string,
	accessToken: PropTypes.string,
	roles: PropTypes.array
};

const mapStateToProps = (state, ownProps) => {
  const auth =  state.auth;
  return {
    auth,
    localeValue: state.appState.localeValue
  };
};

/*const mapStateToProps = (state, ownProps) => {
	console.log(state);
	console.log(ownProps);
	if (state.auth) {
		return {...state.auth, localeValue: state.appState.localeValue};
	}
};  */

export default connect(mapStateToProps)(LCDrawer);


//export default LCDrawer;
