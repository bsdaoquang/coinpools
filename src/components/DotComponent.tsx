import React from 'react';
import {View} from 'react-native';
import {appColors} from '../constants/appColors';

const DotComponent = () => (
  <View
    style={{
      position: 'absolute',
      top: 0,
      right: 0,
      backgroundColor: appColors.white,
      padding: 2,
      borderRadius: 50,
    }}
  >
    <View
      style={{
        backgroundColor: appColors.red4,
        width: 8,
        height: 8,
        borderRadius: 50,
      }}
    />
  </View>
);

export default DotComponent;
