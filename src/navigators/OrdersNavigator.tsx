import {View, Text} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Products} from '../screens';

const OrdersNavigator = () => {
  const OrderStack = createNativeStackNavigator();
  return (
    <OrderStack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <OrderStack.Screen name="OrderScreens" component={Products} />
    </OrderStack.Navigator>
  );
};

export default OrdersNavigator;
