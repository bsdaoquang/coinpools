import {View, Text} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Conversations, MessageScreen} from '../screens';

const MessageNavigator = () => {
  const MessStack = createNativeStackNavigator();
  return (
    <MessStack.Navigator screenOptions={{headerShown: false}}>
      <MessStack.Screen name="MessageSceen" component={MessageScreen} />
      <MessStack.Screen name="Conversations" component={Conversations} />
    </MessStack.Navigator>
  );
};

export default MessageNavigator;
