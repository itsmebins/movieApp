import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Text, TouchableOpacity, ActivityIndicator, Image,
Alert, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import { Input } from '../common/Input.js';
import { Button } from '../common/Button.js';
import { authenticateUserAPI } from './../../actions/AuthActions.js';
import { changeLocaleValue } from './../../actions/LocaleActions.js';
//import { intlShape, injectIntl } from 'react-intl';
import { getLocaleValue } from './../../utils/I18NUtil.js';

class Login extends Component {
	constructor(props) {
		super(props);
		this.state = {
			errorMessage: props.appErrorMessage ? props.appErrorMessage : '',
			identity: props.userName ? props.userName : '',
			password: '',
			secureTextEntry: true,
			authenticating: props.isAuthenticating ? props.isAuthenticating : false
		};
		this.doLogin = this.doLogin.bind(this);
		this.upadateState = this.upadateState.bind(this);
		this.goToScreen = this.goToScreen.bind(this);
		console.log(getLocaleValue('en', 'user.firstName'));
	};

	goToScreen(screenName) {
		//this._toggleDrawer();
		console.log(screenName);
		this.props.navigator.push({
			screen: screenName,
			passProps: {
				localeValue: this.props.localeValue
			},
			title: getLocaleValue(this.props.localeValue, 'SIGNUP')
		});
	};

	changeLanguage(localeVale) {
		console.log(localeVale);
		this.props.changeLocaleValue(localeVale)
	};

doLogin() {
	//console.log(this.state);
	if (this.state.identity === '') {

Alert.alert( 'Error', 'Please enter username' );
		//alert('Please enter username');
		return;
	}
	if (this.state.password === '') {
		Alert.alert( 'Error', 'Please enter password' );
		//alert('Please enter password');
		return;
	}
	//this.setState({ authenticating: true });
	this.props.authenticateUserAPI({ "userId": this.state.identity,
	"password":  this.state.password }, this.props.navigator);
	//onChangeText={(value) => this.setState({ identity: value })
};

upadateState(key, value) {
	if (key === 'identity') {
	this.setState({ identity: value });
	}
	if (key === 'password') {
	this.setState({ password: value });
	}
	if (key === 'secureTextEntry') {
	this.setState({ secureTextEntry: !this.state.secureTextEntry });
	}
	//console.log(this.state);
};

renderButton() {
	if (this.props.isAuthenticating === true) {
		return (
			<ActivityIndicator size='large' color='#20a8d8' />
		);
	}

	return (
		<Button
			onPress={this.doLogin}
			buttonStyle={styles.buttonContainer}
			textStyle={styles.buttonText}
			text={getLocaleValue(this.props.localeValue, 'LOGIN')}
		/>
	);
};
  render() {
		console.log(this.props);
		const eyeIcon = this.state.secureTextEntry ? 'eye-slash' : 'eye';
		const erroMsg = this.props.appErrorMessage ? this.props.appErrorMessage : '';
    return (
			<ScrollView style={{backgroundColor: '#e4e5e6'}}>
      <View style={styles.container}>
        <View style={styles.contentContainer}>
          <View style={styles.content}>
						<Image style={styles.mark}
							 source={require('../../images/zigway_logo.png')}
						 />
            <View style={styles.inputContainer}>
              <Input
                iconName='user'
                iconColor='black'
                iconSize={25}
                iconPackage="fontAwesome"
                placeholder={getLocaleValue(this.props.localeValue, 'USERNAME_E')}
                autoCapitalize={'none'}
                returnKeyType={'done'}
                autoCorrect={false}
                inputStyle={styles.input}
								textValue={this.state.identity}
								onChangeText={(value) => this.upadateState('identity', value)}
              />

              <Input
                iconName='lock'
                iconColor='black'
                iconSize={25}
                iconStyle=''
                iconPackage="fontAwesome"
                secureTextEntry={this.state.secureTextEntry}
                placeholder={getLocaleValue(this.props.localeValue, 'PASSWORD')}
                autoCorrect={false}
                inputStyle={styles.input}
                showPassword={true}
								passwordIcon={eyeIcon}
								textValue={this.state.password}
								onChangeText={(value) => this.upadateState('password', value)}
								onPressPasswordIcon={() => this.upadateState('secureTextEntry', '')}
              />

              {this.renderButton()}
							<Text style={styles.error}>{erroMsg}</Text>
            </View>
            <View style={styles.signUpContainer}>
              <TouchableOpacity
								onPress={() => {
									this.goToScreen('LC.Register');
								}}>
                <Text style={styles.link}>
									{getLocaleValue(this.props.localeValue, 'REGISTER')}
								</Text>
              </TouchableOpacity>
              <TouchableOpacity
								onPress={() => {
									this.goToScreen('LC.ResetPassword');
								}}>
                <Text style={styles.link}>
									{getLocaleValue(this.props.localeValue, 'FORGET_PWD')}
								</Text>
              </TouchableOpacity>
            </View>
						<View style={{flexDirection: 'row', justifyContent: 'space-between',
							margin: 10}}>
							<View>
	              <TouchableOpacity
									onPress={() => {
										this.changeLanguage('my');
									}}>
									<Image style={styles.flag}
										 source={require('../../images/Myanmar.png')}
									 />
	              </TouchableOpacity>
							</View>
							<View style={{paddingLeft:10}}>
	              <TouchableOpacity
									onPress={() => {
										this.changeLanguage('en');
									}}>
									<Image style={styles.flag}
										 source={require('../../images/USA.png')}
									 />
	              </TouchableOpacity>
							</View>
						</View>
          </View>
        </View>
      </View>
		</ScrollView>
    );
  }
}

