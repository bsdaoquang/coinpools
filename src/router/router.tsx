import {View, Text} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeNavigator from '../navigators/HomeNavigator';
import MessageNavigator from '../navigators/MessageNavigator';
import ProfileNavigator from '../navigators/ProfileNavigator';
import {Home, Message2, Messages2, User} from 'iconsax-react-native';
import {appColors} from '../constants/appColors';

const Router = () => {
  const Tabs = createBottomTabNavigator();

  return (
    <Tabs.Navigator
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarHideOnKeyboard: true,
        tabBarIcon: ({focused, size, color}) => {
          size = 22;
          let icon;

          color = focused ? appColors.primary : appColors.gray;

          if (route.name === 'Home') {
            icon = (
              <Home
                size={size}
                color={color}
                variant={focused ? 'Bold' : 'Outline'}
              />
            );
          } else if (route.name === 'Message') {
            icon = (
              <Messages2
                size={size}
                color={color}
                variant={focused ? 'Bold' : 'Outline'}
              />
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
      <Tabs.Screen name="Profile" component={ProfileNavigator} />
    </Tabs.Navigator>
  );
};

export default Router;
