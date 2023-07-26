import auth from '@react-native-firebase/auth';
import React, {useEffect, useRef, useState} from 'react';
import {FlatList, View} from 'react-native';
import {
  AddMessageComponent,
  Container,
  RowComponent,
  SpaceComponent,
  TextComponent,
  UserAvatar,
} from '../../components';
import {appColors} from '../../constants/appColors';
import {appSize} from '../../constants/appSize';
import {Message} from '../../models/Message';
import firestore from '@react-native-firebase/firestore';

const ConversationsScreen = ({navigation, route}: any) => {
  const {item}: {item: {user1: string; user2: string; createdAt: number}} =
    route.params;

  const [conversations, setConversations] = useState<any[]>([]);

  const scrollRef = useRef<any>(null);
  const user = auth().currentUser;

  useEffect(() => {
    getAllConversationById();
  }, []);

  const getAllConversationById = () => {
    if (user && user.uid) {
      const filter = firestore()
        .collection('messages')
        .where('user1', '==', user.uid)
        .where('user2', '==', item.user2);

      filter.onSnapshot(snap => {
        if (!snap.empty) {
          const items: Message[] = [];

          snap.forEach((item: any) => {
            items.unshift({
              id: item.id,
              ...item.data(),
            });
          });

          items.sort((a, b) => a.createdAt - b.createdAt);
          setConversations(items);
        } else {
          console.log('message not found');
        }
      });
    }
  };

  // console.log(conversations);

  const RenderContent = (item: Message, index: number) => (
    <>
      <RowComponent
        styles={{
          justifyContent: item.from !== user?.uid ? 'flex-start' : 'flex-end',
          alignItems: 'flex-start',
          // marginTop: 8,
          marginTop:
            index > 0 && conversations[index - 1].from === item.from ? 4 : 16,
        }}>
        {item.from !== user?.uid &&
          (index > 0 && conversations[index - 1].from === item.from ? (
            <SpaceComponent width={30} />
          ) : (
            <UserAvatar uid={[item.from]} />
          ))}

        <View
          style={{
            width: (appSize.width - 32) * 0.75,
            padding: 8,
            borderRadius: 8,
            marginLeft: 8,
            backgroundColor:
              item.from !== user?.uid ? appColors.white : appColors.info2,
          }}>
          <TextComponent text={item.content} flex={0} />
        </View>
      </RowComponent>
      {index > 0 &&
        index < conversations.length - 1 &&
        conversations[index + 1].from !== item.from && (
          <RowComponent styles={{marginTop: 8}}>
            <TextComponent
              text={`${new Date(item.updatedAt).toISOString()}`}
              flex={0}
              color={appColors.gray}
              size={12}
            />
          </RowComponent>
        )}
    </>
  );

  return (
    <>
      <Container title={item ? item.user2 : ''} back>
        <View
          style={[
            {
              paddingBottom: 12,
            },
          ]}>
          {conversations.length > 0 && (
            <FlatList
              ref={scrollRef}
              // onLayout={() => scrollRef.current.scrollToEnd()}
              onContentSizeChange={() => scrollRef.current.scrollToEnd()}
              showsVerticalScrollIndicator={false}
              data={conversations}
              renderItem={({item, index}) => RenderContent(item, index)}
            />
          )}
        </View>
      </Container>
      <AddMessageComponent toUser={item.user2} />
    </>
  );
};

export default ConversationsScreen;
