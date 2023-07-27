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
        uri: 'https://tenant-assets.meiqiausercontent.com/avatars/361672/YZ4b/anlb7T2jXv7GJuH1nBg4.jpg',
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
