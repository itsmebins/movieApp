import React, { Component } from 'react';
import { View, Text, TouchableOpacity, ActivityIndicator, Image,
Alert } from 'react-native';
import { Input } from '../common/Input.js';
import { Button } from '../common/Button.js';
import { validateEmail } from '../../utils/CommonUtil.js';

class ResetPassword extends Component {

constructor(props) {
  super(props);
  this.state = {
    email: '',
    APICallInProgress: false
  };
  this.resetPassword = this.resetPassword.bind(this);
}

  resetPassword() {
  	if (this.state.email === '') {
  Alert.alert( 'Error', 'Please enter username(email)' );
  		return;
  	}
  	 if (!validateEmail(this.state.email)) {
  		Alert.alert( 'Error', 'Please enter a valid email' );
  		return;
  	}
  	//this.setState({ authenticating: true });
  	this.props.authenticateUserAPI({ "userId": this.state.identity,
  	"password":  this.state.password });
  	//onChangeText={(value) => this.setState({ identity: value })
  };

  upadateState(key, value) {
     this.setState({ [key]: value });
   };

  renderButton() {
  	if (this.state.APICallInProgress === true) {
  		return (
  			<ActivityIndicator size='large' color='#20a8d8' />
  		);
  	}

  	return (
  		<Button
  			onPress={this.resetPassword}
  			buttonStyle={styles.buttonContainer}
  			textStyle={styles.buttonText}
  			text='Reset Password'
  		/>
  	);
  };

	render() {
		return (
      <View style={styles.container}>
        <View style={styles.contentContainer}>
          <View style={styles.content}>
            <View style={styles.inputContainer}>
              <Input
                iconName='user'
                iconColor='black'
                iconSize={25}
                iconPackage="fontAwesome"
                placeholder='Username(email)'
                autoCapitalize={'none'}
                returnKeyType={'done'}
                autoCorrect={false}
                inputStyle={styles.input}
								textValue={this.state.identity}
								onChangeText={(value) => this.upadateState('email', value)}
              />
              {this.renderButton()}
            </View>
          </View>
        </View>

      </View>
		);
	}

}

const styles = {
  container: {
    flex: 1,
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
    margin: 20,
    padding: 10,
  },
  link: {
    fontSize: 17,
    height: 45,
    marginBottom: 10,
    padding: 10,
		fontWeight: 'bold'
  },
	error: {
    fontSize: 15,
		color: 'red',
    height: 45,
    marginBottom: 10,
    padding: 10,
		fontWeight: 'bold'
  },
	mark: {
    height: 80,
    width: 80,
		padding: 10
  }
};

export default ResetPassword;
