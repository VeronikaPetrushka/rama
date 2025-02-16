import React from 'react';
import { Image, StyleSheet } from 'react-native';

const Icons = ({ type }) => {

  let imageSource;
  let iconStyle = [styles.icon];

  switch (type) {
    case 'back':
      imageSource = require('../assets/common/back.png');
      iconStyle.push(styles.color);
      break;
    case 'close':
      imageSource = require('../assets/common/close.png');
      break;
    case 'on':
      imageSource = require('../assets/common/on.png');
      iconStyle.push(styles.light);
      break;
    case 'off':
      imageSource = require('../assets/common/off.png');
      iconStyle.push(styles.light);
      break;
    case 'done':
      imageSource = require('../assets/common/done.png');
      break;
  }

  return (
    <Image 
      source={imageSource} 
      style={iconStyle} 
    />
  );
};

const styles = StyleSheet.create({
  icon: {
    width: '100%',
    height: '100%',
    objectFit: 'cover'
  },
  color: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    tintColor: '#ffe8e8',
  },
  light: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    tintColor: '#fc4747',
  },
  contain: {
    width: '100%',
    height: '100%',
    objectFit: 'contain',
  }
});

export default Icons;
