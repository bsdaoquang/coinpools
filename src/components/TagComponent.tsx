import React, {useEffect, useState} from 'react';
import {StyleProp, Text, View, ViewStyle} from 'react-native';
import {appColors} from '../constants/appColors';
import {fontFamilys} from '../constants/fontFamlily';
import {global} from '../styles/global';
import {appSize} from '../constants/appSize';

interface Props {
  text: string;
  color?: string;
  textColor?: string;
  styles?: StyleProp<ViewStyle>;
}

const TagComponent = ({text, color, textColor, styles}: Props) => {
  return (
    <View
      style={[
        {
          borderRadius: 4,
          backgroundColor: color,
        },
        styles,
      ]}>
      <Text
        numberOfLines={1}
        style={[
          global.tag,
          {
            color: textColor ? textColor : appColors.white,
            fontFamily: fontFamilys.regular,
            fontSize: 10,
          },
        ]}>
        {text}
      </Text>
    </View>
  );
};

export default TagComponent;
