import React, {ReactNode, useEffect, useState} from 'react';
import {Platform, StyleProp, Text, TextStyle} from 'react-native';
import {appColors} from '../constants/appColors';
import {fontFamilys} from '../constants/fontFamlily';
import {global} from '../styles/global';
import {appSize} from '../constants/appSize';

const TextComponent = ({
  text,
  size,
  color,
  flex,
  font,
  icon,
  label,
  line,
  height,
  transform,
  styles,
}: {
  text: string;
  size?: number;
  color?: string;
  flex?: number;
  font?: string;
  icon?: ReactNode;
  label?: string;
  line?: number;
  height?: number;
  styles?: StyleProp<TextStyle>;
  transform?: 'none' | 'capitalize' | 'uppercase' | 'lowercase' | undefined;
}) => {
  return (
    <Text
      style={[
        {
          ...global.text,
          fontFamily: font ?? fontFamilys.regular,
          flex: flex ?? 1,
          fontSize: size ?? appSize.textSize,
          color: color ?? appColors.text,
          lineHeight: height ? height : size ? size + 4 : 20,
          textTransform: transform ?? 'none',
        },

        styles,
      ]}
      numberOfLines={line}>
      {text}
    </Text>
  );
};

export default TextComponent;
