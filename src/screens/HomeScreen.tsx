import React, {useEffect, useState} from 'react';
import {
  Image,
  ImageBackground,
  Touchable,
  TouchableOpacity,
  View,
} from 'react-native';
import {
  CardContent,
  Container,
  MenuComponent,
  RowComponent,
  SectionComponent,
  SpaceComponent,
  TagComponent,
  TextComponent,
  TitleComponent,
} from '../components';
import {global} from '../styles/global';
import {useSelector} from 'react-redux';
import {authSelector} from '../redux/reducers/authReducer';
import {appColors} from '../constants/appColors';
import firestore from '@react-native-firebase/firestore';
import MarqueeText from 'react-native-marquee';
import {Brodcast, Home} from 'iconsax-react-native';

const HomeScreen = ({navigation}: any) => {
  const [userDetail, setUserDetail] = useState<any>();
  const auth = useSelector(authSelector);

  useEffect(() => {
    getUserDetail();
  }, [auth.uid]);

  const getUserDetail = async () => {
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
        }
      });
  };

  return (
    <Container barStyle="dark-content" isScroll>
      {userDetail ? (
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
          <SectionComponent>
            <RowComponent>
              <Image
                source={require('../assets/images/gg.png')}
                style={{
                  width: 30,
                  height: 30,
                  resizeMode: 'contain',
                  marginRight: 12,
                }}
              />
              <View
                style={{
                  backgroundColor: appColors.gray7,
                  padding: 8,
                  flex: 1,
                }}>
                <MarqueeText
                  style={[global.text]}
                  speed={1}
                  delay={10000}
                  loop
                  marqueeOnStart>
                  Lorem Ipsum is industry.Lorem Ipsum is industry.Lorem Ipsum is
                  industry.Lorem Ipsum is industry.Lorem Ipsum is industry.
                </MarqueeText>
              </View>
            </RowComponent>
          </SectionComponent>

          <MenuComponent />
        </>
      ) : (
        <TextComponent text="User not found!" />
      )}
    </Container>
  );
};

export default HomeScreen;
