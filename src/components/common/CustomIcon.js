import React from 'react';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/FontAwesome';
//import IonIcons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import EntypoIcons from 'react-native-vector-icons/Entypo';

const CustomIcon = (props) => {
  const name = props.name ? props.name : 'mobile';
  const color = props.color ? props.color : 'white';
  const size = props.size ? props.size : 25;
  const style = props.style ? props.style : {};
  const iconPackage = props.iconPackage ? props.iconPackage : 'fontAwesome';
  if (iconPackage === 'fontAwesome') {
    return (
      <Icon
        style={style}
        name={name}
        color={color}
        size={size}
      />
    );
  }
  if (iconPackage === 'entypo') {
    return (
      <EntypoIcons
        style={style}
        name={name}
        color={color}
        size={size}
      />
    );
  }
  if (iconPackage === 'materialIcons') {
    return (
      <MaterialIcons
        style={style}
        name={name}
        color={color}
        size={size}
      />
    );
  }
  return (
    <Icon
      style={style}
      name={name}
      color={color}
      size={size}
    />
  );
};

CustomIcon.propTypes = {
  name: PropTypes.string,
  color:PropTypes.string,
  size: PropTypes.number
};

export { CustomIcon };
