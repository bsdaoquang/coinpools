import {View, Text} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {GrabOrders} from '../screens';

const GrabNavigator = () => {
  const GrabStack = createNativeStackNavigator();
  return (
    <GrabStack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <GrabStack.Screen name="GrabOrder" component={GrabOrders} />
    </GrabStack.Navigator>
  );
};

export default GrabNavigator;
