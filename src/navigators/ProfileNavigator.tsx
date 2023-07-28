import {View, Text} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Infomation, ProfileScreen, Recharge, Withdrawal} from '../screens';

const ProfileNavigator = () => {
  const ProfileStack = createNativeStackNavigator();
  return (
    <ProfileStack.Navigator screenOptions={{headerShown: false}}>
      <ProfileStack.Screen name="ProfileScreen" component={ProfileScreen} />
      <ProfileStack.Screen name="Infomation" component={Infomation} />
      <ProfileStack.Screen name="Recharge" component={Recharge} />
      <ProfileStack.Screen name="Withdrawal" component={Withdrawal} />
    </ProfileStack.Navigator>
  );
};

export default ProfileNavigator;
