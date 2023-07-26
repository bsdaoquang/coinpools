import auth from '@react-native-firebase/auth';
import {
  ArrowRight2,
  Call,
  Camera,
  InfoCircle,
  Lock,
  Lock1,
  LogoutCurve,
  Setting2,
} from 'iconsax-react-native';
import React from 'react';
import {
  ActivityIndicator,
  Image,
  ImageBackground,
  ScrollView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {
  Container,
  RowComponent,
  TextComponent,
  TitleComponent,
} from '../../components';
import {appColors} from '../../constants/appColors';
import {fontFamilys} from '../../constants/fontFamlily';
import {global} from '../../styles/global';

const ProfileScreen = ({navigation}: any) => {
  const userDetail = auth().currentUser;

  const menuUser: {
    key: string;
    label: string;
    icon: any;
    url?: string;
    color: string;
    hide?: boolean;
    onPress: () => void;
  }[] = [
    {
      key: 'ProfileDetail',
      label: 'Profile',
      icon: <InfoCircle size="20" color={appColors.primary} variant="Bold" />,
      color: '#F1F7FF',
      url: 'ProfileDetail',
      onPress: () => {},
    },

    {
      key: 'changePass',
      label: 'Change password',
      icon: <Lock size="20" color="#A97D5D" variant="Bold" />,
      url: 'ChangePassword',
      color: '#FFF2E8',
      onPress: () => {},
    },
    {
      key: 'setting',
      label: 'Setting',
      icon: <Setting2 size="20" color="#5DA99B" variant="Bold" />,
      url: 'ProfileSetting',
      color: '#EBF5F3',
      onPress: () => {},
    },
    {
      key: 'support',
      label: 'Support',
      icon: <Call size="20" color="#6A6AE4" variant="Bold" />,
      url: 'SuppotScreen',
      color: '#EBEBF5',
      onPress: () => {},
    },
    {
      key: 'logout',
      label: 'Sign Out',
      icon: <LogoutCurve size="20" color="#DC5757" variant="Bold" />,
      color: '#FFEEEE',
      onPress: async () => {
        await auth().signOut();
      },
    },
  ];

  return (
    <>
      <StatusBar barStyle={'light-content'} />
      {userDetail ? (
        <View
          style={{
            flex: 1,
            backgroundColor: appColors.white,
          }}>
          <ImageBackground
            source={require('../../assets/images/background-user.png')}
            resizeMode="cover"
            style={{
              ...global.inner,
              justifyContent: 'center',
              alignItems: 'center',
              paddingVertical: 16,
              paddingTop: 42,
              height: 250,
              paddingBottom: 60,
            }}>
            <View style={{position: 'relative'}}>
              <Image
                source={
                  userDetail.photoURL
                    ? {uri: userDetail.photoURL}
                    : require('../../assets/images/avatar-default.png')
                }
                style={{
                  ...global.avatar,
                  width: 80,
                  height: 80,
                  borderRadius: 50,
                }}
                resizeMode="cover"
              />
              <TouchableOpacity
                style={{
                  position: 'absolute',
                  bottom: 0,
                  right: 0,
                  backgroundColor: appColors.gray7,
                  padding: 4,
                  borderWidth: 2,
                  borderColor: appColors.white,
                  borderRadius: 100,
                }}
                onPress={() => {}}>
                <Camera size={16} color={appColors.gray} />
              </TouchableOpacity>
            </View>

            <TitleComponent
              font={fontFamilys.bold}
              text={userDetail.displayName ?? 'User name'}
              size={18}
              color={appColors.white}
              flex={0}
              styles={{
                marginVertical: 12,
                textTransform: 'capitalize',
              }}
            />
            <RowComponent
              onPress={() => {}}
              styles={{
                backgroundColor: 'rgba(255, 255, 255, 0.2)',
                borderRadius: 100,
                paddingHorizontal: 8,
                paddingVertical: 2,
              }}>
              <TextComponent
                text={userDetail.email ?? ''}
                flex={0}
                color={'rgba(255, 255, 255, 0.8)'}
                size={12}
                height={16}
              />
            </RowComponent>
          </ImageBackground>

          <ScrollView
            showsVerticalScrollIndicator={false}
            style={{
              ...global.inner,
              flex: 1,
              marginTop: -38,
              backgroundColor: appColors.white,
              borderTopLeftRadius: 40,
              borderTopRightRadius: 40,
              // marginBottom: 60,
              overflow: 'scroll',
            }}>
            <>
              {menuUser.map(
                (item, index) =>
                  !item.hide && (
                    <TouchableOpacity
                      style={{
                        ...global.rowCenter,
                        paddingVertical: 16,
                        borderBottomWidth:
                          index === menuUser.length - 1 ? 0 : 1,
                        borderBottomColor: '#F3F5F6',
                      }}
                      key={item.key}
                      onPress={item.onPress}>
                      <View
                        style={{
                          width: 40,
                          height: 40,
                          backgroundColor: item.color,
                          justifyContent: 'center',
                          alignItems: 'center',
                          borderRadius: 6,
                          marginRight: 16,
                        }}>
                        {item.icon}
                      </View>

                      <TextComponent
                        text={item.label}
                        color={
                          item.key === 'logout'
                            ? appColors.error
                            : appColors.text
                        }
                      />
                      {item.url && (
                        <ArrowRight2 size={22} color={appColors.description} />
                      )}
                    </TouchableOpacity>
                  ),
              )}
            </>
          </ScrollView>
        </View>
      ) : (
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <ActivityIndicator />
          <Text style={{...global.text, flex: 0}}>Loading...</Text>
        </View>
      )}
    </>
  );
};
export default ProfileScreen;