Login.propTypes = {
	navigator: PropTypes.object,
	appErrorMessage: PropTypes.string,
	userName: PropTypes.string,
	isAuthenticating: PropTypes.bool,
	localeValue: PropTypes.string
};

const styles = {
  container: {
    flex: 1,
		backgroundColor: '#e4e5e6',
		marginTop:30
  },
  contentContainer: {
    flex: 1,
    alignSelf: 'stretch',
    justifyContent: 'center',
    backgroundColor: '#e4e5e6'
  },
  content: {
    alignItems: 'center'
  },
  logo: {
    color: 'white',
    fontSize: 40,
    fontStyle: 'italic',
    fontWeight: 'bold',
    textShadowColor: '#252525',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 15,
    marginBottom: 20
  },
  inputContainer: {
    margin: 20,
    marginBottom: 0,
    padding: 20,
    paddingBottom: 10,
    alignSelf: 'stretch',
    borderWidth: 1,
    backgroundColor: 'white',
		borderColor: '#e4e5e6',
  },
  input: {
    fontSize: 16,
    height: 45,
    padding: 10,
    marginBottom: 10,
    backgroundColor: 'white',
		color: 'black',
		borderColor: '#e4e5e6',
		borderWidth: 1,
  },
  buttonContainer: {
    margin: 20,
    padding: 10,
    alignSelf: 'stretch',
    borderWidth: 1,
    borderColor: '#fff',
    backgroundColor: '#20a8d8',
    borderRadius: 25
  },
  buttonText: {
    fontSize: 17,
    fontWeight: 'bold',
    textAlign: 'center',
		color: 'white',
  },
  signUpContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10,
    paddingRight: 10
  },
  link: {
    fontSize: 17,
    //height: 20,
    //marginBottom: 10,
    paddingRight: 15,
		fontWeight: 'bold'
  },
	flag: {
    height: 48,
		width: 48,
  },
	error: {
    fontSize: 15,
		color: 'red',
    marginBottom: 10,
    padding: 10,
		fontWeight: 'bold'
  },
	mark: {
    height: 100,
    width: 200,
		padding: 10
  }
};
const mapStateToProps = (state, ownProps) => {
	console.log(state);
	console.log(ownProps);
	if (state.auth) {
		return {...state.auth, localeValue: state.appState.localeValue};
		//const { authenticated, accesstoken, userName, appErrorMessage, isAuthenticating } = state.auth;
	 // return { authenticated, accesstoken, userName, appErrorMessage, isAuthenticating };
	} else {
		const { authenticated, accesstoken, userName, appErrorMessage, isAuthenticating } = state;
	  return { authenticated, accesstoken, userName, appErrorMessage, isAuthenticating };
	}

};

export default connect(mapStateToProps, { authenticateUserAPI, changeLocaleValue })(Login);
