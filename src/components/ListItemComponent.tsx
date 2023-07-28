import {View, Text} from 'react-native';
import React, {ReactNode} from 'react';
import RowComponent from './RowComponent';
import TextComponent from './TextComponent';
import {ArrowRight2} from 'iconsax-react-native';
import {appColors} from '../constants/appColors';
import SpaceComponent from './SpaceComponent';

interface Props {
  icon?: ReactNode;
  title: string;
  right?: ReactNode;
  onPress: () => void;
}

const ListItemComponent = (props: Props) => {
  const {icon, title, right, onPress} = props;

  return (
    <RowComponent
      onPress={onPress}
      styles={{
        borderBottomColor: appColors.gray7,
        borderBottomWidth: 1,
        paddingVertical: 12,
        minHeight: 40,
      }}>
      {icon}
      <SpaceComponent width={12} />
      <TextComponent text={title} size={12} />
      {right && right}

      <ArrowRight2
        style={{marginLeft: right ? 8 : 0}}
        size={18}
        color={appColors.gray}
      />
    </RowComponent>
  );
};

export default ListItemComponent;
