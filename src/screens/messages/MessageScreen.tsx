import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import {AddSquare, ArrowRight2} from 'iconsax-react-native';
import React, {useEffect, useState} from 'react';
import {FlatList, View} from 'react-native';
import {
  ButtonIcon,
  Container,
  RowComponent,
  SectionComponent,
  TextComponent,
  UserAvatar,
} from '../../components';
import {appColors} from '../../constants/appColors';
import {fontFamilys} from '../../constants/fontFamlily';
import {Message} from '../../models/Message';
import {global} from '../../styles/global';
import {useSelector} from 'react-redux';
import {authSelector} from '../../redux/reducers/authReducer';

const MessageScreen = ({navigation}: any) => {
  // const [conversations, setConversations] = useState<any[]>([]);
  const [messages, setMessages] = useState<Message[]>([]);
  const user = useSelector(authSelector);

  useEffect(() => {
    getAllConversationByUid();
  }, []);

  const getAllConversationByUid = async () => {
    // Filter in the array, retrieve the conversations whose uids contain the user's uid
    if (user && user.uid) {
      const filter = firestore()
        .collection('conversations')
        .where('user1', '==', user.uid);

      filter.onSnapshot(snap => {
        if (!snap.empty) {
          const items: Message[] = [];

          snap.forEach((item: any) => {
            items.push({
              id: item.id,
              ...item.data(),
            });
          });

          setMessages(items);
        } else {
          console.log('Message by user not found!');
        }
      });
    }
  };

  const handleAddNewConversation = async () => {
    const item = {
      user1: user?.uid,
      user2: `Bot${messages.length + 1}`,
      createdAt: Date.now(),
    };

    await firestore()
      .collection('conversations')
      .add(item)
      .then(() => {
        navigation.navigate('Conversations', {
          item,
        });
      });
  };

  const RenderMessage = (item: Message) => (
    <RowComponent
      key={`message${item.id}`}
      styles={global.listItem}
      onPress={() => navigation.navigate('Conversations', {item})}>
      <UserAvatar uid={[item.user1]} />
      <View style={{flex: 1, paddingHorizontal: 12}}>
        <TextComponent text={item.user2} font={fontFamilys.medium} />
        <TextComponent
          text={item.content}
          line={1}
          size={12}
          color={appColors.gray}
        />
      </View>
      <View>
        <TextComponent
          text={`${new Date(item.createdAt).getHours()}:${new Date(
            item.createdAt,
          ).getMinutes()}`}
          line={1}
          size={12}
          flex={0}
          color={appColors.gray}
        />
        {/* {Badge(2)} */}
      </View>
    </RowComponent>
  );

  const Badge = (count: number) => (
    <RowComponent
      styles={{
        borderRadius: 100,
        padding: 2,
        backgroundColor: appColors.red4,
        width: 18,
        height: 18,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <TextComponent
        text={count.toFixed()}
        size={10}
        color={appColors.white}
        flex={0}
      />
    </RowComponent>
  );

  return (
    <Container barStyle="dark-content">
      {messages.length > 0 ? (
        <FlatList
          showsVerticalScrollIndicator={false}
          data={messages}
          renderItem={({item}) => RenderMessage(item)}
        />
      ) : (
        <SectionComponent>
          <RowComponent>
            <TextComponent flex={0} text="Messages not found" />
          </RowComponent>

          <RowComponent
            styles={{marginTop: 20}}
            onPress={handleAddNewConversation}>
            <TextComponent
              text="Make new message demo with Bot"
              color={appColors.red4}
            />
            <ArrowRight2 size={18} color={appColors.red4} />
          </RowComponent>
        </SectionComponent>
      )}
    </Container>
  );
};

export default MessageScreen;
