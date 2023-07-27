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
          borderRadius: 8,
          backgroundColor: color,
          marginRight: 4,
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
            fontSize: appSize.textSize,
            lineHeight: 16.37,
          },
        ]}>
        {text}
      </Text>
    </View>
  );
};

export default TagComponent;
