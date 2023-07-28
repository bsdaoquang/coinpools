import {Notification, Setting2} from 'iconsax-react-native';
import React from 'react';
import {
  Alert,
  Image,
  ImageBackground,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {
  ButtonComponent,
  ButtonIcon,
  Container,
  RowComponent,
  SectionComponent,
  SpaceComponent,
  TagComponent,
  TextComponent,
  TitleComponent,
} from '../../components';
import {appColors} from '../../constants/appColors';
import {addAuth, authSelector} from '../../redux/reducers/authReducer';
import {global} from '../../styles/global';
import {MenuItem} from '../../models/Menu';
import {appSize} from '../../constants/appSize';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ProfileScreen = ({navigation}: any) => {
  const userDetail = useSelector(authSelector);

  const menuUsers: MenuItem[] = [
    {
      key: 'Infomation',
      title: 'Personal information',
      icon: (
        <Image
          source={require('../../assets/images/user-info.png')}
          style={styles.buttonIcon}
        />
      ),
    },
    {
      key: 'Orders',
      title: 'Grab order record',
      icon: (
        <Image
          source={require('../../assets/images/user-grap.png')}
          style={styles.buttonIcon}
        />
      ),
      onPress: () =>
        navigation.navigate('Orders', {
          screen: 'OrderScreens',
        }),
    },
    {
      key: 'Detail',
      title: 'Account details',
      icon: (
        <Image
          source={require('../../assets/images/account-detail.png')}
          style={styles.buttonIcon}
        />
      ),
    },
    {
      key: 'Recharge',
      title: 'Recharge record',
      icon: (
        <Image
          source={require('../../assets/images/account-balance.png')}
          style={styles.buttonIcon}
        />
      ),
    },
    {
      key: 'Withdrawals',
      title: 'Withdrawals record',
      icon: (
        <Image
          source={require('../../assets/images/withdaw.png')}
          style={styles.buttonIcon}
        />
      ),
    },
    {
      key: 'InviteFriends',
      title: 'Invite friends',
      icon: (
        <Image
          source={require('../../assets/images/invite.png')}
          style={styles.buttonIcon}
        />
      ),
    },
    {
      key: 'SystemInfo',
      title: 'System information',
      icon: (
        <Image
          source={require('../../assets/images/user-chat.png')}
          style={styles.buttonIcon}
        />
      ),
    },
    {
      key: 'Team',
      title: 'My team',
      icon: (
        <Image
          source={require('../../assets/images/team.png')}
          style={styles.buttonIcon}
        />
      ),
    },
  ];

  const handleNavigation = (item: MenuItem) => {
    navigation.navigate(item.key);
  };

  const dispatch = useDispatch();

  const handleLogout = () => {
    Alert.alert('', 'Are you sure to exit?', [
      {
        text: 'Cancel',
        onPress: () => {},
      },
      {
        text: 'Confirm',
        style: 'destructive',
        onPress: async () => {
          await AsyncStorage.clear().then(() => {
            dispatch(addAuth({}));
          });
        },
      },
    ]);
  };

  return (
    <Container top={0} isScroll>
      <ImageBackground
        source={require('../../assets/images/background-user.png')}>
        <SectionComponent styles={{paddingTop: 32}}>
          <RowComponent justify="space-between">
            <ButtonIcon
              icon={<Notification size={20} color={appColors.text} />}
              onPress={() => {}}
            />
            <ButtonIcon
              icon={<Setting2 size={20} color={appColors.text} />}
              onPress={() => navigation.navigate('Infomation')}
            />
          </RowComponent>
          <RowComponent justify="flex-start" styles={{marginVertical: 12}}>
            <Image
              source={
                userDetail.photoURL
                  ? {uri: userDetail.photoURL}
                  : require('../../assets/images/avatar-default.png')
              }
              style={[global.avatar]}
            />
            <View
              style={{
                flex: 1,
                paddingHorizontal: 12,
              }}>
              <RowComponent
                justify="flex-start"
                styles={{alignItems: 'center'}}>
                <TitleComponent text={userDetail.nickname} flex={0} />
                <SpaceComponent width={6} />
                <TagComponent text="LV1" color={appColors.gray} />
              </RowComponent>
              <TextComponent text={`Invitation code: ${`8c96`}`} size={12} />
            </View>
          </RowComponent>
          <ImageBackground
            source={require('../../assets/images/card.png')}
            imageStyle={{
              borderTopLeftRadius: 8,
              borderTopRightRadius: 8,
            }}
            style={{padding: 8, paddingBottom: 24}}>
            <TextComponent
              text="Account balance"
              size={12}
              flex={0}
              color={appColors.gray7}
            />
            <SpaceComponent height={8} />
            <RowComponent>
              <TitleComponent text="-5539.93" size={20} color="#f2d8be" />
              <RowComponent>
                <TouchableOpacity
                  style={styles.button}
                  onPress={() => navigation.navigate('Recharge')}>
                  <TextComponent
                    text="Recharge"
                    flex={0}
                    size={12}
                    color={appColors.gray7}
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.button}
                  onPress={() => navigation.navigate('Withdrawal')}>
                  <TextComponent
                    text="Withdrawal"
                    flex={0}
                    size={12}
                    color={appColors.gray7}
                  />
                </TouchableOpacity>
              </RowComponent>
            </RowComponent>
          </ImageBackground>
        </SectionComponent>
      </ImageBackground>
      <Image
        source={require('../../assets/images/card-bottom.png')}
        style={{
          width: 'auto',
          resizeMode: 'contain',
          marginTop: -26,
          height: 28,
          zIndex: 5,
        }}
      />
      <StatusBar barStyle={'dark-content'} />

      <RowComponent styles={{flex: 1, flexWrap: 'wrap'}}>
        {menuUsers.map(item => (
          <TouchableOpacity
            style={styles.buttonMenu}
            key={item.key}
            onPress={
              item.onPress ? item.onPress : () => handleNavigation(item)
            }>
            {item.icon}
            <TextComponent text={item.title} flex={0} size={12} />
          </TouchableOpacity>
        ))}
      </RowComponent>

      <SectionComponent styles={{marginTop: 12}}>
        <ButtonComponent
          text="Signout"
          color="#2f3848"
          onPress={handleLogout}
        />
      </SectionComponent>
    </Container>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingHorizontal: 12,
    padding: 6,
    backgroundColor: '#5d646e',
    marginHorizontal: 4,
    borderRadius: 24,
  },
  buttonMenu: {
    padding: 12,
    justifyContent: 'center',
    alignItems: 'center',
    width: appSize.width / 2,
    borderWidth: 0.2,
    borderColor: appColors.gray2,
  },
  buttonIcon: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
  },
});
export default ProfileScreen;
