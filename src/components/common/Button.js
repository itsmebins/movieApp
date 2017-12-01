import React from 'react';
import PropTypes from 'prop-types';
import { Text, TouchableOpacity } from 'react-native';

const Button = (props) => {
  // to do -- Need to merge passed and default style and use single one
  const passedButtonStyle = props.buttonStyle ? props.buttonStyle : defaultstyles.buttonStyle;
  const passedTextStyle = props.textStyle ? props.textStyle : defaultstyles.textStyle;
  return (
    <TouchableOpacity
      onPress={props.onPress}
      style={[defaultstyles.buttonStyle, passedButtonStyle]}
      disabled={props.disabled}
    >
      <Text style={passedTextStyle}> {props.text}</Text>
    </TouchableOpacity>
  );
};

Button.propTypes = {
  onPress: PropTypes.func,
  disabled: PropTypes.bool
};

const defaultstyles = {
  buttonStyle: {
    margin: 20,
    padding: 10,
    alignSelf: 'stretch',
    borderWidth: 1,
    borderColor: '#fff',
  },
  textStyle: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center'
  }
};

export { Button };
