import {View, Text} from 'react-native';
import React from 'react';
import {RowComponent, TextComponent} from '.';
import {global} from '../styles/global';
import {appColors} from '../constants/appColors';

interface Props {
  text?: string;
  placement?: 'center' | 'right' | 'left';
}

const DividerComponent = (props: Props) => {
  const {text, placement} = props;

  return (
    <RowComponent>
      <View style={global.dividerStyle} />

      {text && (
        <TextComponent
          text={text}
          styles={{marginHorizontal: 8}}
          flex={0}
          color={appColors.gray1}
        />
      )}
      <View style={global.dividerStyle} />
    </RowComponent>
  );
};

export default DividerComponent;
