import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';


const propTypes = {
  condition: PropTypes.bool,
  children: PropTypes.node,
  style: PropTypes.object,
  className: PropTypes.string,
  tag: PropTypes.string
};

const defaultProps = {
  tag: 'View'
};

const ConditinalTag = (props) => {
  const {
   children,
   condition,
   style
 } = props;

const conditionElement = condition
 ? React.createElement(View, { style }, children)
 : null;
  return conditionElement;
};

ConditinalTag.defaultProps = defaultProps;
ConditinalTag.propTypes = propTypes;

export default ConditinalTag;
