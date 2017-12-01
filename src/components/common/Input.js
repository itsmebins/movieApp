import React from 'react';
import PropTypes from 'prop-types';
import {
  StyleSheet,
  View,
  TextInput,
  Dimensions,
  TouchableOpacity
} from 'react-native';
import { CustomIcon } from './CustomIcon.js';
import ConditinalTag from '../common/ConditinalTag.js';

const DEVICE_WIDTH = Dimensions.get('window').width;


const Input = (props) => {
  //const dss= {[{...styles.red}, {...styles.bigblue}]}
  const name = props.iconName ? props.iconName : 'mobile';
  const color = props.iconColor ? props.iconColor : 'white';
  const size = props.iconSize ? props.iconSize : 25;
  const iConstyle = props.iconStyle ? props.iconStyle : styles.inlineIcon;
  const iconPackage = props.iconPackage ? props.iconPackage : '';
  const inputStyle = props.inputStyle ? props.inputStyle : styles.input;
  const passwordIcon = props.passwordIcon ? props.passwordIcon : null;
  const showPassword = props.showPassword ? props.showPassword : false;
  const onChangeText = props.onChangeText ? props.onChangeText : null;
  const textValue = props.textValue ? props.textValue : '';

  if (!props.iconName) {
    return (
      <TextInput
        style={[styles.input, inputStyle]}
        placeholder={props.placeholder}
        secureTextEntry={props.secureTextEntry}
        autoCorrect={props.autoCorrect}
        autoCapitalize={props.autoCapitalize}
        returnKeyType={props.returnKeyType}
        placeholderTextColor={props.placeholderColor}
        underlineColorAndroid='transparent'
        onChangeText={onChangeText}
        value={textValue}
      />
    );
  }
  return (
    <View>
      <CustomIcon
        name={name}
        color={color}
        size={size}
        iconPackage={iconPackage}
        style={[styles.inlineIcon, iConstyle]}
      />
      <TextInput
        style={[styles.input, inputStyle]}
        placeholder={props.placeholder}
        secureTextEntry={props.secureTextEntry}
        autoCorrect={props.autoCorrect}
        autoCapitalize={props.autoCapitalize}
        returnKeyType={props.returnKeyType}
        placeholderTextColor={props.placeholderColor}
        underlineColorAndroid='transparent'
        onChangeText={onChangeText}
        value={textValue}
      />
      { showPassword === true ?   <View
          style={{position: 'absolute',zIndex: 99, width: 22, height: 22,
          left: DEVICE_WIDTH-100, top: 9}}
          condition={showPassword}>
          <TouchableOpacity onPress={props.onPressPasswordIcon}>
            <CustomIcon
              name={passwordIcon}
              color={color}
              size={size}
              iconPackage={iconPackage}
            />
          </TouchableOpacity>
        </View> :
       null}

    </View>
  );
};

Input.propTypes = {
  placeholder: PropTypes.string.isRequired,
  secureTextEntry: PropTypes.bool,
  autoCorrect: PropTypes.bool,
  autoCapitalize: PropTypes.string,
  returnKeyType: PropTypes.string,
  onPressPasswordIcon: PropTypes.func,
  iconName: PropTypes.string,
  iconColor:PropTypes.string,
  iconSize: PropTypes.number
};

const styles = StyleSheet.create({
  input: {
    backgroundColor: '#d24a50',
    height: 41,
    marginHorizontal: 20,
    paddingLeft: 45,
    borderRadius: 20,
    color: '#ffffff',
  },
  inlineIcon: {
    position: 'absolute',
    zIndex: 99,
    width: 22,
    height: 22,
    left: 35,
    top: 9,
  },
  inlineIconPasswordVisible: {
    position: 'absolute',
    zIndex: 99,
    width: 22,
    height: 22,
    left: DEVICE_WIDTH-100,
    top: 9
  },
});

export { Input };
