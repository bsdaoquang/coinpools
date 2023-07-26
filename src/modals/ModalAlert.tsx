import React, {ReactNode} from 'react';
import {Modal, View} from 'react-native';
import {global} from '../styles/global';

interface Props {
  visible: boolean;
  content: ReactNode;
}

export const ModalAlert = (props: Props) => {
  const {visible, content} = props;

  return (
    <Modal
      style={{flex: 1}}
      animationType="slide"
      transparent
      visible={visible}>
      <View
        style={{
          flex: 1,
          backgroundColor: 'rgba(0,0,0, 0.5)',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <View style={[global.modalContent]}>{content}</View>
      </View>
    </Modal>
  );
};
