import React from 'react';
import {ActivityIndicator, Modal, View} from 'react-native';
import {TextComponent} from '../components';
import {appColors} from '../constants/appColors';

interface Props {
  visible: boolean;
  mess?: string;
}

export const ModalLoading = (props: Props) => {
  const {visible, mess} = props;

  return (
    <Modal style={{flex: 1}} transparent visible={visible}>
      <View
        style={{
          flex: 1,
          backgroundColor: 'rgba(0,0,0, 0.5)',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <ActivityIndicator color={appColors.white} size={32} />
        <TextComponent
          text={mess ?? 'Loading...'}
          flex={0}
          color={appColors.white}
        />
      </View>
    </Modal>
  );
};
