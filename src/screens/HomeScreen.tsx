import firestore from '@react-native-firebase/firestore';
import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  Image,
  ImageBackground,
  TouchableOpacity,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {useSelector} from 'react-redux';
import {
  Container,
  MarqueeTextComponent,
  MenuComponent,
  RowComponent,
  SectionComponent,
  SpaceComponent,
  TabbarComponent,
  TextComponent,
  TitleComponent,
} from '../components';
import {appColors} from '../constants/appColors';
import {appSize} from '../constants/appSize';
import {authSelector} from '../redux/reducers/authReducer';
import {global} from '../styles/global';

const HomeScreen = ({navigation}: any) => {
  const [userDetail, setUserDetail] = useState<any>();
  const [isLoading, setIsLoading] = useState(false);
  const auth = useSelector(authSelector);

  useEffect(() => {
    getUserDetail();
  }, [auth.uid]);

  const getUserDetail = async () => {
    setIsLoading(true);
    await firestore()
      .collection('users')
      .doc(auth.uid)
      .get()
      .then(snap => {
        if (!snap.exists) {
          console.log('User not found!');
        } else {
          setUserDetail({
            uid: auth.uid,
            ...snap.data(),
          });
          setIsLoading(false);
        }
      })
      .catch(e => {
        console.log(e);
        setIsLoading(false);
      });
  };

  const commissionImages = [
    'https://xxxx.coinpools.me/upload/114945a0b5552a45/e1bfb42b21bc494f.jpg',
    'https://xxxx.coinpools.me/upload/76c16bfb2270999c/1041a5b15f369744.jpg',
    'https://xxxx.coinpools.me/upload/0cfc01754ab11f5b/95e4ed0c1d3aaf81.jpg',
  ];

  return (
    <Container barStyle="dark-content" isScroll>
      {isLoading ? (
        <ActivityIndicator />
      ) : userDetail ? (
        <>
          <SectionComponent styles={{paddingTop: 0}}>
            <RowComponent>
              <View style={{flex: 1}}>
                <TitleComponent
                  text={`Hello: ${userDetail.nickname}`}
                  flex={0}
                />
                <TextComponent text={userDetail.type} color={appColors.gray} />
              </View>

              <TouchableOpacity>
                <Image
                  source={
                    userDetail.photoURL
                      ? {uri: userDetail.photoURL}
                      : require('../assets/images/avatar-default.png')
                  }
                  style={[global.avatar]}
                />
              </TouchableOpacity>
            </RowComponent>
          </SectionComponent>
          <SectionComponent>
            <ImageBackground
              source={require('../assets/images/info_bj.4de5893.jpg')}
              imageStyle={{
                borderRadius: 12,
                resizeMode: 'cover',
              }}
              style={[global.card]}>
              <TextComponent text="Account balance" />
              <TitleComponent text="-5539.93 (USDT)" size={22} />
              <SpaceComponent height={18} />
              <RowComponent>
                <View
                  style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    flex: 1,
                  }}>
                  <TitleComponent text="0" size={18} />
                  <TextComponent
                    styles={{textAlign: 'center'}}
                    text="Yesterday eanings"
                    size={12}
                    color={appColors.gray1}
                  />
                </View>
                <View
                  style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    flex: 1,
                  }}>
                  <TitleComponent text="3300.07" size={18} />
                  <TextComponent
                    styles={{textAlign: 'center'}}
                    text="Cumulative income"
                    size={12}
                    color={appColors.gray1}
                  />
                </View>
                <View
                  style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    flex: 1,
                  }}>
                  <TitleComponent text="0" size={18} />
                  <TextComponent
                    styles={{textAlign: 'center'}}
                    text="Earnings today"
                    size={12}
                    color={appColors.gray1}
                  />
                </View>
              </RowComponent>
            </ImageBackground>
          </SectionComponent>
          <MarqueeTextComponent />

          <MenuComponent />
          <SectionComponent>
            <TabbarComponent title="Mission Hall" />
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('Grap', {
                  screen: 'GrabOrders',
                })
              }>
              <LinearGradient
                style={[global.card]}
                start={{x: 0, y: 0}}
                end={{x: 1, y: 0}}
                colors={['#CDDC39', '#8BC34A', '#FFEB3B']}>
                <TitleComponent text="Commission rate: 30%" />
                <TextComponent text="Matching interval: 0.00" size={12} />
                <SpaceComponent height={12} />
                <RowComponent
                  styles={{flex: 1, justifyContent: 'space-between'}}>
                  {commissionImages.map((img, index) => (
                    <Image
                      key={`img${index}`}
                      source={{uri: img}}
                      style={{
                        width: (appSize.width - 100) / 3,
                        height: (appSize.width - 100) / 3,
                        resizeMode: 'cover',
                      }}
                    />
                  ))}
                </RowComponent>
              </LinearGradient>
            </TouchableOpacity>
          </SectionComponent>
        </>
      ) : (
        <TextComponent text="User not found!" />
      )}
    </Container>
  );
};

export default HomeScreen;
