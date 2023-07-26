import {Send2} from 'iconsax-react-native';
import React, {useState} from 'react';
import {appColors} from '../constants/appColors';
import ButtonIcon from './ButtonIcon';
import {InputCompoment} from './InputCompoment';
import RowComponent from './RowComponent';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import {Alert} from 'react-native';

interface Props {
  toUser: string;
}

const AddMessageComponent = (props: Props) => {
  const [message, setMessage] = useState('');

  const {toUser} = props;

  const user = auth().currentUser;

  const handleSendMessage = () => {
    if (user && user.uid) {
      if (message) {
        firestore()
          .collection('messages')
          .add({
            user1: user.uid,
            user2: toUser,
            from: user.uid,
            content: message,
            createdAt: Date.now(),
            isRead: false,
            idModified: false,
            updatedAt: Date.now(),
            like: 0,
          })
          .then(() => {
            setMessage('');
            replyMessageFromBot();
          });
      } else {
        Alert.alert('', 'What is message');
      }
    } else {
      console.log('not login');
    }
  };

  // Auto send message from bot to demo
  const replyMessageFromBot = async () => {
    setTimeout(() => {
      firestore().collection('messages').add({
        user1: user?.uid,
        user2: toUser,
        from: toUser,
        content: message,
        createdAt: Date.now(),
        isRead: false,
        idModified: false,
        updatedAt: Date.now(),
        like: 0,
      });
    }, 1500);
  };

  return (
    <RowComponent
      styles={{
        padding: 8,
        backgroundColor: appColors.white,
      }}>
      <InputCompoment
        placeholder="Message"
        value={message}
        onChange={val => setMessage(val)}
        flex={1}
        clear
        height={38}
        color={appColors.white}
        autoFocus
      />
      <ButtonIcon
        onPress={handleSendMessage}
        icon={<Send2 variant="Bold" size={20} color={appColors.success4} />}
      />
    </RowComponent>
  );
};

export default AddMessageComponent;
