import React from 'react';
import {StyleProp, TextStyle} from 'react-native';
import {fontFamilys} from '../constants/fontFamlily';
import TextComponent from './TextComponent';

interface Props {
  size?: number;
  styles?: StyleProp<TextStyle>;
  text: string;
  color?: string;
  line?: number;
  flex?: number;
  height?: number;
  font?: string;
}

const TitleComponent = (props: Props) => {
  const {size, styles, text, color, line, flex, height, font} = props;

  return (
    <TextComponent
      styles={styles}
      text={text}
      size={size ?? 16}
      font={font ?? fontFamilys.medium}
      color={color}
      line={line}
      height={height ? height : size ? size + 6 : 22}
      flex={flex ?? 1}
    />
  );
};

export default TitleComponent;
