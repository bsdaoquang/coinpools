import {View, Text, Image} from 'react-native';
import React from 'react';
import {global} from '../styles/global';

interface Props {
  uid: string[];
  size?: number;
}

const UserAvatar = (props: Props) => {
  const {uid, size} = props;

  return (
    <Image
      source={{
        uri: 'https://gamek.mediacdn.vn/133514250583805952/2022/5/18/photo-1-16528608926331302726659.jpg',
      }}
      style={[
        global.avatar,
        {
          width: size ?? 30,
          height: size ?? 30,
        },
      ]}
    />
  );
};

export default UserAvatar;
