import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {appColors} from '../constants/appColors';
import {fontFamilys} from '../constants/fontFamlily';
import {global} from '../styles/global';
import RowComponent from './RowComponent';
import TitleComponent from './TitleComponent';
import TextComponent from './TextComponent';

interface Props {
  title: string;
  seemore?: boolean;
  onPress?: () => void;
  size?: number;
  color?: string;
  font?: string;
  flex?: number;
  // count?: number;
}

const TabbarComponent = ({
  title,
  seemore,
  onPress,
  size,
  color,
  font,
  flex,
}: // count,
Props) => {
  return (
    <View
      style={{
        justifyContent: 'center',
        flexDirection: 'row',
        marginBottom: 16,
        alignItems: 'center',
        // backgroundColor: 'coral',
      }}>
      <RowComponent
        styles={{flex: 1, justifyContent: 'flex-start', alignItems: 'center'}}>
        <TitleComponent
          styles={{
            ...global.bigTitle,
            flex: flex ?? 0,
            fontSize: size ?? 16,
            color: color ?? appColors.text,
            fontFamily: font ?? fontFamilys.bold,
          }}
          text={title}
        />
      </RowComponent>

      {seemore && (
        <TouchableOpacity onPress={onPress}>
          <TextComponent styles={global.seemore} text="See more" />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default TabbarComponent;
