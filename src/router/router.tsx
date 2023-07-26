import {View, Text, ImageBackground, Image} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeNavigator from '../navigators/HomeNavigator';
import MessageNavigator from '../navigators/MessageNavigator';
import ProfileNavigator from '../navigators/ProfileNavigator';
import {
  DocumentPrevious,
  DocumentText1,
  Element,
  Home,
  Message2,
  Messages2,
  User,
} from 'iconsax-react-native';
import {appColors} from '../constants/appColors';
import {appSize} from '../constants/appSize';
import {TextComponent} from '../components';

const Router = () => {
  const Tabs = createBottomTabNavigator();

  return (
    <Tabs.Navigator
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarHideOnKeyboard: true,
        tabBarBackground: () => (
          <Image
            source={require('../assets/images/cbimage.png')}
            style={{
              width: '100%',
              height: '100%',
              resizeMode: 'cover',
            }}
          />
        ),
        tabBarStyle: {
          margin: 0,
          padding: 0,
          backgroundColor: 'transparent',
          elevation: 0,
          borderTopWidth: 0,
        },
        tabBarIcon: ({focused, size, color}) => {
          size = 22;
          let icon;

          color = focused ? appColors.primary : appColors.gray;

          if (route.name === 'Home') {
            icon = (
              <Element
                size={size}
                color={color}
                variant={focused ? 'Bold' : 'Outline'}
              />
            );
          } else if (route.name === 'Message') {
            icon = (
              <DocumentText1
                size={size}
                color={color}
                variant={focused ? 'Bold' : 'Outline'}
              />
            );
          } else if (route.name === 'Grap') {
            icon = (
              <ImageBackground
                source={{uri: 'https://xxxx.coinpools.me/image/5425445-1.png'}}
                style={{
                  width: 54,
                  height: 54,
                  marginBottom: 25,
                  borderRadius: 100,
                  backgroundColor: 'coral',
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderWidth: 0,
                }}></ImageBackground>
            );
          } else {
            icon = (
              <User
                size={size}
                color={color}
                variant={focused ? 'Bold' : 'Outline'}
              />
            );
          }

          return icon;
        },
        tabBarShowLabel: false,
      })}>
      <Tabs.Screen name="Home" component={HomeNavigator} />
      <Tabs.Screen name="Message" component={MessageNavigator} />
      <Tabs.Screen name="Grap" component={ProfileNavigator} />
      <Tabs.Screen name="Profile4" component={ProfileNavigator} />
      <Tabs.Screen name="Profile2" component={ProfileNavigator} />
    </Tabs.Navigator>
  );
};

export default Router;
