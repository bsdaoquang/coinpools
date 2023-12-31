import React from 'react';
import {
  Dimensions,
  StyleProp,
  Text,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';
import {SpaceComponent, TextComponent} from '.';
import {appColors} from '../constants/appColors';
import {fontFamilys} from '../constants/fontFamlily';
import {global} from '../styles/global';

interface Props {
  text: string;
  onPress: () => void;
  outline?: boolean;
  color?: string;
  textColor?: string;
  width?: number;
  icon?: any;
  flex?: number;
  disable?: boolean;
  height?: number;
  font?: string;
  styles?: StyleProp<ViewStyle>;
}

const WIDTH = Dimensions.get('window').width;

export const ButtonComponent = (props: Props) => {
  const {
    text,
    textColor,
    color,
    onPress,
    width,
    outline,
    icon,
    flex,
    disable,
    height,
    font,
    styles,
  } = props;
  return (
    <TouchableOpacity
      disabled={disable}
      onPress={onPress}
      style={[
        {
          width: width,
          flex: flex,
          borderWidth: outline ? 1 : 0,
          borderColor: color ? color : appColors.primary,
          borderRadius: 8,
          height: height ?? 40,
          paddingVertical: 8,
          paddingHorizontal: 16,
          backgroundColor: outline
            ? appColors.white
            : color
            ? color
            : disable
            ? appColors.gray
            : appColors.primary,
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'row',
        },
        styles,
      ]}>
      {icon && icon}
      <SpaceComponent width={4} />
      <TextComponent
        flex={0}
        size={14}
        text={text}
        styles={{
          color: outline
            ? appColors.primary
            : textColor
            ? textColor
            : appColors.white,

          fontFamily: font ?? fontFamilys.regular,
        }}
      />
    </TouchableOpacity>
  );
};
