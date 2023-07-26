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
  const [backgroundColor, setBackgroundColor] = useState('#DFFDE4');
  const [labelColor, setLabelColor] = useState(appColors.text);
  useEffect(() => {
    switch (text) {
      case 'Từ chối':
      case 'Trễ hạn':
      case 'Bị từ chối':
      case 'Hủy phiếu':
        setBackgroundColor('#FFE3E3');
        setLabelColor('#910000');
        break;
      case 'Hoàn thành':
        setBackgroundColor('#FFE3E3');
        setLabelColor('#1B7C31');
        break;

      case 'Chờ phê duyệt':
        setBackgroundColor('#FFEFCF');
        setLabelColor('#C16C07');
        break;

      default:
        setBackgroundColor('#E3F1FF');
        setLabelColor(appColors.primary);
        break;
    }
  }, [text]);

  return (
    <View
      style={[
        {
          borderRadius: 8,
          backgroundColor: color ?? backgroundColor,
          marginRight: 4,
        },
        styles,
      ]}>
      <Text
        numberOfLines={1}
        style={[
          global.tag,
          {
            color: textColor
              ? textColor
              : labelColor
              ? labelColor
              : appColors.white,
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
