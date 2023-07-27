import {View, Text} from 'react-native';
import React from 'react';
import {TextComponent} from '../../components';
import LinearGradient from 'react-native-linear-gradient';
import {global} from '../../styles/global';
import {appColors} from '../../constants/appColors';

const Pending = () => {
  return (
    <LinearGradient
      style={[
        global.container,
        {height: '100%', borderTopColor: appColors.white, borderTopWidth: 1},
      ]}
      colors={[
        'rgba(206,213,223,0.8)',
        'rgba(206,213,223,0)',
      ]}></LinearGradient>
  );
};

export default Pending;
