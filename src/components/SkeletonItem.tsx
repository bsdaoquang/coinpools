import React, {ReactNode} from 'react';
import {StyleProp, View, ViewStyle} from 'react-native';
import {appColors} from '../constants/appColors';

interface Props {
  color?: string;
  width?: number | string;
  height?: number;
  children?: ReactNode;
  styles?: StyleProp<ViewStyle>;
}

const SkeletonItem = (props: Props) => {
  const {color, width, height, children, styles} = props;

  return (
    <View
    // style={{...styles,
    //   borderRadius: 8,
    //   backgroundColor: color ?? appColors.gray7,
    //   padding: 8,
    //   width: width ?? '100%',
    //   height: height,

    // }}>
    >
      {children}
    </View>
  );
};

export default SkeletonItem;
