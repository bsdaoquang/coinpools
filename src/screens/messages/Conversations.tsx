import auth from '@react-native-firebase/auth';
import React, {useEffect, useRef, useState} from 'react';
import {
  FlatList,
  ScrollView,
  Touchable,
  TouchableOpacity,
  View,
} from 'react-native';
import {
  AddMessageComponent,
  Container,
  InputCompoment,
  RowComponent,
  SectionComponent,
  SpaceComponent,
  TextComponent,
  TitleComponent,
  UserAvatar,
} from '../../components';
import {appColors} from '../../constants/appColors';
import {appSize} from '../../constants/appSize';
import {Message} from '../../models/Message';
import firestore from '@react-native-firebase/firestore';
import {useSelector} from 'react-redux';
import {authSelector} from '../../redux/reducers/authReducer';
import {global} from '../../styles/global';
import {showToast} from '../../utils/showToast';

const ConversationsScreen = ({navigation, route}: any) => {
  const [mesContent, setMesContent] = useState('');
  // const {item}: {item: {user1: string; user2: string; createdAt: number}} =
  //   route.params;
  const [conversations, setConversations] = useState<Message[]>([]);

  const scrollRef = useRef<any>(null);
  const user = useSelector(authSelector);

  useEffect(() => {
    conversations.length === 0 &&
      setTimeout(() => {
        handlePushMessage('Bot', 'Hello, glad to serve you!');
      }, 500);
  }, [conversations]);

  const handlePushMessage = async (id: string, val: string) => {
    const items = conversations;
    items.push({
      content: val,
      createdAt: Date.now(),
      user1: 'Bot',
      user2: user.uid,
      from: id,
      id: (Math.random() * 10000).toString(),
      idModified: false,
      isRead: false,
      like: 0,
      to: id === 'Bot' ? user.uid : 'Bot',
      updatedAt: Date.now(),
    });

    setConversations(items);
  };

  const handleAddUserMess = async () => {
    handlePushMessage(user.uid, mesContent).then(() => {
      setTimeout(() => {
        handlePushMessage('Bot', 'Hello, glad to serve you!');
      }, Math.floor(Math.random() * 1000));
    });
    setMesContent('');
  };

  const RenderContent = (item: Message, index: number) => (
    <View key={item.id}>
      <RowComponent
        styles={{
          justifyContent: item.from !== user?.uid ? 'flex-start' : 'flex-end',
          alignItems: 'flex-start',
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
            maxWidth: (appSize.width - 32) * 0.75,
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
    </View>
  );

  return (
    <Container barStyle="light-content" top={0}>
      <SectionComponent
        styles={{backgroundColor: appColors.info4, paddingTop: 32}}>
        <RowComponent>
          <TitleComponent text="Customer service" color={appColors.white} />
        </RowComponent>
      </SectionComponent>
      <View
        style={{
          flex: 1,
          backgroundColor: '#f3f3f3',
          paddingBottom: 16,
          paddingHorizontal: 16,
        }}>
        <TouchableOpacity
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginVertical: 8,
          }}
          onPress={() => {
            setConversations([]);
          }}>
          <TextComponent
            size={12}
            color={appColors.gray}
            flex={0}
            text="Load more previous messages"
          />
        </TouchableOpacity>
        {conversations.length > 0 && (
          <FlatList
            ref={scrollRef}
            onContentSizeChange={() => scrollRef.current.scrollToEnd()}
            showsVerticalScrollIndicator={false}
            data={conversations}
            renderItem={({item, index}) => RenderContent(item, index)}
          />
        )}
      </View>
      <SectionComponent>
        <RowComponent>
          <InputCompoment
            placeholder="Please enter"
            value={mesContent}
            max={150}
            clear
            styles={{marginBottom: 0, flex: 1}}
            onChange={val => setMesContent(val)}
          />
          <SpaceComponent width={8} />
          <TouchableOpacity
            onPress={
              mesContent
                ? () => {
                    handleAddUserMess();
                  }
                : () => showToast('Enter your message!')
            }
            style={[
              global.button,
              {
                flex: 0,
                backgroundColor: appColors.info4,
                borderRadius: 4,
              },
            ]}>
            <TextComponent
              text="Send"
              size={12}
              color={appColors.white}
              flex={0}
            />
          </TouchableOpacity>
        </RowComponent>
      </SectionComponent>
    </Container>
  );
};

export default ConversationsScreen;
