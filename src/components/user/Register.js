import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Text, ActivityIndicator, Image, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import { Input } from '../common/Input.js';
import { Button } from '../common/Button.js';
import { getLocaleValue } from './../../utils/I18NUtil.js';

class Register extends Component {
	constructor(props) {
		super(props);
		this.state = {
			errorMessage: props.appErrorMessage ? props.appErrorMessage : '',
			userName: props.userName ? props.userName : '',
			secureTextEntry: true,
			password: '',
			email: "",
			phone: "",
			authenticating: props.isAuthenticating ? props.isAuthenticating : false
		};
		this.upadateState = this.upadateState.bind(this);
	};


upadateState(key, value) {
	this.setState({ [key]: value });
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
			text={getLocaleValue(this.props.localeValue, 'SIGNUP')}
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
								textValue={this.state.userName}
								onChangeText={(value) => this.upadateState('userName', value)}
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
								onPressPasswordIcon={() => this.upadateState('secureTextEntry',
							this.state.secureTextEntry ? false : true)}
              />

							<Input
                iconName='phone'
                iconColor='black'
                iconSize={25}
                iconStyle=''
                iconPackage="fontAwesome"
                placeholder={getLocaleValue(this.props.localeValue, 'PHONE')}
                autoCorrect={false}
                inputStyle={styles.input}
								textValue={this.state.phone}
								onChangeText={(value) => this.upadateState('phone', value)}
              />

							<Input
                iconName='email'
                iconColor='black'
                iconSize={25}
                iconStyle=''
                iconPackage="materialIcons"
                placeholder={getLocaleValue(this.props.localeValue, 'EMAIL')}
                autoCorrect={false}
                inputStyle={styles.input}
								textValue={this.state.email}
								onChangeText={(value) => this.upadateState('email', value)}
              />
              {this.renderButton()}
							<Text style={styles.error}>{erroMsg}</Text>
            </View>

          </View>
        </View>
      </View>
		</ScrollView>
    );
  }
}

Register.propTypes = {
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

export default connect(mapStateToProps, null)(Register);
